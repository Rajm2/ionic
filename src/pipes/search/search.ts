import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any, search : string) {
   
    if(search.length > 0) {
      return items.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
    return items;
  }
}
