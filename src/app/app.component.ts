import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { SplashPage } from "../pages/splash/splash";
import { NetworkProvider } from "../providers/network/network";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // rootPage:any = SplashPage;
  rootPage: any = SplashPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    network: NetworkProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
      network.initializeNetworkEvents();
    });
  }
}
