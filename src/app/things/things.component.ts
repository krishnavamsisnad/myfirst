import { Component, Input } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent {
  @Input() data:any
  products:any
  
constructor(public as:ProductservicesService){}
ngOnInit(){
  this.as.getAllproducts().subscribe((data:any)=>{
    this.products=data
  })
 
}
}