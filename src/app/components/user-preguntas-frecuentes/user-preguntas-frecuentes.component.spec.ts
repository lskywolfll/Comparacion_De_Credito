import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreguntasFrecuentesComponent } from './user-preguntas-frecuentes.component';

describe('UserPreguntasFrecuentesComponent', () => {
  let component: UserPreguntasFrecuentesComponent;
  let fixture: ComponentFixture<UserPreguntasFrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreguntasFrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
