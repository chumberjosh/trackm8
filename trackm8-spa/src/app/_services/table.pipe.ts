import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'table'})
export class TablePipe implements PipeTransform {
  transform(value, args:string[]) : any {
    const keys = [];
    // tslint:disable-next-line: forin
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
