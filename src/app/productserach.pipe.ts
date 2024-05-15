import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productserach'
})
export class ProductserachPipe implements PipeTransform {

  transform(value:any, args:any): any {
    return value.filter((a:any)=>{
      if(args){
        
      }
    });
  }

}
