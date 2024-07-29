import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyBrandingModalComponent } from '../../setup/company-branding-modal/company-branding-modal.component';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-view-invoice-details',
  templateUrl: './view-invoice-details.component.html',
  styleUrl: './view-invoice-details.component.scss'
})
export class ViewInvoiceDetailsComponent implements OnInit{
  constructor(
    private clipboard: Clipboard,
  )
  {
  }
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    console.log('test')
  }

  copyActivationInvoice(text): void {
    this.clipboard.copy(text);
  }

}
