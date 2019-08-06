import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CappuccinoPage } from './cappuccino.page';

describe('CappuccinoPage', () => {
  let component: CappuccinoPage;
  let fixture: ComponentFixture<CappuccinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CappuccinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CappuccinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
