import { Component, inject, Input, Output, EventEmitter, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDto } from '@proxy/customers';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrl: './customer-modal.component.scss'
})
export class CustomerModalComponent implements OnInit{
  activeModal = inject(NgbActiveModal);
  @Input() customer?: CustomerDto;
  @Input() isEdit?: boolean;
  @Output() formValid?:boolean;
  isChildFormValid: boolean;
  @ViewChild(AddEditCustomerComponent) addEditCustomerComponentChild: AddEditCustomerComponent;
constructor(private cd: ChangeDetectorRef) {

}
  public handleFormValidity(isValid: boolean) {
    this.isChildFormValid = isValid
    this.cd.detectChanges();
}
  closeModal() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    console.log(this.isChildFormValid)
    console.log('this.addEditCustomerComponentChild.isEdit', this.isEdit)
  }

  createEdit(): void {
      this.addEditCustomerComponentChild.createEditCustomer();

}

  public checkFormValidation(data:boolean): void {
    console.log('Picked data: ', data);
  }
}
