import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-download-invoice-pdf',
  standalone: true,
  imports: [],
  templateUrl: './download-invoice-pdf.component.html',
  styleUrl: './download-invoice-pdf.component.scss'
})
export class DownloadInvoicePdfComponent {

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
