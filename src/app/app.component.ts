import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirst';
  data=2
  dec=5
cdata:any
pdata:any
sdata:any
update(e:any){
  this.cdata=e
}
updatapraent(e:any){
this.pdata=e
}
dataupdate(e:any){
this.sdata=e
}
}
