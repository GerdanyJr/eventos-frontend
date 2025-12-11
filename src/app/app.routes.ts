import { Routes } from '@angular/router';
import { HomePage } from './features/homepage/components/home_page_main/home_page_main';
import { AuthenticationPageMain } from './features/authenticationpage/components/authentication-page-main/authentication-page-main';
import { AuthenticationPageSignUp } from './features/authenticationpage/components/authentication-page-signup/authentication-page-signup';
import { AuthenticationPageLogin } from './features/authenticationpage/components/authentication-page-login/authentication-page-login';
import { GenericPageBaseMain } from './features/generic-page-base/components/generic-page-base-main/generic-page-base-main';
import { CreateEventPageMain } from './features/create-event-page/components/create-event-page-main/create-event-page-main';

export const routes: Routes = [
    {
        path: 'auth', 
        component: AuthenticationPageMain,
        children: [
            {path: 'signup', component: AuthenticationPageSignUp},
            {path: 'login', component: AuthenticationPageLogin},
            {path: '**', redirectTo: 'login'}
        ]
    },
    {
        path: '', 
        component: GenericPageBaseMain,
        children: [
            {path: 'home', component: HomePage},
            {path: 'create-event', component: CreateEventPageMain},
            // {path: 'about', component: },
            // {path: 'contact', component: },
            {path: '**', redirectTo: 'home'}
        ]
    },
    {
        path: '**', 
        redirectTo: ''
    }
];
