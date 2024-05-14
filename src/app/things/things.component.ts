import { Component } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent {
constructor(public as:ProductservicesService){}
ngOnInit(){
  this.as.getAllproducts().subscribe(()=>{})
 
}
}