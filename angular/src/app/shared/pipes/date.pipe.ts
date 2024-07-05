import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string, format: string = 'dd/MM/yyyy'): string {
    return formatDate(value, format, 'en-US');
  }

}
