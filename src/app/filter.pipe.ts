import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if ( value.lenth === 0 || filterString === '' ){
      return value;
    }

    const resultArray = [];
    value.forEach(
      (item) => {
        if ( item[propName].indexOf(filterString) !== -1 ) {
          resultArray.push(item);
        }
      }
    );
    return resultArray;
  }

}
