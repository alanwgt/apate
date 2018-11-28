import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";
import { protos } from "../../proto/bundle";
import { ProfilePage } from "../profile/profile";

/**
 * Generated class for the BlockedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-blocked",
  templateUrl: "blocked.html"
})
export class BlockedPage {
  private blockedUsers: protos.IUserModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider
  ) {}

  ionViewWillEnter() {
    this.blockedUsers = this.settings.getBlockedUsers();
  }

  openProfile(username: string) {
    this.navCtrl.push(ProfilePage, { username });
  }
}
