import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, fileString: string, propName: string): any {
   if (value.length === 0 || fileString === ''){
     return value;
   }
   const resultArray = [];
   for (const item of value) {
    
     if (item[propName] === fileString) {
       resultArray.push(item);
     }
  
   }
   return resultArray;
  }

}
