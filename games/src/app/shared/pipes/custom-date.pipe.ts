import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  /**
   * @description Transforms the date to a custom format
   * @param value date from planets api in format M/D/YYYY h:m:s a
   * @returns {String} date formatted in MMMM Do YYYY - example - January 1st, 2019
   * Assumption: date format from planets api will always be of the came format
   */
  transform(value: Date): any {
    return moment(value, 'M/D/YYYY h:m:s a').format('MMMM Do[,] YYYY');
  }

}