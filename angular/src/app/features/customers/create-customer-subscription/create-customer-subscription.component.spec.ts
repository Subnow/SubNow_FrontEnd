import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerSubscriptionComponent } from './create-customer-subscription.component';

describe('CreateCustomerSubscriptionComponent', () => {
  let component: CreateCustomerSubscriptionComponent;
  let fixture: ComponentFixture<CreateCustomerSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCustomerSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCustomerSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
