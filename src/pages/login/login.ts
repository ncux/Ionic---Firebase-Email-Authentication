import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {User} from "../../app/user-Interface";
import { RegisterPage } from "../register/register";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../home/home";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loggerIn: AngularFireAuth, private toast: ToastController) {   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    try {
      const result = await this.loggerIn.auth.signInWithEmailAndPassword(user.email, user.password);

      if(!result) {
        this.toast.create({ message: `Please login, or register for an account!`, duration: 10000 }).present();
      } else {
        this.navCtrl.setRoot(HomePage);
      }
    } catch (e) {
      console.log(e);
    }

  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
