import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {FirebaseListObservable, AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the EditPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-edit-person',
    templateUrl: 'edit-person.html',
})
export class EditPersonPage {

    data={
        key:'',
        name:'',
        lname:'',
        age:'',
        dept:'',
    };

    list: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
        this.data=this.navParams.data;
        this.list = db.list('people');
    }

    updatePerson(){
        let key=this.data.key;
        delete this.data.key;
        this.list.update(key,this.data);
        this.navCtrl.pop(HomePage);
    }

}
