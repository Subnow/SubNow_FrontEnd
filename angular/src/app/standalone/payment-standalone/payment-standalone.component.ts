import { Component, OnInit } from '@angular/core';
import { CheckoutDetailsDto } from '@proxy/checkout-tokens';
import { CheckoutService } from '@proxy/token';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesAndStylesService } from '../../custom-core/services/language-styles.service';
import { SessionStateService } from '@abp/ng.core';
import { finalize } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-payment-standalone',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './payment-standalone.component.html',
  styleUrl: './payment-standalone.component.scss'
})

export class PaymentStandaloneComponent implements OnInit {
  paymentToken: string;
  paymentInfo:CheckoutDetailsDto;
  currentLang$ = this._languagesAndStylesService.getCurrentLanguage();
  totalDue;
  token;
  constructor(
    private route: ActivatedRoute,
    private _checkoutService:CheckoutService,
    private readonly _languagesAndStylesService: LanguagesAndStylesService,
    private sessionStateService: SessionStateService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.getToken();
    this.getPaymentInfo();
    this.setPreferredLanguage();
    this.getSavedPayment();
  }
  getSavedPayment(): any {
    const paymentString = localStorage.getItem('payment');
    if (paymentString) {
      try {
        const payment = JSON.parse(paymentString);
        this.token = payment?.source?.token
        console.log('Retrieved payment:', payment);
        console.log(payment?.id)
        console.log(payment?.source?.token)
        console.log(payment?.status)

        return payment;
      } catch (error) {
        console.error('Error parsing saved payment:', error);
      }
    } else {
      console.log('No payment found in local storage.');
    }
    return null;
  }

  getToken():void{
    this.route.paramMap.subscribe(params => {
      this.paymentToken = params.get('token');
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
          this.totalDue = this.paymentInfo?.invoiceDetails?.totalDue;
          this.initMoyasar();
          // this.initMoyasarApplePay()
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
  initMoyasar(){
    Moyasar.init({
      element: '.mysr-form',
      amount: this.totalDue * 100,
      currency: 'SAR',
      description: 'Plan Payment',
      publishable_api_key: 'pk_test_TWv4ZSYSagFaFQkHivupxespwdHJLWxaPZ1QmTej',
      callback_url: `http://localhost:4200/invoice-status/${this.paymentToken}`,
      methods: ['creditcard'],
      credit_card: {
        save_card: true,
      },
      language:this.sessionStateService.getLanguage(),
      on_completed: (payment) => {
        return new Promise<void>((resolve, reject) => {
          try {
            // Convert the payment object to a string
            const paymentObj = JSON.stringify(payment) as any;
            // Save the stringified payment object in local storage
            localStorage.setItem('payment', paymentObj);
            console.log(paymentObj);
            resolve(); // Resolve the promise
          } catch (error) {
            console.error('Error saving payment:', error);
            reject(error); // Reject the promise with the error
          }
        });
      },
    })
  }
  // initMoyasarApplePay(){
  //   Moyasar.init({
  //     element: '.mysr-form-apple',
  //     amount: this.totalDue * 100,
  //     currency: 'SAR',
  //     description: 'Plan Payment',
  //     publishable_api_key: 'pk_test_AQpxBV31a29qhkhUYFYUFjhwllaDVrxSq5ydVNui',
  //     callback_url: `http://localhost:4200/invoice-status/${this.paymentToken}`,
  //     methods: ['applepay'],
  //     language:this.sessionStateService.getLanguage(),
  //     apple_pay: {
  //       country: 'SA',
  //       label: 'Awesome Cookie Store',
  //       validate_merchant_url: 'https://api.moyasar.com/v1/applepay/initiate',
  //     },
  //     on_completed: (payment) => {
  //       return new Promise<void>((resolve, reject) => {
  //         try {
  //           // Convert the payment object to a string
  //           const paymentObj = JSON.stringify(payment) as any;
  //           // Save the stringified payment object in local storage
  //           localStorage.setItem('payment', paymentObj);
  //           console.log(paymentObj);
  //           resolve(); // Resolve the promise
  //         } catch (error) {
  //           console.error('Error saving payment:', error);
  //           reject(error); // Reject the promise with the error
  //         }
  //       });
  //     },
  //   });
  // }
}
