import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastProvider {
  constructor(private toastCtrl: ToastController) {}

  /**
   * Presents a default toast for error
   *
   * @param msg the message to be shown
   */
  public error(msg: string) {
    this.toastCtrl
      .create({
        message: msg,
        duration: 5000,
        cssClass: "toast-error"
      })
      .present();
  }
}
