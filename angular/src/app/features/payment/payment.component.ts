import { Component, OnInit } from '@angular/core';
import { CompanyBrandingDto, CompanyService } from '@proxy/companies';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  companyBranding:CompanyBrandingDto = {};

  constructor(private _companyBranding:CompanyService) {
  }

  ngOnInit(): void {
      this.getCompanyBranding()
  }

  getCompanyBranding():void{
    this._companyBranding.getBranding().subscribe((res)=>{
      this.companyBranding = res;
    })
  }
}
