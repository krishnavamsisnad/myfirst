import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employdata: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const employ = JSON.parse(localStorage.getItem('username') || '{}');
    this.employdata = employ;
    console.log(this.employdata);

    if (employ && employ.employeactive === 'active') {
      this.router.navigateByUrl('/activedashboard');
    } else {
      this.router.navigateByUrl('/diactivedashboard');
    }
  }
}

