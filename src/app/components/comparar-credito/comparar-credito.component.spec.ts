import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararCreditoComponent } from './comparar-credito.component';

describe('CompararCreditoComponent', () => {
  let component: CompararCreditoComponent;
  let fixture: ComponentFixture<CompararCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
