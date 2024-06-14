"use strict";(self.webpackChunkSubNow=self.webpackChunkSubNow||[]).push([[69],{1069:(ie,v,r)=>{r.r(v),r.d(v,{CustomersModule:()=>oe});var m=r(6814),b=r(5525),e=r(9212);let q=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-customers"]],decls:1,vars:0,template:function(i,a){1&i&&e._UZ(0,"router-outlet")},dependencies:[b.lC]})}return o})();var c=r(6806),s=r(95),d=r(3251);function _(o){const{day:n,month:t,year:i}=o;return`${n.toString().padStart(2,"0")}/${t.toString().padStart(2,"0")}/${i}`}var T=r(4716);function x(o){let n=o,t=n.indexOf(" ");return n.substring(t+1)}function L(o){const n=new Date(o);return{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()}}var S=r(2351),p=r(7757);let C=(()=>{class o{constructor(t){this.restService=t,this.apiName="Default",this.create=(i,a)=>this.restService.request({method:"POST",url:"/api/app/customer",body:i},{apiName:this.apiName,...a}),this.delete=(i,a)=>this.restService.request({method:"DELETE",url:`/api/app/customer/${i}`},{apiName:this.apiName,...a}),this.get=(i,a)=>this.restService.request({method:"GET",url:`/api/app/customer/${i}`},{apiName:this.apiName,...a}),this.getFilteredCustomers=(i,a)=>this.restService.request({method:"GET",url:"/api/app/customer/filtered-customers",params:{status:i.status,plan:i.plan,searchTerm:i.searchTerm}},{apiName:this.apiName,...a}),this.getList=(i,a)=>this.restService.request({method:"GET",url:"/api/app/customer",params:{sorting:i.sorting,skipCount:i.skipCount,maxResultCount:i.maxResultCount}},{apiName:this.apiName,...a}),this.update=(i,a)=>this.restService.request({method:"PUT",url:"/api/app/customer",body:i},{apiName:this.apiName,...a})}static#e=this.\u0275fac=function(i){return new(i||o)(e.LFG(p.vgb))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),N=(()=>{class o{constructor(t){this.restService=t,this.apiName="Default",this.getAll=i=>this.restService.request({method:"GET",url:"/api/app/country"},{apiName:this.apiName,...i})}static#e=this.\u0275fac=function(i){return new(i||o)(e.LFG(p.vgb))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var U=r(2425),f=r(1411),h=r(9193);function G(o,n){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.Oqu(null==t.customer?null:t.customer.name)}}function O(o,n){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&o&&(e.xp6(),e.Oqu(e.lcZ(2,1,"General::newCustomer")))}function z(o,n){if(1&o&&(e.TgZ(0,"div",59)(1,"span",60),e._uU(2),e.qZA(),e.TgZ(3,"span",61),e._uU(4),e.qZA()()),2&o){const t=n.item;e.xp6(2),e.Oqu(null==t?null:t.code),e.xp6(2),e.Oqu(null==t?null:t.name)}}function E(o,n){1&o&&(e.TgZ(0,"div",62)(1,"div",28)(2,"label",29),e._uU(3),e.ALo(4,"abpLocalization"),e.qZA(),e.TgZ(5,"div",30),e._UZ(6,"input",63)(7,"i",32),e.ALo(8,"abpLocalization"),e.qZA()()()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,2,"General::companyRegistrationNumber")),e.xp6(4),e.s9C("ngbTooltip",e.lcZ(8,4,"General::companyRegistrationNumberTooltip")))}function I(o,n){1&o&&(e.TgZ(0,"div",27)(1,"div",28)(2,"label",29),e._uU(3),e.ALo(4,"abpLocalization"),e.qZA(),e.TgZ(5,"div",30),e._UZ(6,"input",64)(7,"i",32),e.ALo(8,"abpLocalization"),e.qZA()()()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,2,"General::taxID")),e.xp6(4),e.s9C("ngbTooltip",e.lcZ(8,4,"General::taxIDTooltip")))}function J(o,n){if(1&o&&(e.TgZ(0,"div",65),e._UZ(1,"img",66),e.TgZ(2,"span",61),e._uU(3),e.qZA()()),2&o){const t=n.item;e.xp6(),e.Q6J("src",null==t?null:t.flagUrl,e.LSH),e.xp6(2),e.Oqu(null==t?null:t.name)}}function w(o,n){if(1&o&&(e.TgZ(0,"div",65),e._UZ(1,"img",66),e.TgZ(2,"span",61),e._uU(3),e.qZA()()),2&o){const t=n.item;e.xp6(),e.Q6J("src",null==t?null:t.flagUrl,e.LSH),e.xp6(2),e.Oqu(null==t?null:t.name)}}const F=(o,n)=>[o,n],M=()=>({standalone:!0});function k(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"form",21)(1,"div",22)(2,"div",23)(3,"p",24),e._uU(4),e.ALo(5,"abpLocalization"),e.qZA()(),e.TgZ(6,"div",25)(7,"div",26)(8,"div",27)(9,"div",28)(10,"label",29),e._uU(11),e.ALo(12,"abpLocalization"),e.qZA(),e.TgZ(13,"div",30),e._UZ(14,"input",31)(15,"i",32),e.ALo(16,"abpLocalization"),e.qZA()()(),e.TgZ(17,"div",27)(18,"div",28)(19,"label",29),e._uU(20),e.ALo(21,"abpLocalization"),e.qZA(),e.TgZ(22,"input",33),e.NdJ("keydown.space",function(a){return a.preventDefault()}),e.qZA(),e.TgZ(23,"span",34),e._uU(24),e.ALo(25,"abpLocalization"),e.qZA()()(),e.TgZ(26,"div",27)(27,"div",28)(28,"label",29),e._uU(29),e.ALo(30,"abpLocalization"),e.qZA(),e._UZ(31,"textarea",35),e.ALo(32,"abpLocalization"),e.qZA()(),e.TgZ(33,"div",27)(34,"div",26)(35,"div",36)(36,"div",37)(37,"label",29),e._uU(38),e.ALo(39,"abpLocalization"),e.qZA(),e.TgZ(40,"div",30)(41,"input",38,39),e.NdJ("focus",function(){e.CHM(t);const a=e.MAs(42);return e.KtG(a.toggle())}),e.qZA(),e.TgZ(43,"i",40),e.NdJ("click",function(){e.CHM(t);const a=e.MAs(42);return e.KtG(a.toggle())}),e._UZ(44,"i",41),e.qZA()()()(),e.TgZ(45,"div",36)(46,"div",37)(47,"label",29),e._uU(48),e.ALo(49,"abpLocalization"),e.qZA(),e.TgZ(50,"div",30),e._UZ(51,"input",42,39),e.TgZ(53,"i",43),e._UZ(54,"i",41),e.qZA()()()()()()()()(),e.TgZ(55,"div",22)(56,"div",23)(57,"p",24),e._uU(58),e.ALo(59,"abpLocalization"),e.qZA()(),e.TgZ(60,"div",25)(61,"div",26)(62,"div",27)(63,"div",28)(64,"label",29),e._uU(65),e.ALo(66,"abpLocalization"),e.qZA(),e.TgZ(67,"div",30),e._UZ(68,"input",44)(69,"i",32),e.ALo(70,"abpLocalization"),e.qZA(),e.TgZ(71,"span",34),e._uU(72),e.ALo(73,"abpLocalization"),e.qZA()()(),e.TgZ(74,"div",27)(75,"div",28)(76,"label",29),e._uU(77),e.ALo(78,"abpLocalization"),e.qZA(),e.TgZ(79,"div",30),e._UZ(80,"ngx-intl-tel-input",45)(81,"i",32),e.ALo(82,"abpLocalization"),e.qZA(),e.TgZ(83,"span",34),e._uU(84),e.ALo(85,"abpLocalization"),e.qZA()()(),e.TgZ(86,"div",27)(87,"div",28)(88,"label",29),e._uU(89),e.ALo(90,"abpLocalization"),e.qZA(),e.TgZ(91,"ng-select",46),e.ALo(92,"abpLocalization"),e.YNc(93,z,5,2,"ng-template",47),e.qZA()()()()()(),e.TgZ(94,"div",22)(95,"div",23)(96,"p",24),e._uU(97),e.ALo(98,"abpLocalization"),e.qZA()(),e.TgZ(99,"div",25)(100,"div",26)(101,"div",27)(102,"div",48),e._UZ(103,"input",49),e.TgZ(104,"label",50),e._uU(105),e.ALo(106,"abpLocalization"),e.qZA()()(),e.YNc(107,E,9,6,"div",51)(108,I,9,6,"div",52),e.qZA()()(),e.TgZ(109,"div",53)(110,"div",23)(111,"p",24),e._uU(112),e.ALo(113,"abpLocalization"),e.qZA()(),e.TgZ(114,"div",25)(115,"div",26)(116,"div",27)(117,"div",28)(118,"label",29),e._uU(119),e.ALo(120,"abpLocalization"),e.qZA(),e._UZ(121,"input",54),e.qZA()(),e.TgZ(122,"div",27)(123,"div",28)(124,"label",29),e._uU(125),e.ALo(126,"abpLocalization"),e.qZA(),e._UZ(127,"input",55),e.ALo(128,"abpLocalization"),e.qZA()(),e.TgZ(129,"div",27)(130,"div",28)(131,"label",29),e._uU(132),e.ALo(133,"abpLocalization"),e.qZA(),e._UZ(134,"input",56),e.ALo(135,"abpLocalization"),e.qZA()(),e.TgZ(136,"div",27)(137,"div",37)(138,"label",29),e._uU(139),e.ALo(140,"abpLocalization"),e.qZA(),e.TgZ(141,"ng-select",57),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.selectedCity=a)}),e.ALo(142,"abpLocalization"),e.YNc(143,J,4,2,"ng-template",47)(144,w,4,2,"ng-template",58),e.qZA()()()()()()()}if(2&o){const t=e.oxw();e.Q6J("formGroup",t.form),e.xp6(4),e.Oqu(e.lcZ(5,51,"General::mainInfo")),e.xp6(7),e.Oqu(e.lcZ(12,53,"General::customerName")),e.xp6(4),e.s9C("ngbTooltip",e.lcZ(16,55,"General::customerName")),e.xp6(5),e.Oqu(e.lcZ(21,57,"General::customerKey")),e.xp6(4),e.Oqu(e.lcZ(25,59,"General::customerKeyHint")),e.xp6(5),e.Oqu(e.lcZ(30,61,"General::customerDescription")),e.xp6(2),e.s9C("placeholder",e.lcZ(32,63,"General::customerDescriptionPlaceholder")),e.xp6(7),e.Oqu(e.lcZ(39,65,"General::customerSince")),e.xp6(10),e.Oqu(e.lcZ(49,67,"General::joinedSubnowOn")),e.xp6(10),e.Oqu(e.lcZ(59,69,"General::contactInfo")),e.xp6(7),e.Oqu(e.lcZ(66,71,"General::customerEmail")),e.xp6(4),e.s9C("ngbTooltip",e.lcZ(70,73,"General::customerEmailTooltip")),e.xp6(3),e.Oqu(e.lcZ(73,75,"General::customerEmailHint")),e.xp6(5),e.Oqu(e.lcZ(78,77,"General::customerPhone")),e.xp6(3),e.Q6J("cssClass","custom-tel-input")("preferredCountries",t.preferredCountries)("onlyCountries",t.countries)("enableAutoCountrySelect",!0)("enablePlaceholder",!0)("cssClass","form-control")("searchCountryFlag",!0)("searchCountryField",e.WLB(107,F,t.SearchCountryField.Iso2,t.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",t.CountryISO.SaudiArabia)("maxLength",20)("phoneValidation",!0)("separateDialCode",!0)("numberFormat",t.PhoneNumberFormat.National),e.xp6(),e.s9C("ngbTooltip",e.lcZ(82,79,"General::customerPhoneTooltip")),e.xp6(3),e.Oqu(e.lcZ(85,81,"General::customerPhoneHint")),e.xp6(5),e.Oqu(e.lcZ(90,83,"General::preferredLanguage")),e.xp6(2),e.s9C("placeholder",e.lcZ(92,85,"General::preferredLanguage")),e.Q6J("items",t.languageList)("clearable",!1),e.xp6(6),e.Oqu(e.lcZ(98,87,"General::mainInfo")),e.xp6(8),e.Oqu(e.lcZ(106,89,"General::isABusiness")),e.xp6(2),e.Q6J("ngIf",t.form.get("isBusiness").value),e.xp6(),e.Q6J("ngIf",t.form.get("isBusiness").value),e.xp6(4),e.Oqu(e.lcZ(113,91,"General::address")),e.xp6(7),e.Oqu(e.lcZ(120,93,"General::address")),e.xp6(6),e.Oqu(e.lcZ(126,95,"General::city")),e.xp6(2),e.s9C("placeholder",e.lcZ(128,97,"General::city")),e.xp6(5),e.Oqu(e.lcZ(133,99,"General::stateProvince")),e.xp6(2),e.s9C("placeholder",e.lcZ(135,101,"General::state")),e.xp6(5),e.Oqu(e.lcZ(140,103,"General::country")),e.xp6(2),e.s9C("placeholder",e.lcZ(142,105,"General::country")),e.Q6J("ngModelOptions",e.DdM(110,M))("ngModel",t.selectedCity)("items",t.countryList)("clearable",!1)}}function P(o,n){1&o&&e._uU(0,"Second content")}function V(o,n){1&o&&e._uU(0,"Second content")}function Y(o,n){1&o&&e._uU(0,"Second content")}let D=(()=>{class o{constructor(t,i,a,l,u,Z,y,g){this._fb=t,this._categoryService=i,this._customerService=a,this._countryService=l,this._localizationService=u,this.toastr=Z,this.calendar=y,this.cd=g,this.activeModal=(0,e.f3M)(c.Kz),this.isLoading=!1,this.active=1,this.SearchCountryField=d.wX,this.CountryISO=d.HT,this.PhoneNumberFormat=d.M9.International,this.preferredCountries=[d.HT.SaudiArabia],this.countries=[],this.phoneInitiated=!1,this.languageList=[],this.countryList=[],this.disabledButton=!1}ngOnInit(){this.initForm(),this.languageList=[{id:"0",code:"EN",name:"English"},{id:"1",code:"AR",name:"Arabic"}],this.getOnlyCountries(),this.getCountryList()}getOnlyCountries(){this.countries=Object.keys(d.HT).map(t=>d.HT[t]).filter(t=>"il"!=t&&"ir"!=t)}getCountryList(){this._countryService.getAll().subscribe(t=>{this.countryList=t?.items,this.selectedCity=!0===this.isEdit?this.countryList?.filter(i=>i?.id===this.customer?.countryId)[0]?.id:this.countryList?.filter(i=>"fbc691ae-a106-42d6-bb86-467bbde9b8a7"===i?.id)[0]?.id})}initForm(){this.form=this._fb.group(!0===this.isEdit?{name:[this.customer?.name,s.Validators.required],customerKey:[{value:this.customer?.customerKey,disabled:!0},s.Validators.required],email:[this.customer?.email],phone:[x(this.customer?.phone)],description:[this.customer?.description,[s.Validators.required,s.Validators.maxLength(250)]],customerStatus:[this.customer?.customerStatus],photo:[this.customer?.photo],customerSince:[L(this.customer?.customerSince),s.Validators.required],joinedSubnow:[{value:L(this.customer?.joinedSubnow),disabled:!0},s.Validators.required],preferredLanguage:[this.customer?.preferredLanguage],vatid:[this.customer?.vatid],companyRegistryNumber:[this.customer?.companyRegistryNumber],address:[this.customer?.address,s.Validators.required],isBusiness:[this.customer?.isBusiness],city:[this.customer?.city,s.Validators.required],stateProvince:[this.customer?.stateProvince,s.Validators.required],countryId:[this?.customer?.countryId,s.Validators.required],tags:[this.customer?.tags],customerSource:[this.customer?.customerSource]}:{name:[this.customer?.name,s.Validators.required],customerKey:[this.customer?.customerKey,s.Validators.required],email:[this.customer?.email,[s.Validators.required,s.Validators.email]],phone:[this?.customer?.phone],description:[this.customer?.description,[s.Validators.required,s.Validators.maxLength(250)]],customerStatus:[0],photo:[""],customerSince:[this.customer?.customerSince,s.Validators.required],joinedSubnow:[{value:this.calendar.getToday(),disabled:!0},s.Validators.required],preferredLanguage:["English"],vatid:["0"],companyRegistryNumber:["0"],address:[this.customer?.address,s.Validators.required],isBusiness:[!1],city:[this.customer?.city,s.Validators.required],stateProvince:[this.customer?.stateProvince,s.Validators.required],countryId:[this?.customer?.countryId,s.Validators.required],tags:[""],customerSource:[0]})}closeModal(){this.activeModal.close()}createEditCustomer(){if(!this.form)return;const{id:t}=this?.customer||{},i={customerKey:this.form.get("customerKey").value,name:this.form.get("name").value,email:this.form.get("email").value,phone:this.form.get("phone").value?.internationalNumber,description:this.form.get("description").value,customerStatus:this.form.get("customerStatus").value,photo:this.form.get("photo").value,customerSince:_(this.form.get("customerSince").value),joinedSubnow:_(this.form.get("joinedSubnow").value),preferredLanguage:this.form.get("preferredLanguage").value,vatid:this.form.get("vatid").value,companyRegistryNumber:this.form.get("companyRegistryNumber").value,address:this.form.get("address").value,isBusiness:this.form.get("isBusiness").value,city:this.form.get("city").value,stateProvince:this.form.get("stateProvince").value,countryId:this.form.get("countryId").value,tags:this.form.get("tags").value,customerSource:this.form.get("customerSource").value},a={id:t,name:this.form.get("name").value,email:this.form.get("email").value,phone:this.form.get("phone").value?.internationalNumber,description:this.form.get("description").value,customerStatus:this.form.get("customerStatus").value,photo:this.form.get("photo").value,preferredLanguage:this.form.get("preferredLanguage").value,vatid:this.form.get("vatid").value,companyRegistryNumber:this.form.get("companyRegistryNumber").value,address:this.form.get("address").value,isBusiness:this.form.get("isBusiness").value,city:this.form.get("city").value,stateProvince:this.form.get("stateProvince").value,countryId:this.form.get("countryId").value,tags:this.form.get("tags").value,customerSource:this.form.get("customerSource").value};(t?this._customerService.update(a):this._customerService.create(i)).pipe((0,T.x)(()=>this.isLoading=!1)).subscribe(l=>{this.toastr.success(this._localizationService.instant(t?"General::customerEditMsg":"General::customerAddMsg"),"",{timeOut:1e3}),this.activeModal.close(l)})}ngAfterViewInit(){this.cd.detectChanges(),this.selectedCity=!0===this.isEdit?this.countryList?.filter(t=>t.id===this.customer?.countryId)[0].id:this.countryList?.filter(t=>"fbc691ae-a106-42d6-bb86-467bbde9b8a7"===t.id)[0].id}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(s.qu),e.Y36(S.H),e.Y36(C),e.Y36(N),e.Y36(p.oQ8),e.Y36(U._W),e.Y36(c.vL),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-edit-customer"]],inputs:{customer:"customer",isEdit:"isEdit"},decls:46,vars:22,consts:[[1,"modal-header"],[1,"container"],[1,"modal-header-wrapper"],[1,"modal-close",3,"click"],[1,"fa","fa-xmark"],[1,"title"],[4,"ngIf"],["type","submit",1,"btn","btn-save",3,"disabled","click"],[1,"modal-body"],[1,"modal-body-wrapper"],["ngbNav","",1,"custom-nav-tabs","nav-tabs","custom-width"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],[1,"icon","fa-regular","fa-address-card"],["ngbNavContent",""],["ngbNavItem","",3,"disabled"],[1,"fa-regular","fa-file-lines","icon"],[1,"fa-solid","fa-file-invoice","icon"],[1,"fa-solid","fa-chart-column","icon"],[3,"ngbNavOutlet"],[1,"form","section-form",3,"formGroup"],[1,"row","g-0","pb-32","border-bottom"],[1,"col-lg-3","col-md-12"],[1,"form-name"],[1,"col-lg-9","col-md-12"],[1,"row"],[1,"col-lg-8","col-md-12"],[1,"form-group"],[1,"form-label"],[1,"control-icon"],["formControlName","name","id","name","placeholder","Mike Johnson","type","text","required","",1,"form-control"],["tooltipClass","custom-tooltip","placement","top","container","body",1,"icon","fa-regular","fa-circle-question",3,"ngbTooltip"],["formControlName","customerKey","id","customerKey","placeholder","MikeJohnson@gmail.com","type","text","required","",1,"form-control",3,"keydown.space"],[1,"control-hint"],["formControlName","description","id","description","rows","2","required","",1,"form-control",3,"placeholder"],[1,"col-lg-6","col-md-12"],[1,"form-group","mb-0"],["placeholder","dd/mm/yyyy","name","dp","ngbDatepicker","","formControlName","customerSince",1,"form-control","input-date",3,"focus"],["d","ngbDatepicker"],[1,"icon",3,"click"],[1,"fa-regular","fa-calendar"],["placeholder","dd/mm/yyyy","name","dp","ngbDatepicker","","formControlName","joinedSubnow",1,"form-control","input-date"],[1,"icon"],["formControlName","email","id","email","placeholder","MikeJohnson@gmail.com","type","email","required","",1,"form-control"],["name","phone","formControlName","phone","id","phone",3,"cssClass","preferredCountries","onlyCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode","numberFormat"],["formControlName","preferredLanguage","bindLabel","name","bindValue","name",1,"select-lang",3,"items","placeholder","clearable"],["ng-label-tmp",""],[1,"form-check","form-switch","customer-check"],["type","checkbox","id","isABusiness","formControlName","isBusiness",1,"form-check-input"],["for","isABusiness",1,"form-check-label"],["class","mt-16 col-lg-8 col-md-12",4,"ngIf"],["class","col-lg-8 col-md-12",4,"ngIf"],[1,"row","g-0"],["formControlName","address","id","address","placeholder","100 Smith Street","type","text","required","",1,"form-control"],["formControlName","city","id","city","type","text","required","",1,"form-control",3,"placeholder"],["formControlName","stateProvince","id","stateProvince","type","text","required","",1,"form-control",3,"placeholder"],["formControlName","countryId","bindLabel","name","bindValue","id",1,"select-country",3,"ngModelOptions","ngModel","items","placeholder","clearable","ngModelChange"],["ng-option-tmp",""],[1,"info"],[1,"code"],[1,"name"],[1,"mt-16","col-lg-8","col-md-12"],["formControlName","companyRegistryNumber","id","companyRegistryNumber","type","text","required","",1,"form-control"],["formControlName","vatid","id","vatid","type","text","required","",1,"form-control"],[1,"country"],[1,"img-fluid",3,"src"]],template:function(i,a){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e.NdJ("click",function(){return a.closeModal()}),e._UZ(4,"i",4),e.qZA(),e.TgZ(5,"h2",5),e.YNc(6,G,2,1,"span",6)(7,O,3,3,"span",6),e.qZA(),e.TgZ(8,"button",7),e.NdJ("click",function(){return a.createEditCustomer()}),e.TgZ(9,"span"),e._uU(10),e.ALo(11,"abpLocalization"),e.qZA()()()()(),e.TgZ(12,"div",8)(13,"div",1)(14,"div",9)(15,"ul",10,11)(17,"li",12)(18,"button",13),e._UZ(19,"i",14),e.TgZ(20,"span"),e._uU(21),e.ALo(22,"abpLocalization"),e.qZA()(),e.YNc(23,k,145,111,"ng-template",15),e.qZA(),e.TgZ(24,"li",16)(25,"button",13),e._UZ(26,"i",17),e.TgZ(27,"span"),e._uU(28),e.ALo(29,"abpLocalization"),e.qZA()(),e.YNc(30,P,1,0,"ng-template",15),e.qZA(),e.TgZ(31,"li",16)(32,"button",13),e._UZ(33,"i",18),e.TgZ(34,"span"),e._uU(35),e.ALo(36,"abpLocalization"),e.qZA()(),e.YNc(37,V,1,0,"ng-template",15),e.qZA(),e.TgZ(38,"li",16)(39,"button",13),e._UZ(40,"i",19),e.TgZ(41,"span"),e._uU(42),e.ALo(43,"abpLocalization"),e.qZA()(),e.YNc(44,Y,1,0,"ng-template",15),e.qZA()(),e._UZ(45,"div",20),e.qZA()()()),2&i){const l=e.MAs(16);e.xp6(6),e.Q6J("ngIf",null==a.customer?null:a.customer.name),e.xp6(),e.Q6J("ngIf",!(null!=a.customer&&a.customer.name)),e.xp6(),e.Q6J("disabled",!a.form.valid),e.xp6(2),e.Oqu(e.lcZ(11,12,"General::save")),e.xp6(11),e.hij(" ",e.lcZ(22,14,"General::info")," "),e.xp6(3),e.Q6J("disabled",!0),e.xp6(4),e.hij(" ",e.lcZ(29,16,"General::subscription")," "),e.xp6(3),e.Q6J("disabled",!0),e.xp6(4),e.Oqu(e.lcZ(36,18,"General::invoices")),e.xp6(3),e.Q6J("disabled",!0),e.xp6(4),e.hij("",e.lcZ(43,20,"General::logs")," "),e.xp6(3),e.Q6J("ngbNavOutlet",l)}},dependencies:[m.O5,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.Q7,s.sg,s.u,f.hL,f.J5,c._L,h.w9,h.ir,h.mR,c.uN,c.Pz,c.nv,c.Is,c.Fh,c.tO,c.Dy,c.J4,d.FV,d.mh,p.fuE]})}return o})();var Q=r(2913),j=r(5668),A=r(7956);function B(o,n){if(1&o&&(e.TgZ(0,"div",9)(1,"span",23),e._UZ(2,"i",24),e.qZA(),e.TgZ(3,"span",8),e._uU(4),e.qZA()()),2&o){const t=n.item;e.xp6(4),e.Oqu(null==t?null:t.name)}}function R(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"app-not-found-data-standalone"),e.qZA())}function K(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"a",39),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.sortData())}),e.qZA()}}function H(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"a",40),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.unSortdata())}),e.qZA()}}function $(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"tr",41)(1,"td",42),e.ALo(2,"abpLocalization"),e.TgZ(3,"div",43)(4,"div",44),e._uU(5),e.qZA(),e.TgZ(6,"div",9)(7,"span",8),e._uU(8),e.qZA(),e.TgZ(9,"span",45),e._uU(10),e.qZA()()()(),e.TgZ(11,"td",42),e.ALo(12,"abpLocalization"),e.TgZ(13,"div",43)(14,"div",9)(15,"span",8),e._uU(16),e.qZA(),e.TgZ(17,"span",45),e._uU(18),e.qZA()()()(),e.TgZ(19,"td",42),e.ALo(20,"abpLocalization"),e._uU(21),e.ALo(22,"date"),e.qZA(),e.TgZ(23,"td",42),e.ALo(24,"abpLocalization"),e._uU(25),e.ALo(26,"date"),e.qZA(),e.TgZ(27,"td",46)(28,"a",47),e.NdJ("click",function(){const a=e.CHM(t),l=a.$implicit,u=a.index,Z=e.oxw(2);return e.KtG(Z.addEditCustomer(l,u,"edit"))}),e._UZ(29,"i",48),e.qZA()()()}if(2&o){const t=n.$implicit;e.xp6(),e.uIk("data-label",e.lcZ(2,11,"General::customer")),e.xp6(4),e.Oqu(null==t?null:t.name.substring(0,2)),e.xp6(3),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.customerKey),e.xp6(),e.uIk("data-label",e.lcZ(12,13,"General::plan")),e.xp6(5),e.Oqu(null==t?null:t.planName),e.xp6(2),e.Oqu(null==t?null:t.planCode),e.xp6(),e.uIk("data-label",e.lcZ(20,15,"General::dateJoined")),e.xp6(2),e.hij(" ",e.xi3(22,17,null==t?null:t.joinedSubnow,"MMM dd, yyyy")," "),e.xp6(2),e.uIk("data-label",e.lcZ(24,20,"General::subscriptionExpiry")),e.xp6(2),e.hij(" ",e.xi3(26,22,null==t?null:t.subscribtionExpiryDate,"MMM dd, yyyy")," ")}}function W(o,n){if(1&o&&(e.TgZ(0,"div",25)(1,"table",26)(2,"thead",27)(3,"tr",28)(4,"th",29)(5,"div",30)(6,"span"),e._uU(7),e.ALo(8,"abpLocalization"),e.qZA(),e.YNc(9,K,1,0,"a",31)(10,H,1,0,"a",32),e.qZA()(),e.TgZ(11,"th",33),e._uU(12),e.ALo(13,"abpLocalization"),e.qZA(),e.TgZ(14,"th",34),e._uU(15),e.ALo(16,"abpLocalization"),e.qZA(),e.TgZ(17,"th",35),e._uU(18),e.ALo(19,"abpLocalization"),e.qZA(),e._UZ(20,"th",36),e.qZA()(),e.TgZ(21,"tbody",37),e.YNc(22,$,30,25,"tr",38),e.qZA()()()),2&o){const t=e.oxw();e.xp6(7),e.Oqu(e.lcZ(8,7,"General::customer")),e.xp6(2),e.Q6J("ngIf",!t.isSort),e.xp6(),e.Q6J("ngIf",t.isSort),e.xp6(2),e.Oqu(e.lcZ(13,9,"General::plan")),e.xp6(3),e.Oqu(e.lcZ(16,11,"General::dateJoined")),e.xp6(3),e.hij(" ",e.lcZ(19,13,"General::subscriptionExpiry"),""),e.xp6(4),e.Q6J("ngForOf",t.customerList)}}const X=[{path:"",component:q,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class o{constructor(t,i,a){this._customerService=t,this._planServices=i,this._fb=a,this.modalService=(0,e.f3M)(c.FF),this.customerList=[],this.isEdit=!1,this.planList=[],this.statusList=[],this.isSort=!1}ngOnInit(){this.getCustomerList(),this.getPlanName(),this.initForm()}initForm(){this.form=this._fb.group({status:[null],plan:["All"],searchTerm:[""]})}onChangeFilter(t){this._customerService.getFilteredCustomers(this?.form.value).subscribe(i=>{this.customerList=i})}sortData(){this._customerService.getList({sorting:"name",maxResultCount:1e3}).subscribe(t=>{this.customerList=t?.items,this.isSort=!0})}unSortdata(){this._customerService.getList({maxResultCount:1e3}).subscribe(t=>{this.customerList=t?.items,this.isSort=!1})}getPlanName(){this._planServices.getPlanName().subscribe(t=>{this.planList=t,this.planList.unshift({name:"All"})})}getCustomerList(){this._customerService.getList({maxResultCount:1e3}).subscribe(t=>{this.customerList=t?.items,this.totalCustomer=t?.totalCount})}addEditCustomer(t,i,a){this.isEdit="edit"===a;const l={id:t?.id,customerKey:t?.customerKey,name:t?.name,email:t?.email,phone:t?.phone,description:t?.description,customerStatus:t?.customerStatus,photo:t?.photo,customerSince:t?.customerSince,joinedSubnow:t?.joinedSubnow,preferredLanguage:t?.preferredLanguage,vatid:t?.vatid,companyRegistryNumber:t?.companyRegistryNumber,address:t?.address,isBusiness:t?.isBusiness,city:t?.city,stateProvince:t?.stateProvince,countryId:t?.countryId,tags:t?.tags,customerSource:t?.customerSource},u=this.modalService.open(D,{fullscreen:!0,windowClass:"custom-modal"});u.componentInstance.customer=l,u.componentInstance.isEdit=this.isEdit,u.result.then(g=>{this.getCustomerList()}),u.closed.subscribe(g=>{g&&("number"==typeof i?(this.customerList?.splice(i,1,g),this.isEdit=!0):this.customerList?.push(this.customerList))}).unsubscribe()}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(C),e.Y36(Q.D),e.Y36(s.qu))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-customer-list"]],decls:37,vars:27,consts:[[1,"customer"],[1,"section-header","border-0","pb-0"],[3,"title"],[1,"section-header-actions"],[1,"btn","btn-primary",3,"click"],[1,"fa-regular","fa-plus"],[1,"section-body"],[1,"total-customer"],[1,"name"],[1,"info"],[1,"table-filter-wrapper"],[1,"filter"],[1,"form","row","g-0",3,"formGroup"],[1,"col-lg-4","col-md-6"],[1,"form-label"],[1,"input-search"],[1,"icon","fa-search","fa-solid"],["type","text","formControlName","searchTerm",1,"form-control",3,"placeholder","input"],[1,"col-lg-2","col-md-6"],["formControlName","plan","bindLabel","name","bindValue","name",1,"select-dot",3,"items","placeholder","clearable"],["ng-label-tmp",""],[4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"dot","text-primary"],[1,"fa-solid","fa-circle"],[1,"table-responsive"],[1,"rounded-table"],[1,"rounded-table-head"],[1,"rounded-table-head-row"],["width","386",1,"rounded-table-head-cell"],[1,"sort-cell"],["class","sort fa-solid fa-arrow-down",3,"click",4,"ngIf"],["class","sort fa-solid fa-arrow-up",3,"click",4,"ngIf"],["width","210",1,"rounded-table-head-cell"],["width","140",1,"rounded-table-head-cell"],["width","160",1,"rounded-table-head-cell"],["width","70",1,"rounded-table-head-cell"],[1,"rounded-table-body"],["class","rounded-table-body-row",4,"ngFor","ngForOf"],[1,"sort","fa-solid","fa-arrow-down",3,"click"],[1,"sort","fa-solid","fa-arrow-up",3,"click"],[1,"rounded-table-body-row"],[1,"rounded-table-body-cell"],[1,"cell-name"],[1,"avatar"],[1,"code"],[1,"rounded-table-body-cell","cell-action"],[3,"click"],[1,"fa-solid","fa-pen"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"div",1),e._UZ(2,"app-page-title-standalone",2),e.ALo(3,"abpLocalization"),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return a.addEditCustomer()}),e._UZ(6,"i",5),e.TgZ(7,"span"),e._uU(8),e.ALo(9,"abpLocalization"),e.qZA()()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"p",8),e._uU(13),e.ALo(14,"abpLocalization"),e.qZA(),e.TgZ(15,"span",9),e._uU(16),e.qZA()(),e.TgZ(17,"div",10)(18,"div",11)(19,"form",12)(20,"div",13)(21,"label",14),e._uU(22),e.ALo(23,"abpLocalization"),e.qZA(),e.TgZ(24,"div",15),e._UZ(25,"i",16),e.TgZ(26,"input",17),e.NdJ("input",function(u){return a.onChangeFilter(u)}),e.ALo(27,"abpLocalization"),e.qZA()()(),e.TgZ(28,"div",18)(29,"label",14),e._uU(30),e.ALo(31,"abpLocalization"),e.qZA(),e.TgZ(32,"ng-select",19),e.ALo(33,"abpLocalization"),e.YNc(34,B,5,1,"ng-template",20),e.qZA()()()(),e.YNc(35,R,2,0,"div",21)(36,W,23,15,"div",22),e.qZA()()()),2&i&&(e.xp6(2),e.s9C("title",e.lcZ(3,13,"General::customers")),e.xp6(6),e.Oqu(e.lcZ(9,15,"General::addCustomer")),e.xp6(5),e.Oqu(e.lcZ(14,17,"General::totalCustomerAccounts")),e.xp6(3),e.Oqu(a.totalCustomer),e.xp6(3),e.Q6J("formGroup",a.form),e.xp6(3),e.Oqu(e.lcZ(23,19,"General::searchForOrder")),e.xp6(4),e.s9C("placeholder",e.lcZ(27,21,"General::search")),e.xp6(4),e.Oqu(e.lcZ(31,23,"General::plan")),e.xp6(2),e.s9C("placeholder",e.lcZ(33,25,"General::plan")),e.Q6J("items",a.planList)("clearable",!1),e.xp6(3),e.Q6J("ngIf",!a.customerList.length),e.xp6(),e.Q6J("ngIf",a.customerList.length))},dependencies:[m.sg,m.O5,j.P,A.G,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,f.hL,f.J5,h.w9,h.mR,d.mh,m.uU,p.fuE]})}return o})()}]}];let ee=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[b.Bz.forChild(X),b.Bz]})}return o})();var te=r(6208);let oe=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[m.ez,ee,A.G,te.m]})}return o})()}}]);