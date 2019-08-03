import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosUserComponent } from './quienes-somos-user.component';

describe('QuienesSomosUserComponent', () => {
  let component: QuienesSomosUserComponent;
  let fixture: ComponentFixture<QuienesSomosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienesSomosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesSomosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
