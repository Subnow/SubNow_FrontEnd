import { Component, inject, OnInit } from '@angular/core';
import { UpdateCustomerSubscriptionComponent } from '../customers/update-customer-subscription/update-customer-subscription.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanySettingsModalComponent } from './company-settings-modal/company-settings-modal.component';
import { CompanyDto, CompanyService } from '@proxy/companies';
import { CountryDto, CountryService } from '@proxy/look-ups';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.scss'
})
export class SetupComponent implements OnInit{
  private modalService = inject(NgbModal);
  company:CompanyDto;

  constructor(
    private _companyService:CompanyService
  ) {
  }

  updateCompanySetting() {
      const modal = this.modalService.open(CompanySettingsModalComponent, { fullscreen: true ,windowClass:"custom-modal"});
  }

  ngOnInit() {
    this.getCompanySetting()
  }
  getCompanySetting():void{
    this._companyService.get().subscribe((res)=>{
      this.company = res;
      console.log("this ===>" , this.company)
    })

  }

}
