import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectosDeMejoraComponent } from './aspectos-de-mejora.component';

describe('AspectosDeMejoraComponent', () => {
  let component: AspectosDeMejoraComponent;
  let fixture: ComponentFixture<AspectosDeMejoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectosDeMejoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectosDeMejoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
