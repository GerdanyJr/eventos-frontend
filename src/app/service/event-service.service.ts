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
}
