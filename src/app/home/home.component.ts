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
username:any
password:any
number:any
gender:any
employeactive:any


  constructor(private router: Router,public auth:AuthService) { }

  ngOnInit(){
    this.auth.getallusers().subscribe((res)=>{
      this.employdata=res
      console.log(res)
    })
  }
  edit(a:any){
    this.username=a.username
    this.gender=a.gender
    this.employeactive=a.employeactive
  }
  update(employdata.id,employdata){
    this.auth.updateuser(employdata.id,employdata)
  }
}
