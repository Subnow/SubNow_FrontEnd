import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDto, CustomerService } from '@proxy/customers';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';
import { PlanService } from '@proxy/plans';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerStatus } from '@proxy/enums';

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

  constructor(
    private _customerService:CustomerService,
    private _planServices:PlanService,
    public _fb: FormBuilder,
  ) {

  }
  ngOnInit(): void {
    this.getCustomerList();
    this.getPlanName();
    this.initForm()
  }
initForm(){
  this.form = this._fb.group({
    status: [null],
    plan: ['All'],
    searchTerm: ['']
  })
}
  onChangeFilter($event){
    this._customerService.getFilteredCustomers(this?.form.value).subscribe((res=>{
      this.customerList = res;
    }))
  }
  sortData(){
    this._customerService.getList({sorting: 'name',maxResultCount: 1000}).subscribe((res=>{
      this.customerList = res?.items;
      this.isSort = true;
    }))
  }
  unSortdata(): void {
    this._customerService.getList({maxResultCount: 1000}).subscribe((res=>{
      this.customerList = res?.items;
      this.isSort = false;
    }))
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
  this._customerService.getList({maxResultCount: 1000}).subscribe((res=>{
    this.customerList = res?.items;
    this.totalCustomer = res?.totalCount
  }))
}
addEditCustomer(customer?:CustomerDto,index?:number,type?:string): void {
  if (type === 'edit'){
    this.isEdit = true
  }else {
    this.isEdit = false;
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

  const modal = this.modalService.open(AddEditCustomerComponent, { fullscreen: true, windowClass: 'custom-modal' });
  (modal.componentInstance as AddEditCustomerComponent).customer = customerObj;
  (modal.componentInstance as AddEditCustomerComponent).isEdit = this.isEdit;

  const reloadPlanList = modal.result.then((result =>{
    this.getCustomerList();
  }))

  const closeSubscription = modal.closed.subscribe((updateCustomer:CustomerDto)=>{
    if (updateCustomer){
      if (typeof index === 'number') {
        this.customerList?.splice(index, 1, updateCustomer);
        this.isEdit = true;
      } else {
        this.customerList?.push(this.customerList as any);
      }
    }
  })
  closeSubscription.unsubscribe();
}


}
