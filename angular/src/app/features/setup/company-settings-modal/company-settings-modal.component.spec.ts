import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsModalComponent } from './company-settings-modal.component';

describe('CompanySettingsModalComponent', () => {
  let component: CompanySettingsModalComponent;
  let fixture: ComponentFixture<CompanySettingsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanySettingsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanySettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
