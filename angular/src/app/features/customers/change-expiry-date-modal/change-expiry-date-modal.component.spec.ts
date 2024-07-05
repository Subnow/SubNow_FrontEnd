import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeExpiryDateModalComponent } from './change-expiry-date-modal.component';

describe('ChangeExpiryDateModalComponent', () => {
  let component: ChangeExpiryDateModalComponent;
  let fixture: ComponentFixture<ChangeExpiryDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeExpiryDateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeExpiryDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
