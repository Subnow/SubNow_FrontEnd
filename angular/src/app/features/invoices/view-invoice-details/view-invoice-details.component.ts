import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyBrandingModalComponent } from '../../setup/company-branding-modal/company-branding-modal.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { PlanDto } from '@proxy/plans';
import { GetInvoiceDto, PaymentService } from '@proxy/payments';

@Component({
  selector: 'app-view-invoice-details',
  templateUrl: './view-invoice-details.component.html',
  styleUrl: './view-invoice-details.component.scss'
})
export class ViewInvoiceDetailsComponent implements OnInit{
  private modalService = inject(NgbModal);
  @Input() id?: string;
  invoiceDetails:GetInvoiceDto = {};
  constructor(
    private clipboard: Clipboard,
    private invoiceServices:PaymentService
  )
  {
  }
  ngOnInit(): void {
   this.getInvoiceDetails();
  }

  getInvoiceDetails() :void{
    this.invoiceServices.getInvoiceById(this.id).subscribe((res=>{
      this.invoiceDetails = res;
    }))
  }
  copyActivationInvoice(text): void {
    this.clipboard.copy(text);
  }

}
