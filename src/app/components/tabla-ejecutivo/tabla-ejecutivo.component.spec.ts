import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEjecutivoComponent } from './tabla-ejecutivo.component';

describe('TablaEjecutivoComponent', () => {
  let component: TablaEjecutivoComponent;
  let fixture: ComponentFixture<TablaEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
