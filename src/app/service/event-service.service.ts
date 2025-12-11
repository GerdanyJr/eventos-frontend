import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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


export interface EventDetailDTO {
  eventoId: number;
  nome: string;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  status: number;
  banner: string;
  organizador: OrganizerDTO;
  local: VenueDTO;
  categoria: CategoryDTO;
  tiposIngresso: TicketTypeDTO[];
  totalInteressados?: number;
}

export interface OrganizerDTO {
  idUsuario: number;
  primeiroNome: string;
  ultimoNome: string;
  nomeCompleto?: string;
  email: string;
}

export interface VenueDTO {
  localId: number;
  nome: string;
  endereco: string;
  capacidade: number;
}

export interface CategoryDTO {
  idCategoria: number;
  nome: string;
  urlImagem: string;
}

export interface TicketTypeDTO {
  tipoIngressoId: number;
  nome: string;
  preco: number;
  quantidadeTotal: number;
  quantidadeDisponivel?: number;
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

  getEventDetail(id: number): Observable<EventDetailDTO> {
    return this.http.get<any>(`${this.API_URL}/${id}`).pipe(
      map(event => this.transformEventDetail(event))
    );
  }

  private transformEventDetail(data: any): EventDetailDTO {
    return {
      eventoId: data.eventoId,
      nome: data.nome,
      descricao: data.descricao,
      dataInicio: new Date(data.dataInicio),
      dataFim: new Date(data.dataFim),
      status: data.status,
      banner: data.banner,
      organizador: {
        idUsuario: data.organizador.idUsuario,
        primeiroNome: data.organizador.primeiroNome,
        ultimoNome: data.organizador.ultimoNome,
        nomeCompleto: `${data.organizador.primeiroNome} ${data.organizador.ultimoNome}`,
        email: data.organizador.email
      },
      local: data.local,
      categoria: data.categoria,
      tiposIngresso: data.tiposIngresso || [],
      totalInteressados: data.totalInteressados
    };
  }
}
