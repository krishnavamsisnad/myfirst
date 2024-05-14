import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;
  constructor(public pr:ProductsService){}
  ngOnInit(){
    this.pr.getallproduct().subscribe({
      next:(data)=>{
        console.log(data)
      this.products=data
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{

      }
    })
  }
}
