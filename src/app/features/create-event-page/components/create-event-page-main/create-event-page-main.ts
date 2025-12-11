import { Component, inject } from '@angular/core';
import { CreateEventPageDetails } from "../create-event-page-details/create-event-page-details";
import { CreateEventPageBanner } from "../create-event-page-banner/create-event-page-banner";
import { CreateEventPageTicketing } from "../create-event-page-ticketing/create-event-page-ticketing";
import { CreateEventPageReview } from "../create-event-page-review/create-event-page-review";
import { CommonModule } from '@angular/common';
import { EventService } from '../../../../service/event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-page-main',
  standalone: true,
  imports: [CreateEventPageDetails, CreateEventPageBanner, CreateEventPageTicketing, CreateEventPageReview, CommonModule],
  templateUrl: './create-event-page-main.html',
  styleUrl: './create-event-page-main.scss'
})
export class CreateEventPageMain {
  private eventService = inject(EventService);
  private router = inject(Router);

  currentStep: number = 1;
  eventData: any = {};

  onDetailsSubmit(data: any) {
    this.eventData = { ...this.eventData, ...data };
    this.currentStep = 2;
    window.scrollTo(0, 0);
  }

  onBannerSubmit(file: File | null) {
    if (file) {
      this.eventData.banner = file;
    }
    this.currentStep = 3;
    window.scrollTo(0, 0);
  }

  onTicketingSubmit(data: any) {
    this.eventData = { ...this.eventData, ...data };
    this.currentStep = 4;
    window.scrollTo(0, 0);
  }

  onPublish() {
    console.log('🚀 Publicando Evento:', this.eventData);

    this.eventService.createEvent(this.eventData, this.eventData.banner).subscribe({
      next: (response: any) => {
        console.log('✅ Evento criado com sucesso!', response);
        alert('Evento criado com sucesso!');
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('❌ Erro ao criar evento:', error);
        alert('Erro ao criar evento. Verifique o console para mais detalhes.');
      }
    });
  }

  onBack() {
    this.currentStep--;
    window.scrollTo(0, 0);
  }
}
