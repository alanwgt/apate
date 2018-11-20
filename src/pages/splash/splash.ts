import { Component, ViewChild, ElementRef } from "@angular/core";

import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { HomePage } from "../home/home";
import { AuthenticationPage } from "../authentication/authentication";

import { AndroidPermissions } from "@ionic-native/android-permissions";
import { AlertController } from "ionic-angular";
import { ToastController } from "ionic-angular";

import { CryptoProvider } from "../../providers/crypto/crypto";
import { UserProvider } from "../../providers/user/user";
import {
  NetworkProvider,
  ConnectionStatus
} from "../../providers/network/network";
import naclString from "tweetnacl-util";

import Funnies from "funnies";
import { protos } from "../../proto/bundle";
import { RequestProvider } from "../../providers/request/request";

@IonicPage()
@Component({
  selector: "page-splash",
  templateUrl: "splash.html"
})
export class SplashPage {
  @ViewChild("splashMessage") domMessage: ElementRef;
  private messageInterval: NodeJS.Timeout;
  private funnies: any;

  static readonly PERMISSIONS = {
    CAMERA: {
      message:
        "we need to access the camera so that you can take pictures to send them."
    }
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private androidPermissions: AndroidPermissions,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private crypto: CryptoProvider,
    private network: NetworkProvider,
    private userProvider: UserProvider,
    private platform: Platform,
    private request: RequestProvider
  ) {
    this.funnies = new Funnies();
  }

  async ionViewDidLoad() {
    this.setFunnyMessage();
    this.messageInterval = setInterval(() => {
      this.setFunnyMessage();
    }, 4000);

    // load the heavy stuff
    // the crypto keys MUST be loaded before anything else!
    try {
      await this.crypto.init();
      await this.userProvider.init();

      // check if the user is authenticated, if not, there is no need to perform a handshake
      if (!this.userProvider.isAuthenticated()) {
        this.navCtrl.setRoot(AuthenticationPage);
        return;
      }

      await this.doHandshake();
    } catch (err) {
      console.error(err);

      if (err.toString() == "Error: Network Error") {
        err = "It seems that our server is offline. Please, try again later.";
      }

      this.alertCtrl
        .create({
          title: "Whoops! :(",
          subTitle: err,
          message: "The app will now exit.",
          buttons: [
            {
              text: "ok",
              handler: () => {
                this.platform.exitApp();
              }
            }
          ],
          enableBackdropDismiss: false
        })
        .present();
      return;
    }

    if (this.userProvider.isAuthenticated()) {
      this.navCtrl.setRoot(HomePage);
    } else {
      this.navCtrl.setRoot(AuthenticationPage);
    }

    // TODO: the network check is not working!
    // if ((this.network.status = ConnectionStatus.Offline)) {
    //   this.toastCtrl
    //     .create({
    //       message:
    //         "You are offline! Please, make sure that you are connected."
    //     })
    //     .present();
    //   // FIXME: terminate program
    //   return;
    // }
  }

  private setFunnyMessage() {
    this.domMessage.nativeElement.textContent = this.funnies.message();
  }

  ionViewWillLeave() {
    clearInterval(this.messageInterval);
  }

  private _checkAllPermissions() {
    for (const p of Object.keys(SplashPage.PERMISSIONS)) {
      const androidPermission = this.androidPermissions.PERMISSION[p];
      this._checkPermission(androidPermission).then(
        //TODO: check if we have the permission on res
        res => console.log(res.hasPermission),
        err => this._permissionNeeded(p)
      );
    }
  }

  private _checkPermission(permission: string) {
    return this.androidPermissions.checkPermission(permission);
  }

  private _requestPermission(permission: string): Promise<any> {
    return this.androidPermissions.requestPermission(permission);
  }

  private _permissionNeeded(k: string) {
    this.alertCtrl
      .create({
        title: `Permission ${k} needed!`,
        message:
          SplashPage.PERMISSIONS[k].message +
          "\nDo you want to grant the permission now?",
        buttons: [
          {
            role: "cancel",
            text: "no"
          },
          {
            text: "yes",
            handler: () => {
              this._requestPermission(this.androidPermissions.PERMISSION[k]);
            }
          }
        ]
      })
      .present();
  }

  /**
   * doHandshake will tell the server that our keys are still valid.
   * if the handshake fails, probably the user's public key was updated(?)
   *
   * @private
   * @returns {Promise<boolean>}
   * @memberof AuthenticationPage
   */
  public async doHandshake(): Promise<void> {
    const k = "handshake:" + this.userProvider.username;
    const nonce = this.crypto.genNonce();
    const encrypted = this.crypto.createServerBox(k, nonce);
    const message = protos.DeviceRequest.create({
      nonce: naclString.encodeBase64(nonce),
      paylod: naclString.encodeBase64(encrypted),
      username: this.userProvider.username
    });
    const buffer = protos.DeviceRequest.encode(message).finish();
    const response = await this.request.request("handshake", buffer);

    if (
      response.data.status === protos.ServerResponse.Status.Ok &&
      response.data.message === k
    ) {
      return;
    }

    throw new Error("Handshake failed!");
  }
}
