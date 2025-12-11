import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    nome: string;
    sobrenome: string;
    email: string;
    password: string;
}

export interface TokenResponse {
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly API_URL = 'http://localhost:8080/auth';
    private readonly TOKEN_KEY = 'auth_token';

    constructor(private http: HttpClient) { }
    login(data: LoginRequest): Observable<TokenResponse> {
        return this.http.post<TokenResponse>(`${this.API_URL}/login`, data)
            .pipe(
                tap(response => this.saveToken(response.token))
            );
    }

    register(data: RegisterRequest): Observable<void> {
        return this.http.post<void>(`${this.API_URL}/register`, data);
    }

    private saveToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}
