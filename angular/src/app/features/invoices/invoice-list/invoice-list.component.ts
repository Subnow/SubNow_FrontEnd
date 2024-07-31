import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewInvoiceDetailsComponent } from '../view-invoice-details/view-invoice-details.component';
import { InvoiceDto, PaymentService } from '@proxy/payments';
import { CustomerService } from '@proxy/customers';
import { SubscriptionActivityTypeService } from '@proxy/look-ups';
import { LocalizationService } from '@abp/ng.core';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  private modalService = inject(NgbModal);

  form: FormGroup;
  invoiceList: InvoiceDto[] = [];
  pagedInvoiceList: InvoiceDto[] = [];
  isSortInvoice = false;
  isSortCustomer = false;
  customerList: any;
  statusList: any[];
  eventList: any[];
  totalPages: number;

  page = 1;
  pageSize = 6;
  totalInvoices: number;
  sorting = ''; // Variable to store sorting criteria


  constructor(
    public _fb: FormBuilder,
    private _invoiceServices: PaymentService,
    private _subscriptionServiceActivity: SubscriptionActivityTypeService,
    private localizationService: LocalizationService,
    private _customerService: CustomerService
  ) {
    this.statusList = [
      {
        id: 'All',
        name: this.localizationService.instant('General::All'),
      },
      {
        id: 'PAID',
        name: this.localizationService.instant('General::paid'),
      },
      {
        id: "CANCELLED",
        name: this.localizationService.instant('General::cancelled'),
      },
      {
        id: "UNPAID",
        name: this.localizationService.instant('General::unpaid'),
      },
      {
        id: "EXPIRED",
        name: this.localizationService.instant('General::expired'),
      }
    ];
  }

  ngOnInit(): void {
    this.initForm();
    this.getEventType();
    this.getInvoiceList();
    this.getCustomerList();
    this.form.valueChanges.subscribe(() => this.onChangeFilter());

  }

  initForm(): void {
    this.form = this._fb.group({
      id: [''],
      customerName: [null],
      status: [null],
      eventType: [null]
    });
  }

  onChangeFilter(): void {
    this.page = 1; // Reset to the first page whenever filters change
    this.getInvoiceList();
  }
  sortData(type: string): void {
    if (type === 'invoiceNumber') {
      this.sorting = this.isSortInvoice ? 'invoiceNumber' : 'invoiceNumber';
      this.isSortInvoice = !this.isSortInvoice;
      this.isSortCustomer = false;
    } else if (type === 'customerName') {
      this.sorting = this.isSortCustomer ? 'customerName' : 'customerName';
      this.isSortCustomer = !this.isSortCustomer;
      this.isSortInvoice = false;
    }
    this.getInvoiceList();
  }

  notSort(type: string): void {
    this.sorting = '';
    if (type === 'invoiceNumber') {
      this.isSortInvoice = false;
    } else if (type === 'customerName') {
      this.isSortCustomer = false;
    }
    this.getInvoiceList();
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

  getClassBasedOnEvent(id: string): string {
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
    const { id, customerName, status, eventType } = this.form.value;

    // const filter = {
    //   id: this.form.get('id').value,
    //   customerName: this.form.get('customerName').value === 'All' ? null : this.form.get('customerName').value,
    //     customerName !== 'All' ? customerName : null,
    //   status: this.form.get('status').value,
    //   eventType: this.form.get('eventType').value
    // }

    this._invoiceServices.getInvoices({ skipCount,
      maxResultCount: this.pageSize,
      id: id || '',
      customerName: customerName !== 'All' ? customerName : null,
      status: status !== 'All' ? status : null,
      eventType: eventType !== 'All' ? eventType : null,
      sorting: this.sorting // Pass the sorting criteria to the API

    }).subscribe((res) => {
      this.invoiceList = res.items;
      this.totalInvoices = res.totalCount; // Assuming API returns total count of items
      console.log('total ==>', this.totalInvoices);
      this.updatePagedInvoiceList();
    });
  }

  getEventType(): void {
    this._subscriptionServiceActivity.getAll().subscribe((res) => {
      this.eventList = res.map(event => {
        return {
          ...event,
          name: this.localizationService.instant(`General::${event.name}`)
        };
      });
      this.eventList.unshift({
        id:"All",
        name: this.localizationService.instant('General::All')
      });
    });
  }

  getCustomerList(): void {
    this._customerService.getCompanyCustomers().subscribe((res) => {
      this.customerList = res;
      this.customerList.unshift(
        {
          id:"All",
          name:this.localizationService.instant('General::All')
        }
      )
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

  viewInvoiceDetails(id: string): void {
    const modal = this.modalService.open(ViewInvoiceDetailsComponent, { fullscreen: true, windowClass: 'custom-modal-right' });
    (modal.componentInstance as ViewInvoiceDetailsComponent).id = id;
  }
}
