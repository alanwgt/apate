import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

import { ConversationPage } from "../conversation/conversation";
import { SettingsProvider } from "../../providers/settings/settings";
import { protos } from "../../proto/bundle";

/**
 * Generated class for the ConversationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-conversations",
  templateUrl: "conversations.html"
})
export class ConversationsPage {
  private contacts: protos.IUserModel[];
  public isSearchBarOpen = false;

  constructor(
    public navCtrl: NavController,
    private settings: SettingsProvider
  ) {
    this.setContacts();
  }

  getConversationIcon(username: string) {
    return this.settings.getMessagesFromUser(username).length > 0
      ? "ios-radio-button-on"
      : "ios-radio-button-off";
  }

  openConversation(username: string) {
    this.navCtrl.push(ConversationPage, {
      username
    });
  }

  filter(ev: any) {
    this.setContacts();
    const val = ev.target.value;

    if (!val || val.trim().length === 0) {
      return;
    }

    this.contacts = this.contacts.filter(v => {
      return v.username.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }

  private setContacts() {
    this.contacts = this.settings.getContacts();

    if (!this.contacts || this.contacts.length === 0) {
      return;
    }

    this.contacts.sort((a, b) => {
      const aMsgs = this.settings.getMessagesFromUser(a.username);
      const bMsgs = this.settings.getMessagesFromUser(b.username);

      if (aMsgs.length === 0 && bMsgs.length === 0) {
        return a.username > b.username ? 1 : -1;
      }

      if (aMsgs.length > 0 && bMsgs.length === 0) {
        return -1;
      }

      if (aMsgs.length === 0 && bMsgs.length > 0) {
        return 1;
      }

      if (
        aMsgs[aMsgs.length - 1].timestamp > bMsgs[bMsgs.length - 1].timestamp
      ) {
        return -1;
      }

      return 1;
    });
  }

  ionViewWillEnter() {
    this.setContacts();
  }
}
