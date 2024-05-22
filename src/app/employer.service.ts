import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
api:any='`http://localhost:3000/posts'
  constructor(public http:HttpClient) { }
  getemploer(){
    return this.http.get('http://localhost:3000/posts')
  }
  addemploy(newemployee:any){
    return this.http.post('http://localhost:3000/posts',newemployee)
  }
  deleteemploy(id:any){
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
  updateemploy(id:any,newemployee:any){
    return this.http.put(`${this.api}/${id}`,newemployee)
  }
}
