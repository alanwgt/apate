import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserQueryResult } from "../../providers/user/user";
import { ProfilePage } from "../profile/profile";

/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-user-list",
  templateUrl: "user-list.html"
})
export class UserListPage {
  private userFilter: any;
  private users: UserQueryResult[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userFilter = navParams.get("lastSearch") || "";
    this.users = navParams.get("users") || [];
  }

  userSelected(user: UserQueryResult) {
    this.navCtrl.push(ProfilePage, {
      username: user.Username,
      createdAt: user.CreatedAt
    });
  }
}
