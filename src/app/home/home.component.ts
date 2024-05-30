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
isactive:any


  constructor(private router: Router,public auth:AuthService) { }

  ngOnInit(){
    this.auth.getallusers().subscribe((res)=>{
      this.employdata=res
      console.log(res)
    })
  }
  edit(a:any){
    
  }
}
