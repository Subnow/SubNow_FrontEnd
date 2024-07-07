import { Component, inject, OnInit } from '@angular/core';
import { CompanyDto, CompanyService, UpdateCompanyDto } from '@proxy/companies';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryDto, CountryService } from '@proxy/look-ups';
import { LocalizationService } from '@abp/ng.core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-settings-modal',
  templateUrl: './company-settings-modal.component.html',
  styleUrl: './company-settings-modal.component.scss'
})
export class CompanySettingsModalComponent implements OnInit{
  activeModal = inject(NgbActiveModal);
  company:CompanyDto;
  form: FormGroup;
  countryList: CountryDto[] = [];

  constructor(
    public _fb: FormBuilder,
    private _companyService:CompanyService,
    private _countryService: CountryService,
    private _localizationService: LocalizationService,
    private _toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.initForm();
    this.getCompanySetting();
    this.getCountryList();
  }
  initForm() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      description: [''],
      companyRegistrationNo: [''],
      taxID: [''],
      address1: [''],
      address2: [''],
      postalCode: [''],
      city: [''],
      stateOrProvince: [''],
      countryId: [null]
    });
  }
  updateForm() {
    this.form.patchValue({
      name: this.company?.name,
      description: this.company?.description,
      companyRegistrationNo: this.company?.companyRegistrationNo,
      taxID: this.company?.taxID,
      address1: this.company?.address1,
      address2: this.company?.address2,
      postalCode: this.company?.postalCode,
      city: this.company?.city,
      stateOrProvince: this.company?.stateOrProvince,
      countryId: this.company?.countryId === "00000000-0000-0000-0000-000000000000" ? null : this.company?.countryId
    });
  }
  getCompanySetting():void{
    this._companyService.get().subscribe((res)=>{
      this.company = res;
      this.updateForm();
      console.log("this ===>" , this.company)
    })

  }

  getCountryList() {
    this._countryService.getAll().subscribe((res => {
      this.countryList = res?.items;
    }))
  }

  closeModal(){
    this.activeModal.close();
  }

  editCompany(): void {
    const updateCompanyObj = {
      id: this?.company?.id,
      name: this?.form.get('name').value,
      nameAr: '',
      description: this?.form.get('description').value,
      currencyCode: 'SAR',
      companyRegistrationNo:this?.form.get('companyRegistrationNo').value,
      taxID:this?.form.get('taxID').value,
      address1: this?.form.get('address1').value,
      address2: this?.form.get('address2').value,
      photo: '',
      postalCode: this?.form.get('postalCode').value,
      stateOrProvince: this?.form.get('stateOrProvince').value,
      city: this?.form.get('city').value,
      countryId: this?.form.get('countryId').value,
    }
    this._companyService.update(updateCompanyObj as any).subscribe(()=>{
      this._toastr.success(this._localizationService.instant('General::companyEditSuccessfully'), '', {
        timeOut: 1000,
      });
      this.closeModal()
    })
  }
}
