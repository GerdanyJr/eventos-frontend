import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Category, CategoryService } from '../../../../service/category-service.service';

@Component({
  selector: 'app-home-page-categories',
  templateUrl: './home-page-categories.html',
  styleUrl: './home-page-categories.scss',
  imports: []
})
export class HomePageCategories implements OnInit {
  private categoryService = inject(CategoryService);

  categories = signal<Category[]>([
    { idCategoria: 1, nome: "Entretenimento", urlImagem: "/assets/images/category_entretenimento.jpg" },
    { idCategoria: 2, nome: "Educação e Negócios", urlImagem: "assets/images/category_educacao.jpg" },
    { idCategoria: 3, nome: "Arte e Cultura", urlImagem: "/assets/images/category_arteECultura.jpg" },
    { idCategoria: 4, nome: "Esportes e Fitness", urlImagem: "/assets/images/category_esportesEFitness.jpg" },
    { idCategoria: 5, nome: "Tecnologia e Inovação", urlImagem: "/assets/images/category_tecnologiaEInovacao.jpg" },
    { idCategoria: 6, nome: "Viagens e Aventuras", urlImagem: "/assets/images/category_viagensEAventuras.jpg" },
  ]);

  ngOnInit(): void {
    this.categoryService.findAll().subscribe({
      next: categories => {
        this.categories.set(categories);
      },
      error: err => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }
}
