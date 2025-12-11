import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../service/auth-service.service';

@Component({
  selector: 'app-generic-page-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './generic-page-header.html',
  styleUrl: './generic-page-header.scss'
})
export class GenericPageHeader {
  private authService = inject(AuthService);

  headerRoutes = [
    { label: 'Home', route: ['/home'] },
    { label: 'Eventos', route: ['/eventos'] },
    { label: 'Sobre', route: ['/sobre'] },
    { label: 'Contato', route: ['/contato'] }
  ];

  authRoutes = [
    { label: 'Criar evento', route: ['/create-event'], show: () => this.isUserAuthenticated() },
    { label: 'Logout', action: () => this.logout(), show: () => this.isUserAuthenticated() },
    { label: 'Login', route: ['auth', 'login'], show: () => !this.isUserAuthenticated() }
  ];

  isUserAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
