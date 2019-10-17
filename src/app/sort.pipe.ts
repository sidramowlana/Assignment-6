import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, name: string) {
    const result = [];
    var sortArray;
    var finalArray = [];
    for (let i of value) {
      i[name];
      result.push(i[name]);
    }
    sortArray = result.sort();
    for (let item of sortArray) {
      for (let v of value) {
        if (v.name === item ){
          finalArray.push(v);
        }
      }
    }
    return finalArray;
  }
}


