import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
constructor(public ps:ProductService){}
product:any
ngOnInit(){
  this.ps.getall().subscribe({
    next:(data:any)=>{
      console.log(data)
      this.product=data
    },
    error:(er)=>{
      console.log(er)
    },
    complete:()=>{
      
    }

  })
}
}
