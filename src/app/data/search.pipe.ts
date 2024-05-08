import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string): any {
    return value.filter((a:any)=>{
      if(args)
    })
  }

}
