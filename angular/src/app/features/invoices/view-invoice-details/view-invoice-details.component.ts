import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Clipboard } from '@angular/cdk/clipboard';
import { GetInvoiceDto, PaymentService } from '@proxy/payments';
import { AddEditCustomerComponent } from '../../customers/add-edit-customer/add-edit-customer.component';

@Component({
  selector: 'app-view-invoice-details',
  templateUrl: './view-invoice-details.component.html',
  styleUrl: './view-invoice-details.component.scss'
})
export class ViewInvoiceDetailsComponent implements OnInit{
  private modalService = inject(NgbModal);
  activeModal = inject(NgbActiveModal);
  @Input() id?: string;
  invoiceDetails:GetInvoiceDto = {};
  isDownload = false;
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

  openCustomerDetails(customerId: string): void {
    const modal = this.modalService.open(AddEditCustomerComponent, { fullscreen: true, windowClass: 'custom-modal' });
    (modal.componentInstance as AddEditCustomerComponent).customerId = customerId;
    (modal.componentInstance as AddEditCustomerComponent).isMoreDetails = true;

  }
  closeModal() {
    this.activeModal.close();
  }


  downloadPDF() {

  }
}
