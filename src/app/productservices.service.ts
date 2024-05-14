import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  constructor(public http:HttpClient) { }
  getAll(){
    this.http.get("")
  }
}
