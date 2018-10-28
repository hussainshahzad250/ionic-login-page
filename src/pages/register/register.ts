import { DashboardPage } from './../dashboard/dashboard';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username: string;
  password: string;
  email: string;
  mobile: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToLogin() {
    this.navCtrl.push(HomePage);
  }

  register() {
    console.log("username " + this.username+" email " + this.email +" & mobile "+ this.mobile);

    // TOAST START
    let toast = this.toastCtrl.create({
      message: 'Register successfully !',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    // TOAST END
    this.navCtrl.push(DashboardPage);   
  }
}
