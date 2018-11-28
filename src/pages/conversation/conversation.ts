import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, TextInput } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { PhotoViewerPage } from "../../pages/photo-viewer/photo-viewer";

import { AlertController } from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";
import { protos } from "../../proto/bundle";
import { ToastProvider } from "../../providers/toast/toast";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { CryptoProvider } from "../../providers/crypto/crypto";
import { UserProvider } from "../../providers/user/user";
import { RequestProvider } from "../../providers/request/request";
import { AxiosResponse } from "axios";
import { decodeUTF8, encodeUTF8, encodeBase64 } from "tweetnacl-util";

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface MessageWithBody extends protos.IMessage, protos.IMessageBody {
  plain: string;
  cssClass: string;
}

@IonicPage()
@Component({
  selector: "page-conversation",
  templateUrl: "conversation.html"
})
export class ConversationPage {
  username: string;
  messages: MessageWithBody[] = [];
  msgsOnly: protos.IMessage[];
  sendMessageIcon: string = "ios-camera";
  messageBody: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private settings: SettingsProvider,
    private toast: ToastProvider,
    private spinner: SpinnerDialog,
    private crypto: CryptoProvider,
    private userProvider: UserProvider,
    private req: RequestProvider
  ) {
    this.username = navParams.get("username");
  }

  deleteMessage(mId: number) {
    this.alertCtrl
      .create({
        title: "Warning!",
        message: "this action cannot be undone, are you sure?",
        buttons: [
          {
            text: "yes",
            handler: () => {
              this.requestDeleteMessage(mId);
            }
          },
          {
            text: "cancel",
            role: "cancel"
          }
        ]
      })
      .present();
  }

  openProfile() {
    this.navCtrl.push(ProfilePage, {
      username: this.username
    });
  }

  getElapsedTime(t: number) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = Math.round(new Date().getTime()) - t * 1000;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " s ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " m ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " h ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " d ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  }

  async handleSendMessage() {
    // push the message to the view
    let msg = this.messageBody;
    if (!msg || msg.length === 0) {
      // open camera
      return;
    }

    msg = msg.trim();
    const uint8arr = decodeUTF8(msg);
    const sMsg = this.crypto.genBoxForUser(
      uint8arr,
      this.userProvider.username,
      this.settings.getContactPublicK(this.username),
      protos.MessageBody.Type.Text
    );

    let res: AxiosResponse<protos.ServerResponse>;
    let mId: number;

    try {
      res = await this.req.request("sendMessage", sMsg, this.username);
      mId = parseInt(res.data.message);
    } catch (err) {
      this.toast.error(this.req.parseError(err));
      return;
    }

    this.messages.push({
      cssClass: "mine",
      deletable: true,
      plain: msg,
      timestamp: Math.round(new Date().getTime() / 1000),
      from: this.userProvider.username,
      to: this.username,
      type: protos.MessageBody.Type.Text,
      messageId: mId
    });
    this.messageBody = "";
  }

  hasImage(m: MessageWithBody) {
    return m.type === protos.MessageBody.Type.Image;
  }

  openImage(m: MessageWithBody) {
    this.navCtrl.push(PhotoViewerPage, {
      img: "data:image/jpeg;base64," + m.plain
    });
  }

  private async requestDeleteMessage(mId: number) {
    this.spinner.show("Deleting message...", null, true);
    const message = this.crypto.genBoxForServer(this.userProvider.username);
    try {
      const res = await this.req.request("deleteMessage", message, "" + mId);
      this.deleteMessageFromId(mId);
      if (res.data.status === protos.ServerResponse.Status.Ok) {
        this.toast.success("Message deleted.", 2000);
      } else {
        this.toast.error(res.data.message);
      }
    } catch (err) {
      this.toast.error(this.req.parseError(err));
    } finally {
      this.spinner.hide();
    }
  }

  /**
   * Pulls all the messages from the current conversation and put them into this.messages
   * it also removes the messages from settings
   */
  private async pullMessages() {
    this.spinner.show("Downloading messages...", null, true);
    let mIds: number[] = [];

    for (const mess of this.msgsOnly) {
      mIds.push(parseInt(mess.messageId.toString()));
    }

    const m = this.crypto.genBoxForServer(this.userProvider.username);
    let res: AxiosResponse<any>;

    try {
      res = await this.req.get("loadMessage", m, mIds.join(","));
    } catch (err) {
      this.toast.error(this.req.parseError(err));
      return;
    }

    const msg = this.req.openProto<protos.MessagesContainer>(
      res.data,
      "MessagesContainer"
    );
    // TODO: Handle images
    for (const m of msg.messages) {
      const fmsg = this.getMessageFromId(m.messageId);
      const boxData = this.crypto.openUserBox(
        m.body,
        m.nonce,
        this.settings.getContactPublicK(this.username)
      );
      const plain =
        m.type === protos.MessageBody.Type.Text
          ? encodeUTF8(boxData)
          : encodeBase64(boxData);

      this.messages.push({ ...fmsg, ...m, plain, cssClass: "his" });
    }

    this.settings.removeMessages(this.username);
    this.spinner.hide();
  }

  /**
   * returns a IMessageBody from its ID
   * @param id message ID
   */
  private getMessageFromId(id: number | Long) {
    for (const m of this.msgsOnly) {
      if (m.messageId === id) {
        return m;
      }
    }
    return undefined;
  }

  private deleteMessageFromId(id: number | Long) {
    for (let i = 0; i < this.msgsOnly.length; i++) {
      if (this.msgsOnly[i].messageId === id) {
        this.msgsOnly.splice(i, 1);
        break;
      }
    }
    for (let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].messageId === id) {
        this.messages.splice(i, 1);
        break;
      }
    }
  }

  private onChange(input: TextInput) {
    if (input.value && input.value.length > 0) {
      this.sendMessageIcon = "ios-send";
    } else {
      this.sendMessageIcon = "ios-camera";
    }
  }

  async ionViewWillEnter() {
    this.msgsOnly = this.settings.getMessagesFromUser(this.username);
    this.spinner.hide();

    if (this.msgsOnly.length > 0) {
      this.pullMessages();
    }
  }
}
