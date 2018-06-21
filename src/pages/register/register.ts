import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../app/user-Interface";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../home/home";




@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;


  constructor(public navCtrl: NavController, public navParams: NavParams, private registration:  AngularFireAuth) {   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }



  async register(user: User) {
    try {
      const result = await this.registration.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.setRoot(HomePage);

    } catch (e) {
      console.log(e);
    }
  }

}
