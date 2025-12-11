import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPageFooter } from './generic-page-footer';

describe('GenericPageFooter', () => {
  let component: GenericPageFooter;
  let fixture: ComponentFixture<GenericPageFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPageFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPageFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
