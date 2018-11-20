import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PhotoPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-preview',
  templateUrl: 'photo-preview.html',
})
export class PhotoPreviewPage {

  b64Image: string;
  dataB64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.setB64Image(navParams.get('picture'));
  }

  ionViewDidLoad() {
  }

  setB64Image(b64Image: string) {
    this.b64Image = b64Image;
    this.dataB64Image = 'data:image/jpeg;base64,' + b64Image;
  }

  private generateDummyInput() {
    const inputs = [];
    for (const u of ['user14', 'user345', 'user98', 'user2132', 'user324', 'user123', 'user987', 'user9823']) {
      inputs.push(
        {
          type: 'checkbox',
          label: u,
          value: u
        }
      );
    }
    return inputs;
  }

  selectRecipients() {
    let sRecipients = this.alertCtrl.create({
      title: 'Recipients',
      enableBackdropDismiss: false,
      buttons: [
        {
          role: 'cancel',
          text: 'cancel'
        },
        {
          role: null,
          text: 'send',
          handler: () => {
            alert('sent!');
          }
        }
      ],
      inputs: this.generateDummyInput()
    });
    sRecipients.present();
  }

}
