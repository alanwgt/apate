import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
import { RequestProvider } from "../../providers/request/request";
import { protos } from "../../proto/bundle";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { UserProvider } from "../../providers/user/user";
import { ToastProvider } from "../../providers/toast/toast";
import { SettingsProvider } from "../../providers/settings/settings";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  private username: string;
  private createdAt: string;
  private iconName = "add";
  private isContact = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private req: RequestProvider,
    private crypto: CryptoProvider,
    private user: UserProvider,
    private toast: ToastProvider,
    private settings: SettingsProvider,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.username = navParams.get("username") || ":(";
    this.createdAt = navParams.get("createdAt") || ":(";
  }

  handleNavButton() {
    if (this.isContact) {
      this.actionSheetCtrl
        .create({
          title: "Options",
          enableBackdropDismiss: true,
          buttons: [
            {
              text: "block",
              icon: "ios-eye-off"
            },
            {
              text: "delete",
              role: "destructive",
              icon: "ios-trash"
            },
            {
              text: "cancel",
              role: "cancel"
            }
          ]
        })
        .present();
    }
  }

  ionViewWillEnter() {
    if (this.user.username === this.username) {
      this.isContact = true;
      this.iconName = "bonfire";
      return;
    }

    for (const c of this.settings.getContacts()) {
      if (c.username === this.username) {
        this.isContact = true;
        this.iconName = "more";
        break;
      }
    }
  }

  /**
   * Call this function to request a friend approval to the user of this.username
   */
  public async addUser() {
    const message = this.crypto.genBoxForServer(this.user.username);

    try {
      const res = await this.req.request("addUser", message, this.username);
      if (res.data.status === protos.ServerResponse.Status.Ok) {
        this.toast.success("Requested contact approval to: " + this.username);
      } else {
        this.toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
