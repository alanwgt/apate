import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { ToastController } from "ionic-angular";

import { CryptoProvider } from "../../providers/crypto/crypto";
import { HomePage } from "../home/home";
import { RequestProvider } from "../../providers/request/request";
import { protos } from "../../proto/bundle";
import { UserProvider } from "../../providers/user/user";
import naclString from "tweetnacl-util";
import { stat } from "fs";
import { AxiosResponse } from "axios";
import { FcmProvider } from "../../providers/fcm/fcm";

/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-authentication",
  templateUrl: "authentication.html"
})
export class AuthenticationPage {
  @ViewChild("username") username: HTMLInputElement;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private crypto: CryptoProvider,
    private request: RequestProvider,
    private userProvider: UserProvider,
    private toastCtrl: ToastController,
    private fcm: FcmProvider
  ) {}

  /**
   * Use this function to register the user in the back-end
   */
  private async signup() {
    const [valid, err] = this.validateUsernameForSignup();

    if (!valid) {
      const errMessage = err.map(e => "> " + e).join("\n");
      this.alertCtrl
        .create({
          title: "Whoops!",
          subTitle: errMessage,
          buttons: ["ok"],
          enableBackdropDismiss: false
        })
        .present();
      return;
    }

    const username = this.username.value.trim();
    // const fcmToken = await this.firebaseMessaging.getToken();
    const fcmToken = await this.fcm.getToken();
    const pubKey = this.crypto.getB64PublicKey();

    const message = protos.AccountSignUp.create({
      username,
      fcmToken,
      pubK: pubKey
    });

    const buffer = protos.AccountSignUp.encode(message).finish();
    let response: AxiosResponse<protos.ServerResponse>;

    try {
      response = await this.request.request("signup", buffer);
    } catch (err) {
      let message: string = err;

      // 409 = Conflict, username already taken
      message =
        err.response.data && err.response.data.message
          ? err.response.data.message
          : "This username is already taken, please choose another.";

      this.toastCtrl
        .create({
          message,
          duration: 5000,
          cssClass: "toast-error"
        })
        .present();
      return;
    }

    if (response.data.status === protos.ServerResponse.Status.Ok) {
      const status = await this.userProvider.create(message);
      if (!status) {
        this.toastCtrl
          .create({
            message: "Whoops! Something went wrong. Try again later."
          })
          .present();
        return;
      }
      this.alertCtrl
        .create({
          title: "Success!",
          message: "Your account was successfully created!",
          buttons: [
            {
              text: "ok",
              handler: () => {
                this.navCtrl.setRoot(HomePage);
              }
            }
          ],
          enableBackdropDismiss: false
        })
        .present();
    } else {
      // TODO!
    }
  }

  /**
   * Checks if the entered username is valid
   *
   * @private
   * @returns {[boolean, string[]]}
   * @memberof AuthenticationPage
   */
  private validateUsernameForSignup(): [boolean, string[]] {
    const errors: string[] = [];
    let checker: boolean;
    let err: string;

    [checker, err] = this.checkMinLength();
    if (!checker) {
      errors.push(err);
    }

    if (errors.length > 0) {
      return [false, errors];
    }

    //TODO: check if the username is not taken (?here?)

    return [true, undefined];
  }

  private checkMinLength(): [boolean, string] {
    if (this.username.value.trim().length >= 4) {
      return [true, undefined];
    }
    return [false, "the username doesn't have the minimum length of 4 chars!"];
  }
}
