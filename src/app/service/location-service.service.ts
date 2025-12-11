import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Location {
    localId: number;
    nome: string;
    endereco: string;
    capacidade: number;
}

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    private readonly API_URL = 'http://localhost:8080/api/v1/locais';

    constructor(private http: HttpClient) { }

    getLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(this.API_URL);
    }
}
