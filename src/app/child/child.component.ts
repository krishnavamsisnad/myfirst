import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() refer=new EventEmitter()
  @Output() variable=new EventEmitter()
 
  send="send"
reciver="reciviered"
  childtopratent(){
    
    this.refer.emit(this.send)
  
  }
  parentdata(){
    this.variable.emit(this.reciver)
  }

  updata(e:any){
this.send=e.target.value
  }


}
