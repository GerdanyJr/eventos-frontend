import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthAbr',
  standalone: true
})
export class MonthAbrPipe implements PipeTransform {

  private months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

  transform(date: string | Date): string {
    const d = new Date(date);
    return this.months[d.getMonth()];
  }
}
