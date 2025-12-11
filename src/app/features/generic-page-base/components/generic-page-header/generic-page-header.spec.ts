import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPageHeader } from './generic-page-header';

describe('GenericPageHeader', () => {
  let component: GenericPageHeader;
  let fixture: ComponentFixture<GenericPageHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPageHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPageHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
