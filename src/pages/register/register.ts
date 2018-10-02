import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    user = {
        email: '',
        password: ''
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth) {
        fireAuth.auth.onAuthStateChanged(function(user){
            if(user){
                navCtrl.setRoot(HomePage);
            }
        });
    }

    myRegister() {
        this.fireAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password).then(newUser => {
            console.log(this.user);
            this.navCtrl.setRoot(LoginPage);
        });
    }

}
