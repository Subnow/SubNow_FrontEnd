import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDto, CustomerService } from '@proxy/customers';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  private modalService = inject(NgbModal);
  customerList:CustomerDto[] =[];
  isEdit:boolean = false;

  constructor(private _customerService:CustomerService) {
    this.getCustomerList()
  }

  getCustomerList(){
    this._customerService.getList({maxResultCount: 1000}).subscribe((res=>{
      this.customerList = res?.items;
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
