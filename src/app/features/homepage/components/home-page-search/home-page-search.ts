import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-search',
  imports: [],
  templateUrl: './home-page-search.html',
  styleUrl: './home-page-search.scss'
})
export class HomePageSearch {
  private router = inject(Router);

  onSubmit(e: SubmitEvent, input: HTMLInputElement) {
    e.preventDefault();
    this.router.navigate(["events"], {
      queryParams: { query: input.value }
    });
  }

}