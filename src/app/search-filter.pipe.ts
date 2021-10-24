import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    return value ? value.filter(item => JSON.stringify(item).indexOf(args) > -1) : [];
  }

}
