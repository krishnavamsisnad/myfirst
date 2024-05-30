import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employdata: any;
  id: any;
  username: any;
  password:any;
  numbers:any
  gender: any;
  employeactive: any;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.getall();
  }

  getall() {
    this.auth.getallusers().subscribe((res) => {
      this.employdata = res;
      console.log(res);
    }, (error) => {
      console.error('Error fetching users:', error);
    });
  }

  edit(a: any) {
    this.id = a.id;
    this.username = a.username;
    this.password=a.password
    this.numbers=a.numbers;
    this.gender = a.gender;
    this.employeactive = a.employeactive;
  }

  update() {
    let employee = {
      'id': this.id,
      'username': this.username,
      "password":this.password,
      "numbers":this.numbers,
      'gender': this.gender,
      'employeactive': this.employeactive
    };
    console.log('Updating employee:', employee);
    this.auth.updateuser(this.id, employee).subscribe((res) => {
      console.log('Update response:', res);
      this.getall();
    }, (error) => {
      console.error('Error updating user:', error);
    });
  }
}
