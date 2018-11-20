import { Injectable } from "@angular/core";
import { NativeStorage } from "@ionic-native/native-storage";
import { protos } from "../../proto/bundle";
import { Platform, NavController, AlertController } from "ionic-angular";
import { RequestProvider } from "../request/request";
import { SplashPage } from "../../pages/splash/splash";
import { CryptoProvider } from "../crypto/crypto";

interface StorageData {
  username: string;
  fcmId: string;
}

export interface UserQueryResult {
  ID: number;
  Username: string;
  PubKey: string;
  CreatedAt: string;
}

@Injectable()
export class UserProvider {
  private static readonly USER_INFO = {
    username: "apate.user.username",
    fcmid: "apate.device.fcmid",
    secKey: "apate.device.secret_key"
  };

  private _username: string;
  private _fcmId: string;

  private _initialized: boolean;

  constructor(
    private _nativeStorage: NativeStorage,
    private _platform: Platform,
    private _req: RequestProvider,
    private _crypto: CryptoProvider,
    private _alertCtrl: AlertController
  ) {
    this._initialized = false;
  }

  public async init() {
    if (this._initialized) {
      return;
    }

    await this._platform.ready();

    const userData = await this._loadDataFromStorage();

    if (!userData) {
      // this means that the user was not found in the app storage!
      await this._clearStorage();
      return;
    }

    this._username = userData.username;
    this._fcmId = userData.fcmId;
  }

  /**
   * Returns the device's registered username
   *
   * @readonly
   * @type {string}
   * @memberof UserProvider
   */
  public get username(): string {
    return this._username;
  }

  /**
   * Returns true if the user is authenticated, false otherwise
   */
  public isAuthenticated(): boolean {
    return !!this._username;
  }

  /**
   * Clears all the data stored in the Native Storage
   */
  private async _clearStorage() {
    return this._nativeStorage.clear();
  }

  /**
   * Returns the user's data stored in the native storage.
   */
  private async _loadDataFromStorage(): Promise<StorageData> {
    let data: StorageData;

    try {
      data = {
        username: await this._nativeStorage.getItem(
          UserProvider.USER_INFO.username
        ),
        fcmId: await this._nativeStorage.getItem(UserProvider.USER_INFO.fcmid)
      };
    } catch (err) {
      data = undefined;
      if (err.code === 2) {
        console.error("USER NOT FOUND!");
      } else {
        console.warn(JSON.stringify(err));
      }
    }

    return data;
  }

  /**
   * Stores all the account data in the native storage of the phone
   */
  public async create(acc: protos.AccountSignUp): Promise<boolean> {
    try {
      await this._nativeStorage.setItem(
        UserProvider.USER_INFO.username,
        acc.username
      );
      await this._nativeStorage.setItem(
        UserProvider.USER_INFO.fcmid,
        acc.fcmToken
      );
    } catch (err) {
      console.error(err);
      return false;
    }

    this._username = acc.username;
    this._fcmId = acc.fcmToken;
    return true;
  }

  /**
   * queries the server for all users that match 'un'
   * @param un the username to query for
   */
  public async queryUsername(un: string): Promise<UserQueryResult[]> {
    const response = await this._req.get("qUser", undefined, un);

    if (response.status !== 200) {
      return undefined;
    }

    return <UserQueryResult[]>response.data;
  }

  /**
   * Use this with extreme caution! This will erase all the data
   * from the device. The server data is deleted in settings.ts
   */
  public async wipe(navCtrl: NavController) {
    await this._clearStorage();
    await this._crypto.wipe();
    this._username = undefined;
    this._fcmId = undefined;

    this._alertCtrl
      .create({
        title: "Account deleted!",
        message: "Thanks for trying Apate! :)",
        buttons: [
          {
            text: "ok",
            handler: () => {
              navCtrl.setRoot(SplashPage);
            }
          }
        ],
        enableBackdropDismiss: false
      })
      .present();
  }
}
