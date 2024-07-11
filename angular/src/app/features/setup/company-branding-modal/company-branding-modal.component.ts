import { Component, inject, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalizationService } from '@abp/ng.core';
import { ToastrService } from 'ngx-toastr';
import { CompanyBrandingDto, CompanyService, UpdateCompanyBrandingDto } from '@proxy/companies';
import { urlValidator, whatsappNumberValidator } from '../../../shared/utils/customValidation';

@Component({
  selector: 'app-company-branding-modal',
  templateUrl: './company-branding-modal.component.html',
  styleUrls: ['./company-branding-modal.component.scss']
})
export class CompanyBrandingModalComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  form: FormGroup;
  companyBranding: CompanyBrandingDto;
  backgroundColor: string = '';
  buttonsColor: string = '';
  errorMessage: any;
  defaultLogo: string = 'assets/images/icons/company-logo.png';


  constructor(
    public _fb: FormBuilder,
    private _localizationService: LocalizationService,
    private _toastr: ToastrService,
    private _companyService: CompanyService,
  ) {
    this.getCompanyBranding();
  }

  ngOnInit() {
    this.getCompanyBranding();
    this.initForm();
    this.updateForm();
  }

  getCompanyBranding(): void {
    this._companyService.getBranding().subscribe((res) => {
      this.companyBranding = res;
      this.updateForm();
    });
  }

  initForm() {
    this.form = this._fb.group({
      companyLogo: [''],
      backgroundColor: [''],
      buttonsColor: [''],
      xAccount: ['', urlValidator()],
      facebookAccount: ['', urlValidator()],
      instagramAccount: ['', urlValidator()],
      linkedinAccount: ['', urlValidator()],
      whatsappNumber: ['', whatsappNumberValidator()],
      supportLink: ['', urlValidator()],
      privacyPolicyUrl: ['', urlValidator()],
      termsOfServiceUrl: ['', urlValidator()],
      subdomain: [{ value: '', disabled: true }]
    });
  }

  updateForm() {
    this.form.patchValue({
      companyLogo: this.companyBranding?.companyLogo || this.defaultLogo,
      backgroundColor: this.companyBranding?.backgroundColor,
      buttonsColor: this.companyBranding?.buttonsColor,
      xAccount: this.companyBranding?.xAccount,
      facebookAccount: this.companyBranding?.facebookAccount,
      instagramAccount: this.companyBranding?.instagramAccount,
      linkedinAccount:this.companyBranding?.linkedinAccount,
      whatsappNumber: this.companyBranding?.whatsappNumber,
      supportLink: this.companyBranding?.supportLink,
      privacyPolicyUrl: this.companyBranding?.privacyPolicyUrl,
      termsOfServiceUrl: this.companyBranding?.termsOfServiceUrl,
      subdomain: this.companyBranding?.subdomain
    });
  }

  editCompany(): void { }

  closeModal() {
    this.activeModal.close();
  }

  onBackgroundColorChange(color: string) {
    this.backgroundColor = color;
    this.form.get('backgroundColor').setValue(color);
  }

  onButtonsColorChange(color: string) {
    this.buttonsColor = color;
    this.form.get('buttonsColor').setValue(color);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64String = e.target.result.split(',')[1];
        this.form.get('companyLogo').setValue(base64String);
        this.companyBranding.companyLogo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  editCompanyBranding(): void {
    debugger
    if (this.form.invalid) {
      return;
    }

    const updateCompanyBrandingObj = {
      companyId: this.companyBranding?.companyId,
      companyLogo: this.form.get('companyLogo').value,
      backgroundColor: this.form.get('backgroundColor').value,
      buttonsColor: this.form.get('buttonsColor').value,
      xAccount: this.form.get('xAccount').value,
      facebookAccount: this.form.get('facebookAccount').value,
      instagramAccount: this.form.get('instagramAccount').value,
      linkedinAccount:this.form.get('linkedinAccount').value,
      whatsappNumber: this.form.get('whatsappNumber').value,
      supportLink: this.form.get('supportLink').value,
      privacyPolicyUrl: this.form.get('privacyPolicyUrl').value,
      termsOfServiceUrl: this.form.get('termsOfServiceUrl').value,
      subdomain: this.form.get('subdomain').value,
    };

    this._companyService.updateBranding(updateCompanyBrandingObj as UpdateCompanyBrandingDto).subscribe(
      () => {
        this._toastr.success(this._localizationService.instant('General::companyEditSuccessfully'), '', {
          timeOut: 1000,
        })
        this.closeModal();
        this.getCompanyBranding();
      }
    );
  }

  removeFile(): void {
    this.form.get('companyLogo').setValue(null);
    this.companyBranding.companyLogo = null;
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

}
