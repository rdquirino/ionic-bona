import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaPage } from './resposta.page';

describe('RespostaPage', () => {
  let component: RespostaPage;
  let fixture: ComponentFixture<RespostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
