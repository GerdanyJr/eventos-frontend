import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./features/homepage/components/home_page_main/home_page_main";
import { AuthenticationPageMain } from "./features/authenticationpage/components/authentication-page-main/authentication-page-main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, AuthenticationPageMain],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('eventos-app');
}
