import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationPageLogin } from './authentication-page-login';

describe('AuthenticationPageLogin', () => {
  let component: AuthenticationPageLogin;
  let fixture: ComponentFixture<AuthenticationPageLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationPageLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationPageLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
