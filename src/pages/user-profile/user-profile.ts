import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AngularFireAuth} from '@angular/fire/auth';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  userInfo={
    name:'',
    email:'',
    photoUrl:'',
    loggedIn:false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth,public storage:Storage) {

    fireAuth.auth.onAuthStateChanged(function(user){
      if(!user){
        navCtrl.setRoot(ContactPage);
      }
    });
    storage.get('name').then((val) => {
      this.userInfo.name=val;
    });

    storage.get('email').then((val) => {
      this.userInfo.email=val;
    });

    storage.get('photoUrl').then((val) => {
      this.userInfo.photoUrl=val;
    });

    storage.get('name').then((val) => {
      this.userInfo.loggedIn=val;
    });

  }


}
