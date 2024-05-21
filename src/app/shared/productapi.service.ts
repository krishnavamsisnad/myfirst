import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(public http:HttpClient) { }
  productapi='http://localhost:3000/products'
  getproducts(){
    return this.http.get(this.productapi)
  }
}
