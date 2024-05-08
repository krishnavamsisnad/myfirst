import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sub-data',
  templateUrl: './sub-data.component.html',
  styleUrls: ['./sub-data.component.css']
})
export class SubDataComponent {
name="vamsi"
see=""
products:any
constructor(public pr:ProductsService){}
ngOnInit(){
this.pr.getAll().subscribe({
  next:(data)=>{
    console.log(data)
    this.products=data
  },
  error:(er)=>{
    console.log(er)
  }
})
}
}
