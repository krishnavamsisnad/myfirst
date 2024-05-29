import { Component } from '@angular/core';

import {  NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any
  password:any
  userdata:any
  constructor(public toas:ToastrService,public auth:AuthService,public r:Router){
    localStorage.clear()
  }
  submitedform(loginform:NgForm){
    if(loginform.valid){
     
      this.auth.getbyuser(loginform.value.username).subscribe((res)=>{
        this.userdata=res
        console.log(this.userdata)
        
        const user = this.userdata.find((u: any) => u.username === loginform.value.username && u.password === loginform.value.password);
        if(user){
          if(user.employeactive){
            localStorage.setItem('username',user.id)
            this.r.navigateByUrl('')
            this.toas.success("login sucess")
          }
          else{
            this.toas.error('invalid user')
          }
        }
        else{
          this.toas.error('invalid detailes')
        }
      })
     }

  }
}

