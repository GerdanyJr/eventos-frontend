import { Component } from '@angular/core';
import { GenericPageHeader } from "../generic-page-header/generic-page-header";
import { RouterOutlet } from "@angular/router";
import { GenericPageFooter } from "../generic-page-footer/generic-page-footer";

@Component({
  selector: 'app-generic-page-base-main',
  imports: [GenericPageHeader, RouterOutlet, GenericPageFooter],
  templateUrl: './generic-page-base-main.html',
  styleUrl: './generic-page-base-main.scss'
})
export class GenericPageBaseMain {

}
