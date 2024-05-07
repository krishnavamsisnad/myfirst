import { Component,EventEmitter,Input, Output} from '@angular/core';

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
counter=0
@Input() x:any
@Input ()y:any
@Output() refer=new EventEmitter()
message="hi this is exmple"
inc(){
  this.counter=this.counter+this.y
}
dec(){
  this.counter=this.counter-this.x
}
passdata(){
this.refer.emit(this.message)
}
price=43555
studentname="vamsi"
students=[
  {
    fritname:"vamsi",
    age:23
  },
  {
    fritname:"sai",
    age:23
  }
]
}
