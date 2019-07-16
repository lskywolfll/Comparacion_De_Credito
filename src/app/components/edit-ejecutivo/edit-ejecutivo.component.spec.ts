import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEjecutivoComponent } from './edit-ejecutivo.component';

describe('EditEjecutivoComponent', () => {
  let component: EditEjecutivoComponent;
  let fixture: ComponentFixture<EditEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
