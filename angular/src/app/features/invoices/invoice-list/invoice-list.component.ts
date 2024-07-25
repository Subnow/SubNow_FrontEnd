import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent implements OnInit{
  form: FormGroup;
  invoiceList:any;
  isSortInvoice:boolean = false;
  isSortCustomer:boolean = false;
  customerList:[] = [];
  statusList: any;
  eventList:any;


  constructor(
    public _fb: FormBuilder
  ) {
    this.invoiceList = [
      {
        id: 1,
        invoice: "INV-3066",
        customer: "CustomerName",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00",
        status: "Paid",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 2,
        invoice: "INV-3065",
        customer: "Capsule",
        customerKey: "Customerkey",
        eventType: "Change",
        plan: "Premium_Plan",
        totalDue: "29.00 ",
        status: "Cancelled",
        createdBy: "Mohammed Salem",
        invoiceExpiry: "Feb 22, 2022"
      },
      {
        id: 3,
        invoice: "INV-3064",
        customer: "Command+R",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Unpaid",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 4,
        invoice: "INV-3063",
        customer: "Ahmad",
        email: "Ahmad@gmail.com",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Paid",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 5,
        invoice: "INV-3062",
        customer: "Layers",
        email: "getlayers.io",
        customerKey: "Customerkey",
        eventType: "Change",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Expired",
        createdBy: "Paylink",
        invoiceExpiry: "Feb 22, 2022"
      },
      {
        id: 6,
        invoice: "INV-3061",
        customer: "Quotient",
        email: "quotient.co",
        customerKey: "Customerkey",
        eventType: "Addon",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Expired",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 7,
        invoice: "INV-3060",
        customer: "Sisyphus",
        email: "sisyphus.co",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Cancelled",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 8,
        invoice: "INV-3065",
        customer: "Capsule",
        customerKey: "Customerkey",
        eventType: "Change",
        plan: "Premium_Plan",
        totalDue: "29.00 ",
        status: "Cancelled",
        createdBy: "Mohammed Salem",
        invoiceExpiry: "Feb 22, 2022"
      },
      {
        id: 9,
        invoice: "INV-3066",
        customer: "CustomerName",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00",
        status: "Paid",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 10,
        invoice: "INV-3064",
        customer: "Command+R",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Unpaid",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 11,
        invoice: "INV-3063",
        customer: "Ahmad",
        email: "Ahmad@gmail.com",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Paid",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 12,
        invoice: "INV-3062",
        customer: "Layers",
        email: "getlayers.io",
        customerKey: "Customerkey",
        eventType: "Change",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Expired",
        createdBy: "Paylink",
        invoiceExpiry: "Feb 22, 2022"
      },
      {
        id: 13,
        invoice: "INV-3061",
        customer: "Quotient",
        email: "quotient.co",
        customerKey: "Customerkey",
        eventType: "Addon",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Expired",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
      {
        id: 14,
        invoice: "INV-3060",
        customer: "Sisyphus",
        email: "sisyphus.co",
        customerKey: "Customerkey",
        eventType: "Renew",
        plan: "Starter_Plan",
        totalDue: "29.00 ",
        status: "Cancelled",
        createdBy: "System",
        invoiceExpiry: "Feb 22, 2025"
      },
    ];
    this.statusList = [
      {
        value:1,
        name:"All"
      },
      {
        value:2,
        name:"Paid",
      },
      {
        value:3,
        name:"Cancelled",
      },
      {
        value:4,
        name:"Unpaid",
      },{
        value:5,
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

}
