import { Injectable } from "@angular/core";
import { Platform, NavController, App } from "ionic-angular";
import { FCM } from "@ionic-native/fcm";
import { SettingsProvider } from "../settings/settings";
import { ToastProvider } from "../toast/toast";
import { ConversationsPage } from "../../pages/conversations/conversations";

export interface FirebaseData {
  title: string;
  body: string;
  mtype:
    | "Text"
    | "Image"
    | "DeleteMessage"
    | "FriendRequestApproval"
    | "RemoveContact"
    | "FriendRequest"
    | "DenyFriendRequest"
    | "AddContact";
  user: string;
  payload: string;
  wasTapped: boolean;
}

@Injectable()
export class FcmProvider {
  constructor(
    private app: App,
    private platform: Platform,
    private fcm: FCM,
    private settings: SettingsProvider,
    private toast: ToastProvider
  ) {}

  public async init() {
    // TODO: handle me!
    this.fcm.onNotification().subscribe(
      (data: FirebaseData) => {
        console.log(data);
        this.handleMessage(data);
        if (
          data.mtype === "DeleteMessage" ||
          data.mtype === "RemoveContact" ||
          data.mtype === "DenyFriendRequest" ||
          data.mtype === "AddContact"
        ) {
          return;
        }
        if (data.wasTapped) {
          //Notification was received on device tray and tapped by the user.
          this.app.getActiveNav().push(ConversationsPage);
          // this.navCtrl.push(ConversationsPage);
        } else {
          //Notification was received in foreground. Maybe the user needs to be notified.
          this.toast.success(data.title + " " + data.body, 2000);
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  private handleMessage(d: FirebaseData) {
    if (d.mtype === "Text" || d.mtype === "Image") {
      this.settings.addMessage(d.user, d.payload);
    } else if (d.mtype === "DeleteMessage") {
      this.settings.removeMessage(d.user, d.payload);
    } else if (d.mtype === "RemoveContact") {
      this.settings.removeContact(d.user);
    } else if (d.mtype === "FriendRequestApproval") {
      const fr = this.settings.removeFriendRequest(d.user);
      if (!fr) {
        return;
      }
      this.settings.addContact(fr);
    } else if (d.mtype === "FriendRequest") {
      this.settings.addFriendRequest({
        username: d.user,
        pubK: d.payload
      });
    } else if (d.mtype === "AddContact") {
      this.settings.addContact({
        pubK: d.payload,
        username: d.user
      });
    } else if (d.mtype === "DenyFriendRequest") {
      this.settings.removeFriendRequest(d.user);
    }
  }

  /**
   * Returns the Firebase Cloud Messaging token
   */
  public async getToken() {
    return await this.fcm.getToken();
  }
}
