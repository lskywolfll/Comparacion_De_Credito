import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasDeBancoComponent } from './tarjetas-de-banco.component';

describe('TarjetasDeBancoComponent', () => {
  let component: TarjetasDeBancoComponent;
  let fixture: ComponentFixture<TarjetasDeBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetasDeBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasDeBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
