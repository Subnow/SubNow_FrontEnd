import { Component, OnInit } from '@angular/core';
import { CompanyBrandingDto, CompanyService } from '@proxy/companies';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '@proxy/token';
import { CheckoutDetailsDto } from '@proxy/checkout-tokens';
import { LocalizationService, SessionStateService } from '@abp/ng.core';
import { finalize } from 'rxjs';
import { LanguagesAndStylesService } from '../../custom-core/services/language-styles.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  companyBranding:CompanyBrandingDto = {};
  paymentToken: string;
  paymentInfo:CheckoutDetailsDto;
  currentLang$ = this._languagesAndStylesService.getCurrentLanguage();
  constructor(
    private _companyBranding:CompanyService,
    private route: ActivatedRoute,
    private _checkoutService:CheckoutService,
    private readonly _languagesAndStylesService: LanguagesAndStylesService,
    private sessionStateService: SessionStateService,
  ) {

  }

  ngOnInit(): void {
    this.getToken();
    this.getPaymentInfo();
    this.setPreferredLanguage(); // Call this method after paymentInfo is set

  }
  getToken():void{
    this.route.paramMap.subscribe(params => {
      this.paymentToken = params.get('id');
      console.log(this.paymentToken);
    });
  }
  getPaymentInfo(): void {
    document.body.classList.add('loader');
    this._checkoutService.getCheckoutDetails(this.paymentToken)
      .pipe(
        finalize(() => document.body.classList.remove('loader'))
      )
      .subscribe(
        (res) => {
          this.paymentInfo = res;
        }
      );
  }
  setPreferredLanguage(): void {
    if (this.paymentInfo && this.paymentInfo.preferredLanguage) {
      if (this.paymentInfo.preferredLanguage === 'Arabic') {
        this.sessionStateService.setLanguage('ar');
      } else {
        this.sessionStateService.setLanguage('en');
      }
    }
  }
  onChangeLang(lang:string) {
    this.sessionStateService.setLanguage(lang);
  }
}

