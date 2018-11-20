import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

import { AlertController} from 'ionic-angular';

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  username: string;
  hasNewMessage: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.username = navParams.get('username');
    this.hasNewMessage = navParams.get('hasNewMessage');
  }

  deleteMessage() {
    this.alertCtrl.create({
      title: 'Warning!',
      message: 'this action cannot be undone, are you sure?',
      buttons: [
        {
          text: 'yes'
        },
        {
          text: 'cancel',
          role: 'cancel'
        }
      ]
    }).present();
  }

  openProfile() {
    this.navCtrl.push(ProfilePage, {
      username: this.username
    });
  }

}
