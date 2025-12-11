import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventDTO } from '../../../../service/event-service.service';
import { MonthAbrPipe } from "../../../../pipes/month-abr-pipe";
import { EventDayPipe } from "../../../../pipes/event-day-pipe";
import { TimeRangePipe } from "../../../../pipes/time-range-pipe";
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-event-list-card',
  imports: [MonthAbrPipe, EventDayPipe, TimeRangePipe, CurrencyPipe],
  templateUrl: './home-page-event-list-card.html',
  styleUrl: './home-page-event-list-card.scss',
})
export class HomePageEventListCard {

  constructor(private router: Router) { }

  @Input() event!: EventDTO;

  onClick(eventId: number) {
    this.router.navigate(["event", eventId], { onSameUrlNavigation: 'reload' });
  }
}
