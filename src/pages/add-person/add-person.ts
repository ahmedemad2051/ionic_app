import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase} from '@angular/fire/database';
import { HomePage } from '../home/home';
import {AngularFireAuth} from '@angular/fire/auth';
import {LoginPage} from "../login/login";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the AddPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-person',
  templateUrl: 'add-person.html',
})
export class AddPersonPage {

  data={
    name:'',
    lname:'',
    age:'',
    dept:'',
  };

  persons:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase, public fireAuth: AngularFireAuth) {
    fireAuth.auth.onAuthStateChanged(function(user){
      if(!user){
        navCtrl.setRoot(ContactPage);
      }
    });
      this.persons=db.list('people');
  }

  createPerson(){
    this.persons.push(this.data).then(newPerson=>{
      this.navCtrl.push(HomePage);
    },error=>{console.log(error)});
}


}
