import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.css']
})
export class CouterComponent {

@Input () counter:number=0
@Input() num:number=0
  inc(){
    this.counter=this.counter+this.num
  }
  dec(){
    this.counter=this.counter-this.num
  }
  
task=[
  {
  title:"bnw",
  status:true
},{
  title:"car",
  status:false

},{
  title:"iphne",
  status:true
}
]
newtask:any;

addtask(){
  this.task.push(this.newtask)
}
detetask(i:number){
  this.task.splice(i,1)
}

}