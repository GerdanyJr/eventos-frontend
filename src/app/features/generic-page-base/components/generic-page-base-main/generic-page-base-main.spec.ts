import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPageBaseMain } from './generic-page-base-main';

describe('GenericPageBaseMain', () => {
  let component: GenericPageBaseMain;
  let fixture: ComponentFixture<GenericPageBaseMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPageBaseMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPageBaseMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
