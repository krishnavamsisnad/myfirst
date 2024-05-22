import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fromdata!: FormGroup;
  errorMessage: string = '';

  constructor(public r: Router, public from: FormBuilder, public http: HttpClient) {}

  ngOnInit() {
    this.fromdata = this.from.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.fromdata.valid) {
      this.http.get<any[]>('http://localhost:3000/singin').subscribe({
        next: (res) => {
          const user = res.find((a: any) => {
            return a.username === this.fromdata.value.username && a.password === this.fromdata.value.password;
          });
          if (user) {
     
            this.r.navigate(['productdata']);
          } else {
           
            this.errorMessage = 'Invalid username or password';
          }
        },
        error: (err) => {
        
          console.error('Error fetching users:', err);
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      });
    } 
  }
}

