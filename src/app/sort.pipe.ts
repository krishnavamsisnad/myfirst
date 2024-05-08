import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: any): any {
   
    const key = args[0];
    const order = args[1];

    return value.sort((a: any, b: any) => {
      if (order === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? -1 : 1;
      }
    });
  }
}


