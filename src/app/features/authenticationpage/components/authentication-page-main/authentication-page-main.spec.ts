import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationPageMain } from './authentication-page-main';

describe('AuthenticationPageMain', () => {
  let component: AuthenticationPageMain;
  let fixture: ComponentFixture<AuthenticationPageMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationPageMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationPageMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
