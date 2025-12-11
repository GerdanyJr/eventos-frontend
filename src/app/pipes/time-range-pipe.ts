import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeRange',
  standalone: true
})
export class TimeRangePipe implements PipeTransform {

  transform(startIso: string, endIso: string): string {
    const start = new Date(startIso);
    const end = new Date(endIso);

    const format = (d: Date) =>
      d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    return `${format(start)} - ${format(end)}`;
  }
}
