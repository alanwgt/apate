import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RequestProvider } from "../../providers/request/request";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { UserProvider } from "../../providers/user/user";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import * as niceware from "niceware";
import * as nacl from "tweetnacl";
import { decodeBase64 } from "tweetnacl-util";
import { ToastProvider } from "../../providers/toast/toast";
import { protos } from "../../proto/bundle";
import { SplashPage } from "../splash/splash";

/**
 * Generated class for the RecoverAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-recover-account",
  templateUrl: "recover-account.html"
})
export class RecoverAccountPage {
  key1: string = "";
  key2: string = "";
  key3: string = "";
  key4: string = "";
  username: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private req: RequestProvider,
    private crypto: CryptoProvider,
    private userProvider: UserProvider,
    private spinner: SpinnerDialog,
    private toast: ToastProvider
  ) {}

  async doRecover() {
    if (
      this.username === "" ||
      this.key1 === "" ||
      this.key2 === "" ||
      this.key3 === "" ||
      this.key4 === ""
    ) {
      return;
    }

    this.spinner.show(null, null, true);
    let b64: string;

    try {
      const res = await this.req.get("recoverAccount", "", this.username);
      b64 = res.data;
    } catch (err) {
      this.toast.error(this.req.parseError(err));
      this.spinner.hide();
      return;
    }

    const passphrases = [this.key1, this.key2, this.key3, this.key4];
    let decrypted: Uint8Array;
    try {
      const buf: Buffer = niceware.passphraseToBytes(passphrases);
      const key = new Uint8Array(32);
      buf.copy(key, 0, 0, 8);
      decrypted = nacl.secretbox.open(
        decodeBase64(b64),
        new Uint8Array(24),
        key
      );
    } catch (err) {
      this.toast.error("please, check the passphrases again.");
      this.spinner.hide();
      return;
    }

    let fcm: string;
    try {
      this.crypto.initPrivateK(decrypted);
      const msg = this.crypto.genBoxForServer(this.username);
      const res = await this.req.request("proveAccount", msg);
      fcm = res.data.message;
    } catch (err) {
      this.toast.error(this.req.parseError(err));
      this.spinner.hide();
      return;
    }

    const up = protos.AccountSignUp.create({
      username: this.username,
      pubK: this.crypto.getB64PublicKey(),
      fcmToken: fcm
    });

    this.userProvider.create(up);
    this.spinner.hide();
    this.toast.success("Account recovered!");
    this.navCtrl.setRoot(SplashPage);
  }
}
