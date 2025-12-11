import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPageDetails } from './create-event-page-details';

describe('CreateEventPageDetails', () => {
  let component: CreateEventPageDetails;
  let fixture: ComponentFixture<CreateEventPageDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEventPageDetails]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateEventPageDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
