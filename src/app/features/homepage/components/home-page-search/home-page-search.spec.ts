import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSearch } from './home-page-search';

describe('HomePageSearch', () => {
  let component: HomePageSearch;
  let fixture: ComponentFixture<HomePageSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
