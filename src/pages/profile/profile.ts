import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  private username: string;
  private createdAt: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("username") || ":(";
    this.createdAt = navParams.get("createdAt") || ":(";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }
}
