import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBrandingModalComponent } from './company-branding-modal.component';

describe('CompanyBrandingModalComponent', () => {
  let component: CompanyBrandingModalComponent;
  let fixture: ComponentFixture<CompanyBrandingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyBrandingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyBrandingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
