import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  constructor(public http:HttpClient) { }
  getAllproducts(){
   return this.http.get("https://fakestoreapi.com/products")
  }
  getbyid(id:any){
    return this.http.get(`https://fakestoreapi.com/products/`+id)
  }
}
