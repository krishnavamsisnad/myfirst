import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username=""
  passwoard=""
  constructor(public http:HttpClient,public router:Router){}
login(user:NgForm){ 
  this.http.get('http://localhost:3000/singin').subscribe((res)=>{
    console.log(res)
    
  })
  console.log(user.value)
}
}
