import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessRequerimentoComponent } from './sucess-requerimento.component';

describe('SucessRequerimentoComponent', () => {
  let component: SucessRequerimentoComponent;
  let fixture: ComponentFixture<SucessRequerimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessRequerimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessRequerimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
