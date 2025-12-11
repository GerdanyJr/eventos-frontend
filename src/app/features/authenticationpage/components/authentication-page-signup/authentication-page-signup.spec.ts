import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationPageSignUp } from './authentication-page-signup';

describe('AuthenticationPageSignUp', () => {
  let component: AuthenticationPageSignUp;
  let fixture: ComponentFixture<AuthenticationPageSignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationPageSignUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationPageSignUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
