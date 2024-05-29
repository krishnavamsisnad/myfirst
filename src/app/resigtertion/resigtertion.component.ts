import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resigtertion',
  templateUrl: './resigtertion.component.html',
  styleUrls: ['./resigtertion.component.css']
})
export class ResigtertionComponent {
  username:any
  password:any
  number:any
  gender:any
  isactive:any
constructor(public toas:ToastrService,public auth:AuthService,public r:Router){}
submitform(singform:NgForm){
 console.log(singform.value)
 
 if(singform.valid){
  this.auth.singinuser(singform.value).subscribe((res)=>{
    this.toas.success("Register succfully")
    this.r.navigateByUrl('login')
  })
 }
 else{
this.toas.warning("Please enter valid data")
 }
}
}
