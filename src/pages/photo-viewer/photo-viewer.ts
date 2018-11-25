import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-photo-viewer",
  templateUrl: "photo-viewer.html"
})
export class PhotoViewerPage {
  private b64Img: string;
  private timeoutId: NodeJS.Timer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.b64Img = navParams.get("img");
  }

  ionViewDidEnter() {
    this.timeoutId = setTimeout(() => {
      this.timeoutId = undefined;
      this.clear();
    }, 5000);
  }

  ionViewDidLeave() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.clear();
    }
  }

  close() {
    this.clear();
    this.navCtrl.pop();
  }

  private clear() {
    this.b64Img = undefined;
  }
}
