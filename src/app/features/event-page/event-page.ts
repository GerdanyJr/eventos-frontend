import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetailDTO, EventDTO, EventService, TicketTypeDTO } from '../../service/event-service.service';
import { HomePageEventListCard } from "../homepage/components/home-page-event-list-card/home-page-event-list-card";

@Component({
  selector: 'app-event-page',
  imports: [HomePageEventListCard],
  templateUrl: './event-page.html',
  styleUrl: './event-page.scss',
})
export class EventPage {
  events: EventDTO[] = [];
  event?: EventDetailDTO;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    
    if (eventId) {
      this.loadEventDetails(+eventId);
    }

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

  loadEventDetails(id: number): void {
    this.isLoading = true;
    this.eventService.getEventDetail(id).subscribe({
      next: (event) => {
        this.event = event;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar evento:', error);
        this.error = 'Não foi possível carregar os detalhes do evento.';
        this.isLoading = false;
      }
    });
  }

  getFormattedDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getFormattedTime(date: Date): string {
    return new Date(date).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getFormattedPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  }

  getCheapestTicket(): TicketTypeDTO | undefined {
    return this.event?.tiposIngresso.reduce((min, ticket) =>
      ticket.preco < min.preco ? ticket : min
    );
  }

  onBuyTicket(ticketType: TicketTypeDTO): void {
    console.log('Comprar ingresso:', ticketType);
  }

  onShare(): void {
    if (navigator.share) {
      navigator.share({
        title: this.event?.nome,
        text: this.event?.descricao,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado!');
    }
  }

  onSaveEvent(): void {
    console.log('Salvar evento:', this.event?.eventoId);
  }
}
