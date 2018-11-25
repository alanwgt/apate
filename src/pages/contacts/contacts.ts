import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";
import { protos } from "../../proto/bundle";
import { ProfilePage } from "../profile/profile";

@IonicPage()
@Component({
  selector: "page-contacts",
  templateUrl: "contacts.html"
})
export class ContactsPage {
  private contacts: protos.IUserModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider
  ) {}

  ionViewWillEnter() {
    this.contacts = this.settings.getContacts();
  }

  openProfile(username: string) {
    this.navCtrl.push(ProfilePage, { username });
  }
}
