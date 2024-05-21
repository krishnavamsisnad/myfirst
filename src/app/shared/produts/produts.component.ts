import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
  constructor( public Rout:Router){}
sub(data:any){
  console.log(data.value)
this.Rout.navigateByUrl('/productdata')
}

}
