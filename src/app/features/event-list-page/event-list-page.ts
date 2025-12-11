import { Component } from '@angular/core';
import { EventDTO, EventService } from '../../service/event-service.service';
import { HomePageEventListCard } from '../homepage/components/home-page-event-list-card/home-page-event-list-card';
import { HomePageSearch } from "../homepage/components/home-page-search/home-page-search";


@Component({
  selector: 'app-event-list-page',
  imports: [HomePageEventListCard, HomePageSearch],
  templateUrl: './event-list-page.html',
  styleUrl: './event-list-page.scss',
})
export class EventListPage {
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

}
