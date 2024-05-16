import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
person:FormGroup
constructor(public ar:FormBuilder){
this.person=ar.group({
  fristname:["",[Validators.required]],
  lastname:["",[Validators.required]]
})

}
sub(){
  console.log(this.person.value)
}

}
