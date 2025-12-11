import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationPageSignUp } from "../authentication-page-signup/authentication-page-signup";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-authentication-page-main',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './authentication-page-main.html',
  styleUrl: './authentication-page-main.scss'
})
export class AuthenticationPageMain {

}
