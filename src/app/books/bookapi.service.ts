import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  constructor(public http:HttpClient) { }
  getallbooks(){
    return this.http.get('http://localhost:3000/posts')
  }
}
