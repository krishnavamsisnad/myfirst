import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  students=[
    {
      fristname:"vamsi",
      lastname:"nalluri",
      age:23,
      gender:"male"
    },  {
      fristname:"sai",
      lastname:"edupucati",
      age:23,
      gender:"female"
    },
    {
      fristname:"sai",
      lastname:"pusunuri",
      age:23,
      gender:"male"
    }
  ]
  name="vamsi"
}
