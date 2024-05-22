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
  deteleapi(id:any){
    return this.http.delete(`${this.productapi}/${id}`)
  }
  updateapi(id:any,product:any){
    return this.http.put(`${this.productapi}/${id}`,product)
  }
}
