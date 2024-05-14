import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  constructor(public http:HttpClient) { }
  getAllproducts(){
    this.http.get("https://fakestoreapi.com/products")
  }
}
