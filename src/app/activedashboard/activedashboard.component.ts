import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-activedashboard',
  templateUrl: './activedashboard.component.html',
  styleUrls: ['./activedashboard.component.css']
})
export class ActivedashboardComponent implements OnInit {
  activeUsers: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getallusers().subscribe(
      (res: any) => {
        console.log(res);
        this.activeUsers = res.filter((user:any)=>{
          console.log(user);
          return user.employeactive ==="active"; 
        });
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }
}

