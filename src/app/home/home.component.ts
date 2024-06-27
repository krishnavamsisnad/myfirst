import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
  role?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = '';
  password = '';
  role = '';
  userdata: User[] = [];
  localdata: User | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('user');
    if (data) {
      this.localdata = JSON.parse(data);
    }
  }

  login(user: NgForm) {
    if (user.valid) {
      this.http.get<User[]>('http://localhost:3000/signin').subscribe(
        (res: User[]) => {
          this.userdata = res;
          const login = this.userdata.find(
            (a: User) => a.username === user.value.username && a.password === user.value.password
          );
          if (login) {
            console.log('Login successful');
            this.router.navigate(['/dashboard']);
          } else {
            console.log('Login failed');
            // Handle login failure, e.g., show an error message
            alert('Invalid username or password');
          }
        },
        (error) => {
          console.error('Error fetching user data:', error);
          // Handle HTTP request error
          alert('An error occurred while trying to log in. Please try again later.');
        }
      );
    } else {
      console.log('Form is invalid');
      // Handle form validation failure, e.g., show an error message
      alert('Please fill in all required fields');
    }
  }
}


