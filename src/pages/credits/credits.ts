import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-credits",
  templateUrl: "credits.html"
})
export class CreditsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
