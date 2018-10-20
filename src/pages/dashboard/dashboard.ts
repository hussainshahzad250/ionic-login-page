import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.users= navParams.get('users');
    this.userList = this.users;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
