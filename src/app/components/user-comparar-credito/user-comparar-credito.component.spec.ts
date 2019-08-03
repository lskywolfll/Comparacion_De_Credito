import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompararCreditoComponent } from './user-comparar-credito.component';

describe('UserCompararCreditoComponent', () => {
  let component: UserCompararCreditoComponent;
  let fixture: ComponentFixture<UserCompararCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompararCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompararCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
