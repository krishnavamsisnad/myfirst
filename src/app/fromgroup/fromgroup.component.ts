import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromgroup',
  templateUrl: './fromgroup.component.html',
  styleUrls: ['./fromgroup.component.css']
})
export class FromgroupComponent {
studentfrom=new FormGroup({
  fristname:new FormControl('',[Validators.required]),
  lastname:new FormControl("",[Validators.required,Validators.minLength(2)]),
  phonenume:new FormArray([new FormControl(),new FormControl()])
})
get phonenume(){
  return this.studentfrom.get("phonenume") as FormArray
}
add(){
  console.log(this.studentfrom.value)
}
addother(){
  this.phonenume.push(new FormControl())
}
}
