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
@Output() pass=new EventEmitter()
message="hi this is exmple"
data="vamsi"
inc(){
  this.counter=this.counter+this.y
}
dec(){
  this.counter=this.counter-this.x
}
passdata(){
this.refer.emit(this.message)
}
abcd(){
this.pass.emit(this.data)
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
