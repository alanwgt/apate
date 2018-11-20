import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { RequestProvider } from "../../providers/request/request";
import { protos } from "../../proto/bundle";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { UserProvider } from "../../providers/user/user";
import { AxiosResponse } from "axios";
import { ToastProvider } from "../../providers/toast/toast";

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private req: RequestProvider,
    private crypto: CryptoProvider,
    private user: UserProvider,
    private toast: ToastProvider,
    private alertCtrl: AlertController
  ) {}

  /**
   * Called when the user clicks on "delete account" action.
   */
  public async deleteAccount() {
    this.alertCtrl
      .create({
        title: "Warning!",
        message:
          "This action cannot be undone. Do you want to delete your account?",
        buttons: [
          {
            text: "yes",
            handler: () => {
              this.doDelete();
            }
          },
          {
            text: "no",
            role: "cancel"
          }
        ]
      })
      .present();
  }

  /**
   * This function will try to delete the user's account in the server.
   * If the server deletes the data, device's data is also deleted and
   * the user is redirected to SplashPage
   */
  private async doDelete() {
    const message = this.crypto.genBoxForServer("", this.user.username);
    let res: AxiosResponse<protos.ServerResponse>;

    try {
      res = await this.req.request("deleteAccount", message);
      if (res.data.status === protos.ServerResponse.Status.Ok) {
        // the account was successfully deleted in the server side!
        this.user.wipe(this.navCtrl);
      } else {
        this.toast.error(res.data.message);
        return;
      }
    } catch (err) {
      this.toast.error(
        err.response.data && err.response.data.message
          ? err.response.data.message
          : err
      );
      return;
    }
  }
}
