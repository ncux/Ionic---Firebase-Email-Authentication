import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authentication: AngularFireAuth, private toast: ToastController) {   }

  ionViewWillLoad() {
    this.authentication.authState.subscribe(data => {

      if(data && data.email && data.uid) {
        this.toast.create({ message: `Welcome to "Ionic - Firebase Email Authentication", ${data.email}`, duration: 5000 }).present();
      } else {
        this.toast.create({ message: `Please login, or register for an account!`, duration: 10000 }).present();
      }
    });
  }

}
