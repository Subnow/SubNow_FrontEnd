import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewInvoiceDetailsComponent } from '../view-invoice-details/view-invoice-details.component';
import { InvoiceDto, InvoiceFilterDto, PaymentService } from '@proxy/payments';
import { CustomerDto, CustomerService } from '@proxy/customers';
import { AddEditCategoriesModalComponent } from '../../plans/add-edit-categories-modal/add-edit-categories-modal.component';
import { SubscriptionService } from '@proxy/subscriptions';
import { SubscriptionActivityTypeService } from '@proxy/look-ups';
import { LocalizationService } from '@abp/ng.core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent implements OnInit{
  private modalService = inject(NgbModal);

  form: FormGroup;
  invoiceList: InvoiceDto[] = [];
  pagedInvoiceList: InvoiceDto[] = [];
  isSortInvoice:boolean = false;
  isSortCustomer:boolean = false;
  customerList:any;
  statusList: any;
  eventList:any;
  totalPages: number;

  page = 1;
  pageSize = 6;
  totalInvoices: number;

  constructor(
    public _fb: FormBuilder,
    private _invoiceServices:PaymentService,
    private _subscriptionServiceActivity:SubscriptionActivityTypeService,
    private localizationService: LocalizationService,
    private _customerService:CustomerService
  ) {
    this.statusList = [
      {
        id:'All',
        name:this.localizationService.instant('General::all'),
      },
      {
        id:'PAID',
        name:this.localizationService.instant('General::paid'),
      },
      {
        id:"CANCELLED",
        name:this.localizationService.instant('General::cancelled'),
      },
      {
        id:"UNPAID",
        name:this.localizationService.instant('General::unpaid'),
      },
      {
        id:"EXPIRED",
        name:this.localizationService.instant('General::expired'),
      }

    ];
  }

  ngOnInit(): void {
    this.getEventType();
    this.getInvoiceList();
    this.getCustomerList();
    this.initForm()
  }

  initForm(){
    this.form = this._fb.group({
      searchTerm: [''],
      customerName: ['All'],
      invoiceStatus: ['All'],
      eventType:['All']
    })
  }
  onChangeFilter($event: Event): void {

  }


  editInvoice(): void {

  }
  sortData(type:string): void {

  }
  notSort(type:string): void {

  }
  getClassBasedOnStatus(id: string): string {
    switch (id) {
      case 'PAID':
        return 'text-success';
      case 'CANCELLED':
        return 'text-danger';
      case 'UNPAID':
        return 'text-warning';
      case 'EXPIRED':
        return 'text-default';
      default:
        return 'text-primary';
    }
  }
  getClassBasedOnEvent(id:string) {
    switch (id) {
      case 'RENEW':
        return 'text-success';
      case 'CHANGE':
        return 'text-info';
      case 'ADDON':
        return 'text-success';
      case 'CANCEL':
        return 'text-danger';
      case 'DOWNGRADE':
        return 'text-danger';
      case 'UPGRADE':
        return 'text-success';
      default:
        return 'text-primary';
    }
  }

  getInvoiceList(): void {
    const skipCount = this.pageSize * (this.page - 1);
    this._invoiceServices.getInvoices({ skipCount, maxResultCount: this.pageSize }).subscribe((res) => {
      this.invoiceList = res.items;
      this.totalInvoices = res.totalCount; // Assuming API returns total count of items
      console.log('total ==>' , this.totalInvoices)
      this.updatePagedInvoiceList();
    });
  }
  getEventType():void{
    this._subscriptionServiceActivity.getAll().subscribe((res)=>{
      this.eventList = res;
    })
  }
  getCustomerList():void{
    this._customerService.getCompanyCustomers().subscribe((res)=>{
      this.customerList = res
    })
  }

  updatePagedInvoiceList(): void {
    this.pagedInvoiceList = this.invoiceList.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  onPageChange(page: number): void {
    this.page = page;
    this.getInvoiceList();
  }
  viewInvoiceDetails(id:string) : void {
    const modal = this.modalService.open(ViewInvoiceDetailsComponent, { fullscreen: true, windowClass: 'custom-modal-right' });
    (modal.componentInstance as ViewInvoiceDetailsComponent).id = id;

  }
}

