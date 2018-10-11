import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {EditPersonPage} from '../pages/edit-person/edit-person';
import {AddPersonPage} from '../pages/add-person/add-person';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {UserProfilePage} from '../pages/user-profile/user-profile';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IonicStorageModule } from '@ionic/storage';

const config = {
    apiKey: "AIzaSyDSTrXwJQa92qzh_sdAiHqU3czeR7Zn-JU",
    authDomain: "ionic-baa85.firebaseapp.com",
    databaseURL: "https://ionic-baa85.firebaseio.com",
    projectId: "ionic-baa85",
    storageBucket: "ionic-baa85.appspot.com",
    messagingSenderId: "98004177673"
};

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        EditPersonPage,
        AddPersonPage,
        LoginPage,
        RegisterPage,
        UserProfilePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        IonicStorageModule.forRoot()

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        EditPersonPage,
        AddPersonPage,
        LoginPage,
        RegisterPage,
        UserProfilePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
