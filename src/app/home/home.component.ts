import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username = "";
  password = "";
  role = "";
  userdata: any;
  localdata: any;

  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('user') || '{}');
    this.localdata = data;
  }

  login(user: NgForm) {
    this.http.get('http://localhost:3000/signin').subscribe((res: any) => {
      console.log(res);
      this.userdata = res;
      const login = this.userdata.find((a: any) => 
        a.username === user.value.username && a.password === user.value.password
      );
      if (login) {
        console.log('Login successful');
        // Perform further actions, e.g., navigate to a different route
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Login failed');
        // Handle login failure, e.g., show an error message
      }
    });
  }
}

