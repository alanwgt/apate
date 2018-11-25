import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import * as niceware from "niceware";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { RequestProvider } from "../../providers/request/request";
import { UserProvider } from "../../providers/user/user";
import { ToastProvider } from "../../providers/toast/toast";
import { SettingsProvider } from "../../providers/settings/settings";

@IonicPage()
@Component({
  selector: "page-recovery",
  templateUrl: "recovery.html"
})
export class RecoveryPage {
  public passphrases: string[];
  private hasRecoveryKey: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private crypto: CryptoProvider,
    private req: RequestProvider,
    private userProvider: UserProvider,
    private toast: ToastProvider,
    private settings: SettingsProvider
  ) {
    this.hasRecoveryKey = settings.hasRecKey();
  }

  /**
   * generates a passphrase, ciphers the private key and send it to the server
   */
  public generatePassword() {
    // it'll generate 4 phrases
    const passphrases: string[] = niceware.generatePassphrase(8);
    const data = this.crypto.encryptPrivateKeyWithPassphrase(passphrases);
    this.passphrases = passphrases;

    const msg = this.crypto.genBoxForServer(this.userProvider.username, data);
    try {
      this.req.request("storeRecKey", msg);
      this.toast.success("Keys stored!", 2000);
      this.settings.setRecoveryKeyTrue();
    } catch (err) {
      this.toast.error(this.req.parseError(err));
      return;
    }
  }
}
