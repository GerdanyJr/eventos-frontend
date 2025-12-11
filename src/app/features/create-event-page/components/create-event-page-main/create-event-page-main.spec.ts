import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPageMain } from './create-event-page-main';

describe('CreateEventPageMain', () => {
  let component: CreateEventPageMain;
  let fixture: ComponentFixture<CreateEventPageMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEventPageMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEventPageMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
