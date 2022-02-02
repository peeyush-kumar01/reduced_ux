import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

  
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
