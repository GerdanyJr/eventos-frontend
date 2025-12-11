import { Component } from '@angular/core';
import { HomePageSearch } from "../home-page-search/home-page-search";
import { HomePageCategories } from "../home-page-categories/home-page-categories";
import { HomePageEventList } from "../home-page-event-list/home-page-event-list";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [HomePageSearch, HomePageCategories, HomePageEventList, RouterLink],
  templateUrl: './home_page_main.html',
  styleUrl: './home_page_main.scss'
})
export class HomePage {

}
