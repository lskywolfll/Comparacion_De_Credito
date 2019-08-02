import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivoCompararCreditoComponent } from './ejecutivo-comparar-credito.component';

describe('EjecutivoCompararCreditoComponent', () => {
  let component: EjecutivoCompararCreditoComponent;
  let fixture: ComponentFixture<EjecutivoCompararCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivoCompararCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivoCompararCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
