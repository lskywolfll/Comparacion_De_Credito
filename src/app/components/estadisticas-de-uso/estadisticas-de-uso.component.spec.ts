import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasDeUsoComponent } from './estadisticas-de-uso.component';

describe('EstadisticasDeUsoComponent', () => {
  let component: EstadisticasDeUsoComponent;
  let fixture: ComponentFixture<EstadisticasDeUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasDeUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
