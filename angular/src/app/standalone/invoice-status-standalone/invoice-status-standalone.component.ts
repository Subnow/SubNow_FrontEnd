import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CheckoutService } from '@proxy/token';
import { LanguagesAndStylesService } from '../../custom-core/services/language-styles.service';
import { SessionStateService } from '@abp/ng.core';
import { CheckoutDetailsDto } from '@proxy/checkout-tokens';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-invoice-status-standalone',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './invoice-status-standalone.component.html',
  styleUrl: './invoice-status-standalone.component.scss'
})
export class InvoiceStatusStandaloneComponent implements OnInit {
  paymentToken: string;
  token: string;
  id: string;
  status: string;
  amount: number;
  message: string;
  paymentInfo:CheckoutDetailsDto;
  currentLang$ = this._languagesAndStylesService.getCurrentLanguage();
  constructor(
    private route: ActivatedRoute,
    private _checkoutService:CheckoutService,
    private readonly _languagesAndStylesService: LanguagesAndStylesService,
    private sessionStateService: SessionStateService,
    ) {
  }
  ngOnInit(): void {
    this.getToken();
    this.getPaymentInfo();
    this.setPreferredLanguage();
    // Retrieve the token from the route parameters
    this.token = this.route.snapshot.paramMap.get('token');

    // Retrieve query parameters
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.status = params['status'];
      this.amount = +params['amount']; // Convert amount to number
      this.message = params['message'];
    });

    // For debugging purposes, you can log the values
    console.log('Token:', this.token);
    console.log('ID:', this.id);
    console.log('Status:', this.status);
    console.log('Amount:', this.amount);
    console.log('Message:', this.message);
  }

  getToken():void{
    this.route.paramMap.subscribe(params => {
      this.paymentToken = params.get('token');
      console.log('token ====>' , this.paymentToken)
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
