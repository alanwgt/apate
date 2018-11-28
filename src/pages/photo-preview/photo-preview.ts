import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";
import { RequestProvider } from "../../providers/request/request";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { decodeBase64 } from "tweetnacl-util";
import { UserProvider } from "../../providers/user/user";
import { protos } from "../../proto/bundle";
import { ToastProvider } from "../../providers/toast/toast";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

/**
 * Generated class for the PhotoPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-photo-preview",
  templateUrl: "photo-preview.html"
})
export class PhotoPreviewPage {
  b64Image: string;
  dataB64Image: string;
  toUser: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private settings: SettingsProvider,
    private req: RequestProvider,
    private crypto: CryptoProvider,
    private userProvider: UserProvider,
    private toast: ToastProvider,
    private spinner: SpinnerDialog
  ) {
    this.setB64Image(navParams.get("picture"));
    const un = navParams.get("toUser");
    if (un) {
      this.toUser = un;
    }
  }

  ionViewDidLoad() {}

  setB64Image(b64Image: string) {
    this.b64Image = b64Image;
    this.dataB64Image = "data:image/jpeg;base64," + b64Image;
  }

  send() {
    if (this.toUser) {
      this.sendImage([this.toUser]);
    } else {
      this.selectRecipients();
    }
  }

  private getContacts() {
    const inputs = [];
    for (const c of this.settings.getContacts()) {
      inputs.push({
        type: "checkbox",
        label: c.username,
        value: c.username
      });
    }
    return inputs;
  }

  private selectRecipients() {
    let sRecipients = this.alertCtrl.create({
      title: "Recipients",
      enableBackdropDismiss: false,
      buttons: [
        {
          role: "cancel",
          text: "cancel"
        },
        {
          role: null,
          text: "send",
          handler: data => {
            this.sendImage(data);
          }
        }
      ],
      inputs: this.getContacts()
    });
    sRecipients.present();
  }

  /**
   * Sends the image to the selected users
   * @param users
   */
  private async sendImage(users: string[]) {
    this.spinner.show("Sending image...", null, true);

    for (const un of users) {
      const msg = this.crypto.genBoxForUser(
        decodeBase64(this.b64Image),
        this.userProvider.username,
        this.settings.getContactPublicK(un),
        protos.MessageBody.Type.Image
      );
      let res;
      try {
        res = await this.req.request("sendMessage", msg, un);
      } catch (err) {
        this.spinner.hide();
        this.toast.error(this.req.parseError(err));
        this.navCtrl.pop();
        return;
      }
    }

    this.spinner.hide();
    this.toast.success("message sent!", 2000);
    this.navCtrl.pop();
  }
}
