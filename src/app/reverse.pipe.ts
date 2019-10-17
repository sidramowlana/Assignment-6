import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value:any)
    {
        var splitString = value.split(""); 
        var reverseArray = splitString.reverse(); 
        var joinArray = reverseArray.join(""); 
        return joinArray;
    }
}
