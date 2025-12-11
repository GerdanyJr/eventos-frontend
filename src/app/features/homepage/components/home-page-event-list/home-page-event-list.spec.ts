import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEventList } from './home-page-event-list';

describe('HomePageEventList', () => {
  let component: HomePageEventList;
  let fixture: ComponentFixture<HomePageEventList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageEventList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageEventList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
