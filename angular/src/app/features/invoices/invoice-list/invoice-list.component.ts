import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
  form: FormGroup;
  invoiceList: [] = [];
  isSortInvoice:boolean = false;
  isSortCustomer:boolean = false;

  customerList:[] = [];
  statusList:[] = [];
  eventList:[] = [];

  constructor(
    public _fb: FormBuilder
  ) {
  }
  onChangeFilter($event: Event): void {

  }


  editInvoice(): void {

  }
  sortData(type:string): void {

  }
  notSort(type:string): void {

  }
}
