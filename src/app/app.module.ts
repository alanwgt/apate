import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { CameraPreview } from "@ionic-native/camera-preview";
// TODO: do I need this?
import { SpinnerDialog } from "@ionic-native/spinner-dialog";
import { SecureStorage } from "@ionic-native/secure-storage";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { Network } from "@ionic-native/network";
import { NativeStorage } from "@ionic-native/native-storage";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { SplashPage } from "../pages/splash/splash";
import { PhotoPreviewPage } from "../pages/photo-preview/photo-preview";
import { AuthenticationPage } from "../pages/authentication/authentication";
import { SettingsPage } from "../pages/settings/settings";
import { ConversationsPage } from "../pages/conversations/conversations";
import { ConversationPage } from "../pages/conversation/conversation";
import { ProfilePage } from "../pages/profile/profile";
import { UserListPage } from "../pages/user-list/user-list";

import { CryptoProvider } from "../providers/crypto/crypto";
import { UserProvider } from "../providers/user/user";
import { ContactsProvider } from "../providers/contacts/contacts";
import { NetworkProvider } from "../providers/network/network";
import { RequestProvider } from "../providers/request/request";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { Firebase } from "@ionic-native/firebase";
import { FcmProvider } from "../providers/fcm/fcm";
import { ToastProvider } from '../providers/toast/toast';

const firebaseConfig = {
  apiKey: "AIzaSyDR5JG9a6ztzVG0RiYUyLbxEHW3MoMcJaY",
  authDomain: "apate-cb3e6.firebaseapp.com",
  databaseURL: "https://apate-cb3e6.firebaseio.com",
  projectId: "apate-cb3e6",
  storageBucket: "apate-cb3e6.appspot.com",
  messagingSenderId: "919803446676"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    PhotoPreviewPage,
    AuthenticationPage,
    SettingsPage,
    ConversationsPage,
    ConversationPage,
    ProfilePage,
    UserListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    PhotoPreviewPage,
    AuthenticationPage,
    SettingsPage,
    ConversationsPage,
    ConversationPage,
    ProfilePage,
    UserListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Firebase,
    FcmProvider,
    CameraPreview,
    SpinnerDialog,
    SecureStorage,
    UserProvider,
    ContactsProvider,
    AndroidPermissions,
    Network,
    NetworkProvider,
    NativeStorage,
    RequestProvider,
    CryptoProvider,
    ToastProvider
  ]
})
export class AppModule {}

/**
 * npm i -S @ionic-native/android-permissions @ionic-native/camera-preview @ionic-native/native-storage @ionic-native/network @ionic-native/secure-storage @ionic-native/spinner-dialog
 */