import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadInvoicePdfComponent } from './download-invoice-pdf.component';

describe('DownloadInvoicePdfComponent', () => {
  let component: DownloadInvoicePdfComponent;
  let fixture: ComponentFixture<DownloadInvoicePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadInvoicePdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadInvoicePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
