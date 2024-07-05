import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerSubscriptionComponent } from './update-customer-subscription.component';

describe('UpdateCustomerSubscriptionComponent', () => {
  let component: UpdateCustomerSubscriptionComponent;
  let fixture: ComponentFixture<UpdateCustomerSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCustomerSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCustomerSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
