import { Component } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
constructor(public pr:ProductservicesService){

}
ngOnInit(){
  this.pr.getAll().subscric
}
}
