import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgStyle } from '@angular/common';

@Injectable()
export class RestProvider {

  data: any;
  constructor(public http: HttpClient) {
   
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data=>{
      this.data = data;
      return this.data;
    });
  }

}
