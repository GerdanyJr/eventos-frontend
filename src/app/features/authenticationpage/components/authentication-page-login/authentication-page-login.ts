import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../service/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication-page-login',
  imports: [ReactiveFormsModule],
  templateUrl: './authentication-page-login.html',
  styleUrl: './authentication-page-login.scss'
})
export class AuthenticationPageLogin {
  router = inject(Router);
  authService = inject(AuthService);
  toastService = inject(ToastrService);


  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    senha: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  })

  login() {
    if (this.loginForm.valid) {
      const form = this.loginForm.getRawValue();

      this.authService.login({
        email: form.email,
        password: form.senha
      }).subscribe({
        next: () => {
          this.toastService.success('Usuário autenticado com sucesso');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Erro inesperado';

          this.toastService.error(backendMessage);
        }
      });
    } else {
      console.log('⚠️ Formulário inválido');
    }
  }

  goToSignUp() {
    this.router.navigate(['auth', 'signup'])
  }

}
