import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDto, CustomerService } from '@proxy/customers';
import { PlanService } from '@proxy/plans';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModalComponent } from '../customer-modal/customer-modal.component';
import { InvoiceDto } from '@proxy/payments';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{
  private modalService = inject(NgbModal);
  customerList:CustomerDto[] =[];
  isEdit:boolean = false;
  totalCustomer;
  planList = [];
  statusList = [];
  form: FormGroup;
  isSort:boolean = false;
  pagedCustomerList: CustomerDto[] = [];

  page = 1;
  pageSize = 6;
  sorting = '';

  constructor(
    private _customerService:CustomerService,
    private _planServices:PlanService,
    public _fb: FormBuilder,
  ) {

  }
  ngOnInit(): void {
    this.getCustomerList();
    this.getPlanName();
    this.initForm();
    this.form.valueChanges.subscribe(() => this.onChangeFilter());

  }
initForm(){
  this.form = this._fb.group({
    status: [null],
    plan: ['All'],
    searchTerm: ['']
  })
}

  sortData(type: string): void {
    if (type === 'name') {
      this.sorting = this.isSort ? 'name' : 'name';
      this.isSort = true;
    }
    this.getCustomerList();
  }

  notSort(type: string): void {
    this.sorting = '';
    if (type === 'name') {
      this.isSort = false;
    }
    this.getCustomerList();
  }


getPlanName(){
  this._planServices.getPlanName().subscribe((res=>{
    this.planList = res;
    this.planList.unshift(
      {
        name:'All'
      }
    )
  }))
}
getCustomerList(){
  const skipCount = this.pageSize * (this.page - 1);

  this._customerService.getList({
    skipCount,
    maxResultCount: this.pageSize,
    sorting: this.sorting
    }
  ).subscribe((res=>{
    this.customerList = res?.items;
    this.totalCustomer = res?.totalCount;
    this.updatePagedCustomerList();

  }))
}
addEditCustomer(customer?:CustomerDto,index?:number,type?:string): void {

  if (type === 'edit'){
    this.isEdit = true;
    console.log('edit' ,this.isEdit)
  }else {
    this.isEdit = false;
    console.log('edit' ,this.isEdit)

  }
  const customerObj = {
    id:customer?.id,
    customerKey: customer?.customerKey,
    name: customer?.name,
    email: customer?.email,
    phone: customer?.phone,
    description: customer?.description,
    customerStatus: customer?.customerStatus,
    photo: customer?.photo,
    customerSince: customer?.customerSince,
    joinedSubnow: customer?.joinedSubnow,
    preferredLanguage: customer?.preferredLanguage,
    vatid: customer?.vatid,
    companyRegistryNumber: customer?.companyRegistryNumber,
    address: customer?.address,
    isBusiness: customer?.isBusiness,
    city: customer?.city,
    stateProvince: customer?.stateProvince,
    countryId: customer?.countryId,
    tags: customer?.tags,
    customerSource: customer?.customerSource
  }

  const modal = this.modalService.open(CustomerModalComponent, { fullscreen: true, windowClass: 'custom-modal' });
  (modal.componentInstance as CustomerModalComponent).customer = customerObj;
  (modal.componentInstance as CustomerModalComponent).isEdit = this.isEdit;

  const reloadPlanList = modal.result.then((result =>{
    this.getCustomerList();
  }))

  const closeSubscription = modal.closed.subscribe((updateCustomer:CustomerDto)=>{
    if (updateCustomer){
      if (typeof index === 'number') {
        this.customerList?.splice(index, 1, updateCustomer);
      } else {
        this.customerList?.push(this.customerList as any);
      }
    }
  })
  closeSubscription.unsubscribe();
}

  onPageChange(page: number): void {
    this.page = page;
    this.getCustomerList();
  }
  updatePagedCustomerList(): void {
    this.pagedCustomerList = this.customerList.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  onChangeFilter(): void {
    this.page = 1;
    this._customerService.getFilteredCustomers(this.form.value).subscribe((res)=>{
      this.customerList = res;
    })  }
}
