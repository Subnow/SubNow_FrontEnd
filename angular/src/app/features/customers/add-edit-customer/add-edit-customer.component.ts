import { Component, inject, Input, OnInit } from '@angular/core';
import { CreateCustomerDto, CustomerDto, CustomerService } from '@proxy/customers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '@proxy/categories';
import { LocalizationService } from '@abp/ng.core';
import { ToastrService } from 'ngx-toastr';
import {  NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { CountryDto, CountryService } from '@proxy/look-ups';
import { CustomerStatus } from '@proxy/enums';
import { formatDate } from '../../../shared/utils/date';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrl: './add-edit-customer.component.scss'
})
export class AddEditCustomerComponent implements OnInit{
  @Input() customer?: CustomerDto;
  @Input() isEdit?: boolean;
  form: FormGroup;
  activeModal = inject(NgbActiveModal);
  isLoading = false;
  active = 1;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat.International;
  preferredCountries: CountryISO[] = [CountryISO.SaudiArabia];
  countries: CountryISO[] = [];
  phoneInitiated = false;
  languageList=[];
  countryList:CountryDto[] = [];
  selectedCity;

  constructor(
    public _fb: FormBuilder,
    private _categoryService:CategoryService,
    private _customerService:CustomerService,
    private _countryService:CountryService,
    private _localizationService: LocalizationService,
    private toastr: ToastrService,
    private calendar: NgbCalendar
  )
      {
      }

  ngOnInit(): void {
    this.countries = Object.keys(CountryISO)
      .map(name => {
        return CountryISO[name as keyof typeof CountryISO];
      })
      .filter(x => x != 'il' && x != 'ir');
        this.initForm();
        this.form.get('phone').valueChanges.subscribe(x => {
          if (!this.phoneInitiated) {
            this.form.get('phone').markAsPristine();
            this.form.get('phone').setErrors(null);
            this.phoneInitiated = true;
          }
    });
        this.form.controls?.phone.setErrors(null);
        this.languageList = [
          {
            id:"0",
            code:"EN",
            name:"English"
          },
          {
            id:"1",
            code:"AR",
            name:"Arabic"
          }
        ]
        this.getCountryList()
  }

  getCountryList(){
    this._countryService.getAll().subscribe((res=>{
      this.countryList = res?.items;
      this.selectedCity = this.countryList.filter((x=>x.id === 'fbc691ae-a106-42d6-bb86-467bbde9b8a7'))[0].id
    }))
  }
  initForm(){
      this.form = this._fb.group({
        name: [this.customer?.name, Validators.required],
        customerKey: [this.customer?.customerKey, Validators.required],
        email: [this.customer?.email],
        phone: [null],
        description: [this.customer?.description, Validators.required],
        customerStatus: [0],
        photo: [''],
        customerSince: [this.customer?.customerSince, Validators.required],
        joinedSubnow: [{value:this.calendar.getToday(),disabled: true}, Validators.required],
        preferredLanguage: ['English'],
        vatid: [0],
        companyRegistryNumber: [0],
        address: [this.customer?.address, Validators.required],
        isBusiness: [this.customer?.isBusiness],
        city: [this.customer?.city, Validators.required],
        stateProvince: [this.customer?.stateProvince, Validators.required],
        countryId: [this?.customer?.countryId, Validators.required],
        tags:[''],
        customerSource:[0],
      })
  }
  closeModal(){
    this.activeModal.close();
  }

  createEditCustomer(): void {
    if (!this.form) {
      return;
    }
    const {id} = this?.customer || {}
    const createCustomer = {
      customerKey: this.form.get('customerKey').value,
      name: this.form.get('name').value,
      email:this.form.get('email').value,
      phone: this.form.get('phone').value?.internationalNumber,
      description:this.form.get('description').value,
      customerStatus:this.form.get('customerStatus').value,
      photo:this.form.get('photo').value,
      customerSince:formatDate(this.form.get('customerSince').value),
      joinedSubnow:formatDate(this.form.get('joinedSubnow').value),
      preferredLanguage:this.form.get('preferredLanguage').value,
      vatid:this.form.get('vatid').value,
      companyRegistryNumber:this.form.get('companyRegistryNumber').value,
      address:this.form.get('address').value,
      isBusiness:this.form.get('isBusiness').value,
      city:this.form.get('city').value,
      stateProvince:this.form.get('stateProvince').value,
      countryId:this.form.get('countryId').value,
      tags:this.form.get('tags').value,
      customerSource:this.form.get('customerSource').value,
    } as CreateCustomerDto
    (!id
        ? this._customerService.create(createCustomer)
        : this._customerService.update({id,...createCustomer})
    )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((value) => {
        if (id) {
          this.toastr.success(this._localizationService.instant('General::planEditMsg'), '', {
            timeOut: 1000,
          });
        } else {
          this.toastr.success(this._localizationService.instant('General::planAddMsg'), '', {
            timeOut: 1000,
          });
        }
        this.activeModal.close(value);
      });
  }
}
