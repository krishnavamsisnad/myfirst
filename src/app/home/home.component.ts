import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 employdata: any;
id:any
username:any
password:any
number:any
gender:any
employeactive:any


  constructor(private router: Router,public auth:AuthService) { }

  ngOnInit(){
  this.getall()
  }



  getall(){
    this.auth.getallusers().subscribe((res)=>{
      this.employdata=res
      console.log(res)
    })
  }
  edit(a:any){
    this.id=a.id
    this.username=a.username
    this.gender=a.gender
    this.employeactive=a.employeactive
  }
  
  update(){
    let employee={
      'id':this.id,
      'username':this.username,
      'gender':this.gender,
      'employeactive':this.employeactive
    }
    console.log(employee)
    this.auth.updateuser(this.id,employee).subscribe((res)=>{
      console.log("respond"+res)
      this.getall()
    })
    
  }
}
