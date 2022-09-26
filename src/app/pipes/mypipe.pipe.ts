import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return '***' + value + " - " + args[0];
  }

}
