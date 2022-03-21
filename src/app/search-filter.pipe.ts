import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    return value && value.length>0 ? value.filter(item => JSON.stringify(item).toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1) : [];
  }

}
