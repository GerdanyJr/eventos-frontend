import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EventDTO {
  eventoId: number;
  nome: string;
  banner: string;
  dataInicio: string;
  dataFim: string;
  localNome: string;
  preco: number;
  moeda: string;
  qtdInteressados: number;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly API_URL = 'http://localhost:8080/api/v1/eventos';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventDTO[]> {
    return this.http
      .get<EventDTO[]>(this.API_URL);
  }

  createEvent(eventData: any, banner: File): Observable<any> {
    const formData = new FormData();

    const eventDto = {
      nome: eventData.titulo,
      descricao: eventData.descricao,
      dataInicio: `${eventData.dataInicio}T${eventData.horaInicio}:00`,
      dataFim: `${eventData.dataFim}T${eventData.horaFim}:00`,
      organizadorId: 1,
      localId: eventData.localId,
      categoriaId: eventData.categoria,
      tipoIngressos: eventData.tickets.map((t: any) => ({
        nome: t.name,
        preco: t.price,
        quantidadeTotal: t.quantity
      }))
    };

    formData.append('obj', new Blob([JSON.stringify(eventDto)], { type: 'application/json' }));

    if (banner) {
      formData.append('file', banner);
    }

    return this.http.post(this.API_URL, formData);
  }
}
