import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoyasarService {
  private apiUrl = 'https://api.moyasar.com/v1/payments';

  constructor(private http: HttpClient) {}

  createPayment(paymentData: any) {
    return this.http.post(this.apiUrl, paymentData);
  }
}
