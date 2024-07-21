import { Component, OnInit } from '@angular/core';
import { CompanyBrandingDto, CompanyService } from '@proxy/companies';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '@proxy/token';
import { CheckoutDetailsDto } from '@proxy/checkout-tokens';
import { LocalizationService, SessionStateService } from '@abp/ng.core';
import { finalize } from 'rxjs';
import { LanguagesAndStylesService } from '../../custom-core/services/language-styles.service';
import { MoyasarService } from './moyasar.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  paymentToken: string;
  paymentInfo:CheckoutDetailsDto;
  currentLang$ = this._languagesAndStylesService.getCurrentLanguage();
  constructor(
    private route: ActivatedRoute,
    private _checkoutService:CheckoutService,
    private readonly _languagesAndStylesService: LanguagesAndStylesService,
    private sessionStateService: SessionStateService,
    private moyasarService: MoyasarService
  ) {

  }

  ngOnInit(): void {
    this.getToken();
    this.getPaymentInfo();
    this.setPreferredLanguage(); // Call this method after paymentInfo is set

    Moyasar.init({
      element: '.mysr-form',
      amount:'1000',
      currency: 'SAR',
      description: 'Coffee Order #1',
      publishable_api_key: 'pk_test_AQpxBV31a29qhkhUYFYUFjhwllaDVrxSq5ydVNui',
      callback_url: 'https://yourwebsite.com/thanks',
      methods: ['creditcard'],
      language: this.sessionStateService.getLanguage()
    });
    // Update placeholders after the form is initialized


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

  onSubmit() {
    const paymentData = {
      amount: 1000,
      currency: 'SAR',
      source: {
        type: 'creditcard',
        number: '4111111111111111',
        month: '12',
        year: '2023',
        cvc: '123',
        name: 'John Doe'
      },
      callback_url: 'https://yourwebsite.com/thanks'
    };

    this.moyasarService.createPayment(paymentData).subscribe(
      response => {
        console.log('Payment successful', response);
      },
      error => {
        console.error('Payment failed', error);
      }
    );
  }
}

