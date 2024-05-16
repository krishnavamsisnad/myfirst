import { Component } from '@angular/core';
import { FormControl ,FormGroup,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {

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
