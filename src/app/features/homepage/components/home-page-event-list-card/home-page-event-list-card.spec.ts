import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEventListCard } from './home-page-event-list-card';

describe('HomePageEventListCard', () => {
  let component: HomePageEventListCard;
  let fixture: ComponentFixture<HomePageEventListCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageEventListCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageEventListCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
