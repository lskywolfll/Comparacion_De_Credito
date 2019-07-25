import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEjecutivoComponent } from './home-ejecutivo.component';

describe('HomeEjecutivoComponent', () => {
  let component: HomeEjecutivoComponent;
  let fixture: ComponentFixture<HomeEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
