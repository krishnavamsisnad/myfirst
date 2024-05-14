import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { 
    moblies:["redmi"]
  }
  getallproduct(){
    return this.http.get("https://fakestoreapi.com/products")
  }

}
