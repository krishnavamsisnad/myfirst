import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
person:FormGroup
constructor(public ar:FormBuilder){
this.person.ar.group({
  
})
}


}
