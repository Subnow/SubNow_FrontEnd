import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
import { InvoicePdfDto, PaymentService } from '@proxy/payments';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-download-invoice-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-invoice-pdf.component.html',
  styleUrl: './download-invoice-pdf.component.scss'
})
export class DownloadInvoicePdfComponent implements OnInit{
  invoiceId:string = '';
  invoicePdfDetails:InvoicePdfDto;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _invoicePdf : PaymentService
  ) {

  }

  ngOnInit(): void {
    this.invoiceId = this._activatedRoute.snapshot.paramMap.get('id');
    this.getInvoicePdfInfo();
  }

  getInvoicePdfInfo():void{
    document.body.classList.add('loader');
    this._invoicePdf.getInvoicePDFDetails(this.invoiceId)
      .pipe(
        finalize(() => document.body.classList.remove('loader'))
      )
      .subscribe(
        (res) => {
          this.invoicePdfDetails = res;
          setTimeout(() => {
            this.downloadPDF();
          }, 1000); // Adjust the delay as needed
         // this.downloadPDF(); // Call downloadPDF method here
        }
      );

  }
  downloadPDF() {
    const element = document.getElementById('invoice') as HTMLElement;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgHeight = canvas.height * 208 / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, 208, imgHeight);
      pdf.save('invoice.pdf');
    });
  }


}
