import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStandaloneComponent } from './payment-standalone.component';

describe('PaymentStandaloneComponent', () => {
  let component: PaymentStandaloneComponent;
  let fixture: ComponentFixture<PaymentStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
