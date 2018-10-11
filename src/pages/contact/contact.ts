import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {HomePage} from "../home/home";
import {UserProfilePage} from "../user-profile/user-profile";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  constructor(public navCtrl: NavController,public fireAuth:AngularFireAuth,public storage:Storage) {

  }

  loginByEmail(){
    this.navCtrl.push(LoginPage);
  }

  loginByFacebook(){
    this.fireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(res=>{
      console.log(res);
      this.navigation(res);
    });
  }

  loginByGoogle(){
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res=>{
      console.log(res);
      this.navigation(res);
    });
  }

  loginByTwitter(){
    this.fireAuth.auth.signInWithPopup(new auth.TwitterAuthProvider()).then(res=>{
      console.log(res);
      this.navigation(res);
    });
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

  logout(){
    this.fireAuth.auth.signOut();
    // this.navCtrl.setRoot(ContactPage);
  }

  navigation(res){
    this.storage.set('name', res.user.displayName);
    this.storage.set('email', res.user.email);
    this.storage.set('photoUrl', res.user.photoURL);
    this.storage.set('loggedIn', true);

    this.navCtrl.setRoot(UserProfilePage);
  }
}
