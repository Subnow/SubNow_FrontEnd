import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewInvoiceDetailsComponent } from '../view-invoice-details/view-invoice-details.component';
import { InvoiceDto, InvoiceFilterDto, PaymentService } from '@proxy/payments';
import { CustomerDto } from '@proxy/customers';
import { AddEditCategoriesModalComponent } from '../../plans/add-edit-categories-modal/add-edit-categories-modal.component';

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
  customerList:[] = [];
  statusList: any;
  eventList:any;
  totalPages: number;

  page = 1;
  pageSize = 6;
  totalInvoices: number;

  constructor(
    public _fb: FormBuilder,
    private invoiceServices:PaymentService
  ) {
    this.statusList = [
      {
        value:"All",
        name:"All"
      },
      {
        value:"PAID",
        name:"Paid",
      },
      {
        value:"CANCELLED",
        name:"Cancelled",
      },
      {
        value:"UNPAID",
        name:"Unpaid",
      },{
        value:"EXPIRED",
        name:"Expired"
      }

    ];
    this.eventList = [
      {
        value:1,
        name:"All",
      },
      {
        value:2,
        name:"Renew",
      },
      {
        value:3,
        name:"Change",
      },
      {
        value:4,
        name:"Addon",
      }
    ]
  }

  ngOnInit(): void {
    // this.updatePagedInvoiceList();
    this.getInvoiceList();
  }
  onChangeFilter($event: Event): void {

  }


  editInvoice(): void {

  }
  sortData(type:string): void {

  }
  notSort(type:string): void {

  }
  getClassBasedOnStatus(name: string): string {
    switch (name) {
      case 'Paid':
        return 'text-success';
      case 'Cancelled':
        return 'text-danger';
      case 'Unpaid':
        return 'text-warning';
      case 'Expired':
        return 'text-default';
      default:
        return 'text-primary';
    }
  }
  getClassBasedOnEvent(name: string): string {
    switch (name) {
      case 'Renew':
        return 'text-success';
      case 'Change':
        return 'text-info';
      case 'Addon':
        return 'text-success';
      default:
        return 'text-primary';
    }
  }

  getInvoiceList(): void {
    const skipCount = this.pageSize * (this.page - 1);
    this.invoiceServices.getInvoices({ skipCount, maxResultCount: this.pageSize }).subscribe((res) => {
      this.invoiceList = res.items;
      this.totalInvoices = res.totalCount; // Assuming API returns total count of items
      console.log('total ==>' , this.totalInvoices)
      this.updatePagedInvoiceList();
    });
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

