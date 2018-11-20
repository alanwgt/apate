import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController } from "ionic-angular";
import { CameraPreview } from "@ionic-native/camera-preview";
import { Platform } from "ionic-angular";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

import { PhotoPreviewPage } from "../photo-preview/photo-preview";
import { ConversationsPage } from "../conversations/conversations";
import { SettingsPage } from "../settings/settings";
import { UserProvider, UserQueryResult } from "../../providers/user/user";
import { UserListPage } from "../user-list/user-list";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private cameraPreview: CameraPreview;
  private userQPromise: Promise<UserQueryResult[]>;
  private canQUser: boolean = true;

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private spinnerDialog: SpinnerDialog,
    private userProvider: UserProvider
  ) {}

  /**
   * initializes the camera preview with default configuration
   */
  private setupCameraPreview() {
    if (this.cameraPreview) {
      return;
    }
    this.cameraPreview = new CameraPreview();
    this.cameraPreview.startCamera({
      toBack: true,
      alpha: 1,
      previewDrag: false,
      tapPhoto: false,
      tapToFocus: true,
      x: 0,
      y: 0,
      width: this.platform.width(),
      height: this.platform.height(),
      camera: "front"
    });
  }

  refresh() {
    window.location.reload();
  }

  openConversations() {
    this.navCtrl.push(ConversationsPage);
  }

  takePicture() {
    this.spinnerDialog.show();

    if (!this.cameraPreview) {
      // TODO: show message error
      return;
    }

    this.cameraPreview
      .takePicture({
        quality: 50
      })
      .then(
        imageData => {
          this.spinnerDialog.hide();
          this._detachCamera();
          this.navCtrl.push(PhotoPreviewPage, { picture: imageData });
        },
        err => {
          alert(JSON.stringify(err));
        }
      );
  }

  openTrophies() {}

  openSettings() {
    this.navCtrl.push(SettingsPage);
  }

  private _detachCamera() {
    if (!this.cameraPreview) {
      return;
    }

    this.cameraPreview.stopCamera();
    this.cameraPreview = undefined;
  }

  private setBackgroundColor(color: string) {
    Array.from(
      document.querySelectorAll(
        "body, ion-app, ion-content, ion-page, .nav-decor"
      )
    ).forEach((e: HTMLElement) => {
      e.style.backgroundColor = `${color}`;
    });
  }

  /* NAVIGATION LIFECYCLE EVENTS */

  ionViewDidEnter() {
    const input = <HTMLInputElement>(
      document.querySelector(".search-wrapper input")
    );
    // console.log(input);
    input.addEventListener("change", function(e) {
      // console.log(this.value);
    });
  }

  /**
   * userQ queries the server for the username
   *
   * @param {string} username
   * @memberof HomePage
   */
  public async userQ(username: string) {
    if (username.length < 4 || !this.canQUser || this.userQPromise) {
      return;
    }

    this.spinnerDialog.show();
    this.canQUser = false;
    this.userQPromise = this.userProvider.queryUsername(username);
    const qRes = await this.userQPromise;
    this.spinnerDialog.hide();
    this.userQPromise = undefined;

    if (qRes.length > 0) {
      this.canQUser = true;
      this.navCtrl.push(UserListPage, {
        userFilter: username,
        users: qRes
      });
      return;
    }

    setTimeout(() => {
      this.canQUser = true;
    }, 1000);
  }

  ionViewWillLeave() {
    this.setBackgroundColor("white");
    this._detachCamera();
  }

  ionViewWillEnter() {
    try {
      this.spinnerDialog.hide();
    } catch (_) {}

    this.setBackgroundColor("transparent");

    // if (this.cameraPreview) {
    //   return;
    // }

    this.setupCameraPreview();
  }
}
