import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceStatusStandaloneComponent } from './invoice-status-standalone.component';

describe('InvoiceStatusStandaloneComponent', () => {
  let component: InvoiceStatusStandaloneComponent;
  let fixture: ComponentFixture<InvoiceStatusStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceStatusStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceStatusStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
