import { Component, inject, Input, OnInit, AfterViewInit, ChangeDetectorRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { CreateCustomerDto, CustomerDto, CustomerService, UpdateCustomerDto } from '@proxy/customers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '@proxy/categories';
import { LocalizationService } from '@abp/ng.core';
import { ToastrService } from 'ngx-toastr';
import {  NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { CountryDto, CountryService } from '@proxy/look-ups';
import { formatDate } from '../../../shared/utils/date';
import { finalize } from 'rxjs';
import { convertIsoToDateStruct, phoneWithoutCode } from '../../../shared/utils/functions';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrl: './add-edit-customer.component.scss'
})
export class AddEditCustomerComponent implements OnInit,AfterViewInit {
  @Input() customer?: CustomerDto;
  @Input() isEdit?: boolean;
  @Output() formValid = new EventEmitter<boolean>();
  @Input() isMoreDetails:boolean;
  @Input() customerId:string;
  customerName:string;

  type?:string = 'customer';
  form?: FormGroup;
  activeModal = inject(NgbActiveModal);
  isLoading = false;
  active = 1;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat.International;
  preferredCountries: CountryISO[] = [CountryISO.SaudiArabia];
  countries: CountryISO[] = [];
  phoneInitiated = false;
  languageList = [];
  countryList: CountryDto[] = [];
  selectedCity;
  disabledButton: boolean = false;
  isDisabled:boolean = false;

  constructor(
    public _fb: FormBuilder,
    private _categoryService: CategoryService,
    private _customerService: CustomerService,
    private _countryService: CountryService,
    private _localizationService: LocalizationService,
    private toastr: ToastrService,
    private calendar: NgbCalendar,
    private cd: ChangeDetectorRef,

  ) {
  }
  ngOnInit(): void {
    this.initForm();
    this.languageList = [
      {
        id: "0",
        code: "EN",
        name: "English"
      },
      {
        id: "1",
        code: "AR",
        name: "Arabic"
      }
    ]
    this.getOnlyCountries();
    this.getCountryList();
    if (this.isMoreDetails){
      this._customerService.get(this.customerId).subscribe((res=>{
        this.customerName = res?.name;
        this.form = this._fb.group({
          name: [{value:res?.name, disabled: true}],
          customerKey: [{value:res?.customerKey, disabled: true}],
          email:[{value:res?.email, disabled: true}],
          phone:[{value:phoneWithoutCode(res?.phone), disabled: true}],
          description: [{value:res?.description, disabled: true}],
          customerStatus: [{value:res?.customerStatus, disabled: true}],
          photo: [{value:res?.photo, disabled: true}],
          customerSince: [{value:new Date(res?.customerSince), disabled: true}],
          joinedSubnow: [{value:new Date(res?.joinedSubnow), disabled: true}],
          preferredLanguage: [{value:res?.preferredLanguage, disabled: true}],
          vatid: [{value:res?.vatid, disabled: true}],
          companyRegistryNumber: [{value:res?.companyRegistryNumber, disabled: true}],
          address: [{value:res?.address, disabled: true}],
          isBusiness: [{value:res?.isBusiness, disabled: true}],
          city: [{value:res?.city, disabled: true}],
          stateProvince: [{value:res?.stateProvince, disabled: true}],
          countryId: [{value:res?.countryId, disabled: true}],
          tags: [{value:res?.tags, disabled: true}],
          customerSource: [{value:res?.customerSource, disabled: true}]
        })
      }))
    }


    this.form.statusChanges.subscribe(() => {
      this.formValid.emit(this.form.valid);
    });

    if (this.customer?.customerSince === undefined){
      this.form?.controls['customerSince'].setValue('')
    }else {
      this.form?.controls['customerSince'].setValue(new Date(this.customer?.customerSince))
    }
  }

  getOnlyCountries() {
    this.countries = Object.keys(CountryISO)
      .map(name => {
        return CountryISO[name as keyof typeof CountryISO];
      })
      .filter(x => x != 'il' && x != 'ir');
  }

  getCountryList() {
    this._countryService.getAll().subscribe((res => {
      this.countryList = res?.items;
      if (this.isEdit === true) {
        this.selectedCity = this.countryList?.filter((x => x?.id === this.customer?.countryId))[0]?.id
      } else {
        this.selectedCity = this.countryList?.filter((x => x?.id === 'fbc691ae-a106-42d6-bb86-467bbde9b8a7'))[0]?.id
      }
    }))
  }

  initForm() {
    if (this.isEdit === true) {
      this.form = this._fb.group({
        name: [this.customer?.name, Validators.required],
        customerKey: [{ value: this.customer?.customerKey, disabled: true }, Validators.required],
        email: [this.customer?.email],
        phone: [phoneWithoutCode(this.customer?.phone)],
        description: [this.customer?.description, Validators.maxLength(250)],
        customerStatus: [this.customer?.customerStatus],
        photo: [this.customer?.photo],
        customerSince: [{ value:new Date(this.customer?.customerSince), disabled: true }],
        joinedSubnow: [{ value:new Date(this.customer?.joinedSubnow), disabled: true }],
        preferredLanguage: [this.customer?.preferredLanguage],
        vatid: [this.customer?.vatid],
        companyRegistryNumber: [this.customer?.companyRegistryNumber],
        address: [this.customer?.address],
        isBusiness: [this.customer?.isBusiness],
        city: [this.customer?.city],
        stateProvince: [this.customer?.stateProvince],
        countryId: [this?.customer?.countryId],
        tags: [this.customer?.tags],
        customerSource: [this.customer?.customerSource]
      })
    } else {
      this.form = this._fb.group({
        name: [this.customer?.name, Validators.required],
        customerKey: [this.customer?.customerKey, Validators.required],
        email: [this.customer?.email, Validators.email],
        phone: [this?.customer?.phone],
        description: [this.customer?.description,Validators.maxLength(250)],
        customerStatus: [0],
        photo: [""],
        customerSince: [null],
        joinedSubnow: [{ value: new Date(), disabled: true }],
        preferredLanguage: ['English'],
        vatid: ['0'],
        companyRegistryNumber: ['0'],
        address: [this.customer?.address],
        isBusiness: [false],
        city: [this.customer?.city],
        stateProvince: [this.customer?.stateProvince],
        countryId: [this?.customer?.countryId],
        tags: [""],
        customerSource: [0],
      })
    }

  }

  closeModal() {
    this.activeModal.close();
  }

  createEditCustomer(): void {
    if (!this.form) {
      return;
    }
    const { id } = this?.customer || {}
    const createCustomer = {
      customerKey: this.form.get('customerKey').value,
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value?.internationalNumber,
      description: this.form.get('description').value,
      customerStatus: this.form.get('customerStatus').value,
      photo: this.form.get('photo').value,
      customerSince: this.form.get('customerSince').value,
      joinedSubnow: this.form.get('joinedSubnow').value,
      preferredLanguage: this.form.get('preferredLanguage').value,
      vatid: this.form.get('vatid').value,
      companyRegistryNumber: this.form.get('companyRegistryNumber').value,
      address: this.form.get('address').value,
      isBusiness: this.form.get('isBusiness').value,
      city: this.form.get('city').value,
      stateProvince: this.form.get('stateProvince').value,
      countryId: this.form.get('countryId').value,
      tags: this.form.get('tags').value,
      customerSource: this.form.get('customerSource').value,
    } as CreateCustomerDto
    const updateCustomer = {
      id: id,
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value?.internationalNumber,
      description: this.form.get('description').value,
      customerStatus: this.form.get('customerStatus').value,
      photo: this.form.get('photo').value,
      preferredLanguage: this.form.get('preferredLanguage').value,
      vatid: this.form.get('vatid').value,
      companyRegistryNumber: this.form.get('companyRegistryNumber').value,
      address: this.form.get('address').value,
      isBusiness: this.form.get('isBusiness').value,
      city: this.form.get('city').value,
      stateProvince: this.form.get('stateProvince').value,
      countryId: this.form.get('countryId').value,
      tags: this.form.get('tags').value,
      customerSource: this.form.get('customerSource').value,
    } as UpdateCustomerDto;
    (!id
        ? this._customerService.create(createCustomer)
        : this._customerService.update(updateCustomer)
    )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((value) => {
        if (id) {
          this.toastr.success(this._localizationService.instant('General::customerEditMsg'), '', {
            timeOut: 1000,
          });
        } else {
          this.toastr.success(this._localizationService.instant('General::customerAddMsg'), '', {
            timeOut: 1000,
          });
        }
        this.activeModal.close(value);
      });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
    // Adding a safety check to ensure 'countryList' has items and the filtered result is not undefined.
    if (this.countryList && this.countryList.length > 0) {
      const filteredCountries = this.countryList.filter(x => x.id === (this.isEdit ? this.customer?.countryId : 'fbc691ae-a106-42d6-bb86-467bbde9b8a7'));
      if (filteredCountries.length > 0) {
        this.selectedCity = filteredCountries[0].id;
      } else {
        console.warn('No matching country found');
        // Optionally set a default or handle the case where no country is found
        this.selectedCity = this.countryList[0].id; // or handle differently
      }
    }
  }

}
