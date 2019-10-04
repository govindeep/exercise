import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date): any {
    return moment(value, 'M/D/YYYY h:m:s a').format('MMMM Do[,] YYYY');
  }

}