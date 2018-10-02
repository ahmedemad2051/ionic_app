import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {HomePage} from "../home/home";
import {UserProfilePage} from "../user-profile/user-profile";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  userInfo={
    name:'',
    email:'',
    photoUrl:'',
    loggedIn:false
  };
  constructor(public navCtrl: NavController,public fireAuth:AngularFireAuth) {

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
    this.userInfo.name=res.user.displayName;
    this.userInfo.email=res.user.email;
    this.userInfo.photoUrl=res.user.photoURL;
    this.userInfo.loggedIn=true;
    console.log(this.userInfo);
    this.navCtrl.setRoot(UserProfilePage,this.userInfo);
  }
}
