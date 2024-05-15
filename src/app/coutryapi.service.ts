import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoutryapiService {

  constructor(public http:HttpClient) { }
getcountry(){
  return this.http.get("https://restcountries.com/v3/all")
}
getbycname(cname:any){
  return this.http.get(`https://restcountries.com/v3/name/`+cname)
}
}
