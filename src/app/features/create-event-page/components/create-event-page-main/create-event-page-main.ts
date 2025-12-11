import { Component } from '@angular/core';
import { CreateEventPageDetails } from "../create-event-page-details/create-event-page-details";

@Component({
  selector: 'app-create-event-page-main',
  standalone: true,
  imports: [CreateEventPageDetails],
  templateUrl: './create-event-page-main.html',
  styleUrl: './create-event-page-main.scss'
})
export class CreateEventPageMain {

}
