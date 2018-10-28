import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  users: any;
  userList?: any;
  
  slider :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
    this.users= navParams.get('users');
    this.userList = this.users;

    this.slider = [
      {
        "title":"1",
        "description":"This is Awesome",
        "image":"assets/imgs/1.jpg"
      },
      {
        "title":"2",
        "description":"This is Awesome",
        "image":"assets/imgs/2.jpg"
      },
      {
        "title":"3",
        "description":"This is Awesome",
        "image":"assets/imgs/3.jpg"
      },
      {
        "title":"4",
        "description":"This is Awesome",
        "image":"assets/imgs/4.jpg"
      }
    ]
    console.log( this.slider);    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  slideChange(){
    // let toast = this.toastCtrl.create({
    //   message: 'Slide Changed !',
    //   duration: 1000
    //   // position: 'top'
    // });
    // toast.present();
  }

}
