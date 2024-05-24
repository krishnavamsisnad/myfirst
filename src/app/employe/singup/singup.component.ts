import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  username=""
  passwoard=""
  role=""
  constructor(public http:HttpClient,public r:Router){}
  singin(f:NgForm){
    this.http.post('http://localhost:3000/singin',f.value).subscribe((res)=>{
      console.log(res)
      this.r.navigateByUrl('')
  })
  }

}
