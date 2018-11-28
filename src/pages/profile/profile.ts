import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController
} from "ionic-angular";
import { RequestProvider } from "../../providers/request/request";
import { protos } from "../../proto/bundle";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { UserProvider } from "../../providers/user/user";
import { ToastProvider } from "../../providers/toast/toast";
import { SettingsProvider } from "../../providers/settings/settings";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

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
    private actionSheetCtrl: ActionSheetController,
    private spinner: SpinnerDialog,
    private alertCtrl: AlertController
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
              icon: "ios-eye-off",
              handler: () => {
                this.block();
              }
            },
            {
              text: "delete",
              role: "destructive",
              icon: "ios-trash",
              handler: () => {
                this.delete();
              }
            },
            {
              text: "cancel",
              role: "cancel"
            }
          ]
        })
        .present();
    } else {
      if (this.iconName === "remove-circle") {
        this.unblock();
      } else {
        this.addUser();
      }
    }
  }

  ionViewWillEnter() {
    if (this.user.username === this.username) {
      this.iconName = "bonfire";
      this.isContact = true;
      return;
    }

    for (const c of this.settings.getContacts()) {
      if (c.username === this.username) {
        this.setIsContact();
        break;
      }
    }

    if (this.settings.isUserBlocked(this.username)) {
      this.setBlocked();
    }
  }

  private hasFriendRequest(username: string) {
    const frs = this.settings.getFriendRequests();
    for (const fr of frs) {
      if (fr.username === username) return true;
    }
    return false;
  }

  /**
   * Changes the behavior of the navigation button
   * @param b
   */
  private setIsContact(b = true) {
    if (b) {
      this.isContact = true;
      this.iconName = "more";
    } else {
      this.isContact = false;
      this.iconName = "add";
    }
  }

  private setBlocked() {
    this.isContact = false;
    this.iconName = "remove-circle";
  }

  private async unblock() {
    this.alertCtrl
      .create({
        title: "Unblock User?",
        message:
          "If you unblock the user, he will be able to send you messages.",
        buttons: [
          {
            text: "yes",
            handler: () => {
              this.unblockUser();
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
   * unblocks an user from the contact list
   */
  private async unblockUser() {
    this.spinner.show(null, null, true);
    const message = this.crypto.genBoxForServer(this.user.username);
    try {
      const res = await this.req.request("unblockUser", message, this.username);
      if (res.data.status === protos.ServerResponse.Status.Ok) {
        this.toast.success(`User "${this.username}" unblocked.`, 2000);
        this.settings.addContact(this.settings.getBlockerModel(this.username));
        this.settings.removeBlocked(this.username);
        this.setIsContact();
      } else {
        this.toast.error(res.data.message);
      }
    } catch (err) {
      this.toast.error(this.req.parseError(err));
    } finally {
      this.spinner.hide();
    }
  }

  /**
   * blocks an user from the contact list
   */
  private async block() {
    this.spinner.show(null, null, true);
    const message = this.crypto.genBoxForServer(this.user.username);
    try {
      const res = await this.req.request("blockUser", message, this.username);
      if (res.data.status === protos.ServerResponse.Status.Ok) {
        this.toast.success(`Blocked user "${this.username}"`, 2000);
        const c = this.settings.removeContact(this.username);
        this.settings.addBlocked(c);
        this.setBlocked();
      } else {
        this.toast.error(res.data.message);
      }
    } catch (err) {
      this.toast.error(this.req.parseError(err));
    } finally {
      this.spinner.hide();
    }
  }

  /**
   * removes an user from the contact list
   */
  private async delete() {
    this.spinner.show(null, null, true);
    const message = this.crypto.genBoxForServer(this.user.username);
    try {
      const res = await this.req.request("deleteUser", message, this.username);
      if (res.data.status === protos.ServerResponse.Status.Ok) {
        this.toast.success(
          `Removed user "${this.username}" from contact list.`,
          2000
        );
        this.settings.removeContact(this.username);
        this.setIsContact(false);
      } else {
        this.toast.error(res.data.message);
      }
    } catch (err) {
      this.toast.error(this.req.parseError(err));
    } finally {
      this.spinner.hide();
    }
  }

  /**
   * Call this function to request a friend approval to the user of this.username
   */
  public async addUser() {
    this.spinner.show(null, null, true);

    if (this.hasFriendRequest(this.username)) {
      this.acceptRequest();
      return;
    }

    const message = this.crypto.genBoxForServer(this.user.username);

    try {
      const res = await this.req.request("addUser", message, this.username);
      if (res.data.status === protos.ServerResponse.Status.Ok) {
        this.toast.success("Requested contact approval to: " + this.username);
      } else {
        this.toast.error(res.data.message);
      }
    } catch (err) {
      this.toast.error(this.req.parseError(err));
    } finally {
      this.spinner.hide();
    }
  }

  /**
   * Accepts a user friend request
   * @param un the user's username
   */
  private async acceptRequest() {
    this.spinner.show(null, null, true);

    const msg = this.crypto.genBoxForServer(this.user.username);
    let res;

    try {
      res = await this.req.request("acceptFriendRequest", msg, this.username);
      this.toast.success(`Request from "${this.username}" accepted`, 2000);
      const fr = this.settings.removeFriendRequest(this.username);
      this.settings.removeFriendRequest(this.username);
      this.settings.addContact(fr);
      this.setIsContact();
    } catch (err) {
      this.toast.error(this.req.parseError(err));
    } finally {
      this.spinner.hide();
    }
  }
}
