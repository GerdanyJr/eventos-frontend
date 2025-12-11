import { Component, OnInit } from '@angular/core';
import { EventDTO, EventService } from '../../../../service/event-service.service';
import { MonthAbrPipe } from "../../../../pipes/month-abr-pipe";
import { EventDayPipe } from "../../../../pipes/event-day-pipe";
import { TimeRangePipe } from "../../../../pipes/time-range-pipe";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home-page-event-list',
  imports: [MonthAbrPipe, EventDayPipe, TimeRangePipe, CurrencyPipe],
  templateUrl: './home-page-event-list.html',
  styleUrl: './home-page-event-list.scss'
})
export class HomePageEventList implements OnInit {
  events: EventDTO[] = [];
  isLoading = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading = true;
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.events = events;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar eventos:', error);
        this.isLoading = false;
      }
    });
  }

  onEventClick(eventId: number) {
    console.log(`Evento clicado ${eventId}`);
  }

  loadMore(): void { }
}