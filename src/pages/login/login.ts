import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user={
    email:'',
    password:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth) {
    fireAuth.auth.onAuthStateChanged(function(user){
      if(user){
        navCtrl.setRoot(HomePage);
      }
    });
  }

  myLogin(){
    this.fireAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password).then(newUser => {
      console.log(this.user);
      this.navCtrl.setRoot(HomePage);
    });
  }

}
