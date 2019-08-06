import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressoPage } from './espresso.page';

describe('EspressoPage', () => {
  let component: EspressoPage;
  let fixture: ComponentFixture<EspressoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspressoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspressoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
