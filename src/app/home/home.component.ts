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
  role=""
  userdata:any
  loacldata:any
  constructor(public http:HttpClient,public router:Router){}
  ngOnInit(){
    const data = JSON.parse(localStorage.getItem('user') || '{}');
    this.loacldata=data
    
  }
login(user:NgForm){ 
  this.http.get('http://localhost:3000/singin').subscribe((res)=>{
    console.log(res)
    this.userdata=res
    const  login=this.loacldata.find((a:any)=>{a.username==this.userdata.username && a.password==this.userdata.password })
  
  })

 
}
}
