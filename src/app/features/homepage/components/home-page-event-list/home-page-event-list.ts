import { Component, OnInit } from '@angular/core';
import { EventDTO, EventService } from '../../../../service/event-service.service';
import { HomePageEventListCard } from "../home-page-event-list-card/home-page-event-list-card";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-event-list',
  imports: [HomePageEventListCard],
  templateUrl: './home-page-event-list.html',
  styleUrl: './home-page-event-list.scss'
})
export class HomePageEventList implements OnInit {
  events: EventDTO[] = [];
  isLoading = false;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading = true;
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.events = events.slice(0, 4);
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

  loadMore(): void {
    this.router.navigate(["events"]);
  }
}