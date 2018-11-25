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
  public error(msg: string, duration = 5000) {
    this.present(msg, "toast-error", duration);
  }

  /**
   * Presents a default toast for a successfully completed action
   *
   * @param msg the message to be shown
   */
  public success(msg: string, duration = 5000) {
    this.present(msg, "toast-success", duration);
  }

  private present(msg: string, cssClass: string, duration: number) {
    this.toastCtrl
      .create({
        message: msg,
        cssClass,
        duration
      })
      .present();
  }
}
