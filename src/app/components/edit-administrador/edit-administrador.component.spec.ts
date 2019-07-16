import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdministradorComponent } from './edit-administrador.component';

describe('EditAdministradorComponent', () => {
  let component: EditAdministradorComponent;
  let fixture: ComponentFixture<EditAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
