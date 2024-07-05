import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionDto, SubscriptionService } from '@proxy/subscriptions';
import { ToastrService } from 'ngx-toastr';
import { LocalizationService } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { expiryDateValidator, startDateValidator } from '../../../shared/utils/customValidation';

@Component({
  selector: 'app-change-expiry-date-modal',
  templateUrl: './change-expiry-date-modal.component.html',
  styleUrl: './change-expiry-date-modal.component.scss'
})
export class ChangeExpiryDateModalComponent implements OnInit {
  form?: FormGroup;
  activeModal = inject(NgbActiveModal);
  subscription?:SubscriptionDto = {};
  constructor(
    private _toastr: ToastrService,
    public _fb: FormBuilder,
    private _subscriptionService: SubscriptionService,
    private _localizationService: LocalizationService,
    private datePipe: DatePipe

  ) {
}
  convertToISO8601(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toISOString();
  }
  updateExpiryDate(): void {
    const expiryDateObj = {
      id:this?.subscription?.id,
      newExpiryDate:this.convertToISO8601(this?.form.get('newExpiryDate').value)
    }
    this._subscriptionService.updateExpiryDate(expiryDateObj?.id,expiryDateObj?.newExpiryDate).subscribe(()=>{
      this._toastr.success(this._localizationService.instant('General::updateExpiryDateSuccessfully'), '', {
        timeOut: 1000,
      });
      this.closeModal();
    })
  }
  ngOnInit(): void {
    this.initForm();
    const startDateControl = this.form.get('startDate');
    const expiryDateControl = this.form.get('newExpiryDate');
    if (startDateControl && expiryDateControl) {
      startDateControl.setValidators([Validators.required, startDateValidator(expiryDateControl)]);
      expiryDateControl.setValidators([Validators.required, expiryDateValidator(startDateControl)]);
      startDateControl.updateValueAndValidity();
      expiryDateControl.updateValueAndValidity();
    }

  }
  initForm() {
    this.form = this._fb.group({
      startDate:[new Date(this?.subscription?.startDate)],
      newExpiryDate: [new Date(this?.subscription?.expiryDate), Validators.required],
      },
    )

  }

  closeModal() {
    this.activeModal.close();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}

