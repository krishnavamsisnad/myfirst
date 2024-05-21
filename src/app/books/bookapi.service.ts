import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookapiService {
  bookapi='http://localhost:3000/posts'
  constructor(public http:HttpClient) { }
  getallbooks(){

    return this.http.get(this.bookapi)
  }
  addbook(newbook:any){
    return this.http.post(this.bookapi,newbook)
  }
  deletbook(id:any){
    return this.http.delete(`${this.bookapi}/${id}`)
  }
  editbook(id:any,newbook:any){
    return this.http.put(`${this.bookapi}/${id}`,newbook)
  }
}
