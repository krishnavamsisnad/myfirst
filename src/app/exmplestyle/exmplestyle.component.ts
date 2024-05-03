import { Component } from '@angular/core';

@Component({
  selector: 'app-exmplestyle',
  templateUrl: './exmplestyle.component.html',
  styleUrls: ['./exmplestyle.component.css']
})
export class ExmplestyleComponent {
name="vamsi"
isactive:boolean=true
city=["hyderabad","chennai","vijawavada"]
abc(i:any){
this.city.splice(i,1)
}
active=false

exampl(){
this.name=("banguluru")
}

}
