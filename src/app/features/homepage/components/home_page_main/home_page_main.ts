import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../service/auth-service.service';
import { HomePageCategories } from "../home-page-categories/home-page-categories";
import { HomePageEventList } from "../home-page-event-list/home-page-event-list";
import { HomePageSearch } from "../home-page-search/home-page-search";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [HomePageSearch, HomePageCategories, HomePageEventList],
  templateUrl: './home_page_main.html',
  styleUrl: './home_page_main.scss'
})
export class HomePage {
  private authService = inject(AuthService);
  private router = inject(Router);

  onclick() {
    this.router.navigate([this.authService.isAuthenticated() ? "/create-event" : "/login"]);
  }
}
