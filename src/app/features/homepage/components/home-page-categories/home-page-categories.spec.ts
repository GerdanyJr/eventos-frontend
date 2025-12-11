import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCategories } from './home-page-categories';

describe('HomePageCategories', () => {
  let component: HomePageCategories;
  let fixture: ComponentFixture<HomePageCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
