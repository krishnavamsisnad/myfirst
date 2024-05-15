import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoutryapiService {

  constructor(public http:HttpClient) { }
  ngOnInit(){
    this.http.get("")
  }
}
