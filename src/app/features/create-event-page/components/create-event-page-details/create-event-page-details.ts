import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Category, CategoryService } from '../../../../service/category-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-event-page-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-event-page-details.html',
  styleUrl: './create-event-page-details.scss'
})
export class CreateEventPageDetails implements OnInit {

  eventDetailsForm = new FormGroup(
    {
      titulo: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      dataInicio: new FormControl('', [Validators.required]),
      dataFim: new FormControl('', [Validators.required]),
      horaInicio: new FormControl('', [Validators.required]),
      horaFim: new FormControl('', [Validators.required]),
      localizacao: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
    }
  )

  categories: Category[] = []

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(
      (response) => {
        this.categories = response
      }
    )
  }

  continuar() {
    if (this.eventDetailsForm.valid) {
      console.log('✅ Dados enviados:', this.eventDetailsForm.value);
    } else {
      console.log('⚠️ Formulário inválido');
    }
  }
}
