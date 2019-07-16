import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivoComponent } from './ejecutivo.component';

describe('EjecutivoComponent', () => {
  let component: EjecutivoComponent;
  let fixture: ComponentFixture<EjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
