import { HttpClient } from '@angular/common/http';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string;
  password: string;


  data?: any;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public http: HttpClient) {

  }

  login(){
        // TOAST START
     let toast = this.toastCtrl.create({
      message: 'Login successfully !',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    // TOAST END
    
   this.data= this.http.get('https://jsonplaceholder.typicode.com/users');
    this.data.subscribe(data=>{
      this.data =data;
      this.navCtrl.push(DashboardPage,{users:this.data});     
    });    
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
