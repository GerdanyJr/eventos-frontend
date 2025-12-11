import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'eventDay',
  standalone: true
})
export class EventDayPipe implements PipeTransform {

  transform(date: string | Date): string {
    return new Date(date).getDate().toString().padStart(2, '0');
  }
}
