import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { CameraPreview } from "@ionic-native/camera-preview";
import { Platform } from "ionic-angular";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

import { PhotoPreviewPage } from "../photo-preview/photo-preview";
import { ConversationsPage } from "../conversations/conversations";
import { SettingsPage } from "../settings/settings";
import { UserProvider, UserQueryResult } from "../../providers/user/user";
import { SettingsProvider } from "../../providers/settings/settings";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private cameraPreview: CameraPreview;
  private newMessagesCount = 0;
  private friendRequests = 0;
  private userQueryResult: UserQueryResult[] = [];
  private cameraView = "front";

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private spinnerDialog: SpinnerDialog,
    private userProvider: UserProvider,
    private settings: SettingsProvider,
    private alertCtrl: AlertController
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
      camera: this.cameraView
    });
  }

  reverseCamera() {
    this.cameraView = this.cameraView === "front" ? "rear" : "front";
    this.cameraPreview.switchCamera();
  }

  refresh() {
    window.location.reload();
  }

  openConversations() {
    this.navCtrl.push(ConversationsPage);
  }

  openProfile(username: string) {
    this.navCtrl.push(ProfilePage, { username });
  }

  takePicture() {
    this.spinnerDialog.show();

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

  clear() {
    this.userQueryResult = [];
  }

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

  ionViewDidEnter() {}

  /**
   * userQ queries the server for the username
   *
   * @param {string} username
   * @memberof HomePage
   */
  public async userQ(ev: any) {
    const val = ev.target.value;
    if (!val || val.trim().length === 0 || val.length < 4) {
      return;
    }

    this.spinnerDialog.show();
    this.userQueryResult = await this.userProvider.queryUsername(val);
    this.spinnerDialog.hide();
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
    this.setupCameraPreview();
    this.newMessagesCount = this.settings.getNumberOfUnopenedConversations();
    this.friendRequests = this.settings.getFriendRequests().length;
  }
}
