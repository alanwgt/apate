import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";
import { protos } from "../../proto/bundle";
import { RequestProvider } from "../../providers/request/request";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { UserProvider } from "../../providers/user/user";
import { ToastProvider } from "../../providers/toast/toast";

@IonicPage()
@Component({
  selector: "page-friend-requests",
  templateUrl: "friend-requests.html"
})
export class FriendRequestsPage {
  private friendRequests: protos.IFriendRequest[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider,
    private actionSheetCtrl: ActionSheetController,
    private req: RequestProvider,
    private crypto: CryptoProvider,
    private userProvider: UserProvider,
    private toast: ToastProvider
  ) {
    this.friendRequests = settings.getFriendRequests() || [];
  }

  openModal(un: string) {
    this.actionSheetCtrl
      .create({
        title: `Accept request from "${un}"?`,
        enableBackdropDismiss: true,
        buttons: [
          {
            text: "accept",
            icon: "checkmark",
            handler: () => {
              this.acceptRequest(un);
            }
          },
          {
            text: "deny",
            role: "destructive",
            icon: "close",
            handler: () => {
              this.denyRequest(un);
            }
          },
          {
            text: "cancel",
            role: "cancel"
          }
        ]
      })
      .present();
  }

  private async acceptRequest(un: string) {
    const msg = this.crypto.genBoxForServer(this.userProvider.username);
    let res;

    try {
      res = await this.req.request("acceptFriendRequest", msg, un);
      this.toast.success(`Request from "${un}" accepted`, 2000);
      const fr = this.settings.removeFriendRequest(un);
      this.friendRequests = this.settings.getFriendRequests();
      this.settings.addContact(fr);
    } catch (err) {
      this.toast.error(this.req.parseError(err));
      return;
    }
  }

  private async denyRequest(un: string) {
    const msg = this.crypto.genBoxForServer(this.userProvider.username);
    let res;

    try {
      res = await this.req.request("denyFriendRequest", msg, un);
      this.toast.error(`Request from "${un}" deleted`, 2000);
      this.settings.removeFriendRequest(un);
      this.friendRequests = this.settings.getFriendRequests();
    } catch (err) {
      this.toast.error(this.req.parseError(err));
      return;
    }
  }
}
