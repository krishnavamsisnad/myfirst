import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-diactivedashboard',
  templateUrl: './diactivedashboard.component.html',
  styleUrls: ['./diactivedashboard.component.css']
})
export class DiactivedashboardComponent {
  diactiveUsers: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getallusers().subscribe(
      (res: any) => {
        console.log(res);
        this.diactiveUsers = res.filter((user:any)=>{
          console.log(user);
          return user.employeactive ==="diactive"; 
        });
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
