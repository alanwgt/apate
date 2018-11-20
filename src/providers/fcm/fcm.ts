import { Injectable } from "@angular/core";
import { Firebase } from "@ionic-native/firebase";
import { AngularFirestore } from "@angular/fire/firestore";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FcmProvider {
  constructor(
    private firebaseNative: Firebase,
    private afs: AngularFirestore,
    private platform: Platform
  ) {}

  /**
   * Returns the Firebase Cloud Messaging token
   */
  public async getToken() {
    let token: string;

    if (this.platform.is("android")) {
      token = await this.firebaseNative.getToken();
    } else if (this.platform.is("ios")) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    } else {
      console.error("this is not running in a device");
      return;
    }

    return token;
  }

  /**
   * Stores the FCM token to firestore
   */
  public async saveTokenToFirestore(token: string) {
    if (!token) {
      return;
    }

    const devicesRef = this.afs.collection("devices");
    const docData = {
      token,
      userId: "..."
    };

    return devicesRef.doc(token).set(docData);
  }

  /**
   * Returns the observable that is called every time that we have a new notification
   */
  public listenToNotifications(): Observable<any> {
    return this.firebaseNative.onNotificationOpen();
  }
}
