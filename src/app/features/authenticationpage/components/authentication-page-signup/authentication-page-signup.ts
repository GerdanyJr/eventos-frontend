import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../service/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication-page-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './authentication-page-signup.html',
  styleUrl: './authentication-page-signup.scss'
})
export class AuthenticationPageSignUp {
  router = inject(Router);
  authService = inject(AuthService);
  toastService = inject(ToastrService);

  signUpForm = new FormGroup({
    primeiro_nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ultimo_nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    senha: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  signUp() {
    if (this.signUpForm.valid) {
      const form = this.signUpForm.getRawValue();

      this.authService.register({
        nome: form.primeiro_nome,
        sobrenome: form.ultimo_nome,
        email: form.email,
        password: form.senha
      }).subscribe({
        next: () => {
          this.toastService.success('Usuário cadastrado com sucesso');
          this.router.navigate(['auth', 'login']);
        },
        error: (err) => {
          const backendMessage = err?.error?.message || 'Erro inesperado';

          this.toastService.error(backendMessage);
        }
      });

    } else {
      this.toastService.error('⚠️ Formulário inválido');
    }
  }

  goToLogin() {
    this.router.navigate(['auth', 'login']);
  }
}
