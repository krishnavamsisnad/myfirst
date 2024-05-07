import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
constructor(public ps:ProductService){}
ngOnInit(){
  this.ps.getall().Subscriable({

  })
}
}
