import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EditPersonPage} from '../edit-person/edit-person';
import {FirebaseListObservable, AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {LoginPage} from "../login/login";
import {ContactPage} from "../contact/contact";
import {UserProfilePage} from "../user-profile/user-profile";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    list: FirebaseListObservable<any[]>;
    persons: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController, public db: AngularFireDatabase, public fireAuth: AngularFireAuth) {

        fireAuth.auth.onAuthStateChanged(function(user){
            if(!user){
                navCtrl.setRoot(ContactPage);
            }
        });
        this.list = db.list('people');
        // to get list without key
        // this.persons = this.list.valueChanges();
        // to get key with list
        this.persons = this.list.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        );
    }

    deletePerson(id) {
        this.list.remove(id);
    }

    editPerson(id){
       this.db.object('people/'+id).valueChanges().subscribe(person=>{
           person['key']=id;
           this.navCtrl.push(EditPersonPage,person);
            });

    }

    goToProfile(){
        this.navCtrl.push(UserProfilePage);
    }


}

