import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="vamsi"
 presons:any=[]
  person:FormGroup;
  constructor(public ar:FormBuilder){
    this.person=this.ar.group({
      fname:[""],
      phone:[''],
      collage:['']

    })
  }

  abc(){
    this.presons.push(this.person.value)
  }

}
