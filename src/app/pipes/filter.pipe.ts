import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproduct'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText:string,filterColumn:string): any {
   
   // let filteredProducts:any[] = [];
     if(filterText.length <3){
        return value;
     }
      return value.filter(
        //(prod)=>prod.productName.toLowerCase().indexOf(filterText.toLowerCase()) !=-1);
        (obj)=>obj[filterColumn].toLowerCase().indexOf(filterText.toLowerCase()) !=-1);
      }

}
