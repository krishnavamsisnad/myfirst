import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  employerdata: any;

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.employerdata = form.value; 
  }
}

