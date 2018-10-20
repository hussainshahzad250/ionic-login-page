import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
