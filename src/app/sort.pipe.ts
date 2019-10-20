import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string, order: string): any {
    if ( value.length === 0 ){
      return value;
    }
    // Sort
    return value.sort(
      (item1, item2) => {
        if ( order === 'ASC' ){
          if ( item1[propName] < item2[propName] ){
            return -1;
          } else if ( item1[propName] > item2[propName] ){
                  return 1;
          }
          return 0;
        } else {
          if ( item1[propName] < item2[propName] ){
            return 1;
          } else if ( item1[propName] > item2[propName] ){
                  return -1;
          }
          return 0;
        }
        
      }
    );
  }

}
