import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanySettingsModalComponent } from './company-settings-modal/company-settings-modal.component';
import { CompanyDto, CompanyService } from '@proxy/companies';
import { CompanyBrandingModalComponent } from './company-branding-modal/company-branding-modal.component';

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
    })
  }

  updateCompanyBranding(): void {
    const modal = this.modalService.open(CompanyBrandingModalComponent, { fullscreen: true ,windowClass:"custom-modal"});
  }
}
