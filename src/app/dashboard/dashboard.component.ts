import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const storedData = localStorage.getItem('employe');
    console.log("Stored data: ", storedData);

    let userdata: any[] = [];

    try {
      userdata = JSON.parse(storedData || "[]");
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      userdata = [];
    }

    console.log("User data:", userdata);

    const activeUser = userdata.find((user: any) => user.userdata === "active");
    const adminUser = userdata.find((user: any) => user.userdata === "admin");
    const diactiveUser = userdata.find((user: any) => user.userdata === "diactive");

    if (activeUser) {
      this.router.navigateByUrl("/activedashboard");
    } else if (adminUser) {
      this.router.navigateByUrl("/home");
    } else if (diactiveUser) {
      this.router.navigateByUrl("/diactivedboard");
    }
  }
}
