"use strict";(self.webpackChunkSubNow=self.webpackChunkSubNow||[]).push([[809],{3741:(_,f,i)=>{i.d(f,{y:()=>G});var e=i(9212),r=i(95),c=i(6806),n=i(2386),y=i(4716);function u(a){let m=a,t=m.indexOf(" ");return m.substring(t+1)}var s=i(2351),p=i(8692),h=i(9290),d=i(7757),v=i(2425),b=i(6814),Z=i(1411),A=i(4807),L=i(3593);function S(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"div",41)(1,"div",42)(2,"div",43)(3,"a",44),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.closeModal())}),e._UZ(4,"i",45),e.qZA(),e.TgZ(5,"h2",46)(6,"span"),e._uU(7),e.qZA()(),e._UZ(8,"div"),e.qZA()()()}if(2&a){const t=e.oxw();e.xp6(7),e.Oqu(t.customerName)}}function O(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"i",47),e.NdJ("click",function(){e.CHM(t),e.oxw();const l=e.MAs(48);return e.KtG(l.toggle())}),e.qZA()}if(2&a){e.oxw();const t=e.MAs(48);e.uIk("aria-expanded",t.isOpen)}}function E(a,m){if(1&a&&e._UZ(0,"i",48),2&a){e.oxw();const t=e.MAs(48);e.uIk("aria-expanded",t.isOpen)}}function N(a,m){if(1&a&&(e.TgZ(0,"div",49)(1,"span",50),e._uU(2),e.qZA(),e.TgZ(3,"span",51),e._uU(4),e.qZA()()),2&a){const t=m.item;e.xp6(2),e.Oqu(null==t?null:t.code),e.xp6(2),e.Oqu(null==t?null:t.name)}}function D(a,m){1&a&&(e.TgZ(0,"div",52)(1,"div",9)(2,"label",10),e._uU(3),e.ALo(4,"abpLocalization"),e.qZA(),e.TgZ(5,"div",11),e._UZ(6,"input",53)(7,"i",13),e.ALo(8,"abpLocalization"),e.qZA()()()),2&a&&(e.xp6(3),e.Oqu(e.lcZ(4,2,"General::companyRegistrationNumber")),e.xp6(4),e.s9C("ngbTooltip",e.lcZ(8,4,"General::companyRegistrationNumberTooltip")))}function I(a,m){1&a&&(e.TgZ(0,"div",8)(1,"div",9)(2,"label",10),e._uU(3),e.ALo(4,"abpLocalization"),e.qZA(),e.TgZ(5,"div",11),e._UZ(6,"input",54)(7,"i",13),e.ALo(8,"abpLocalization"),e.qZA()()()),2&a&&(e.xp6(3),e.Oqu(e.lcZ(4,2,"General::taxID")),e.xp6(4),e.s9C("ngbTooltip",e.lcZ(8,4,"General::taxIDTooltip")))}function q(a,m){if(1&a&&(e.TgZ(0,"div",55),e._UZ(1,"img",56),e.TgZ(2,"span",51),e._uU(3),e.qZA()()),2&a){const t=m.item;e.xp6(),e.Q6J("src",null==t?null:t.flagUrl,e.LSH),e.xp6(2),e.Oqu(null==t?null:t.name)}}function U(a,m){if(1&a&&(e.TgZ(0,"div",55),e._UZ(1,"img",56),e.TgZ(2,"span",51),e._uU(3),e.qZA()()),2&a){const t=m.item;e.xp6(),e.Q6J("src",null==t?null:t.flagUrl,e.LSH),e.xp6(2),e.Oqu(null==t?null:t.name)}}const M=(a,m)=>({container:a,"custom-padding":m}),x=()=>({dateInputFormat:"DD/MM/YYYY"}),P=(a,m)=>[a,m];let G=(()=>{class a{constructor(t,g,l,C,T,z,F,B){this._fb=t,this._categoryService=g,this._customerService=l,this._countryService=C,this._localizationService=T,this.toastr=z,this.calendar=F,this.cd=B,this.formValid=new e.vpe,this.type="customer",this.activeModal=(0,e.f3M)(c.Kz),this.isLoading=!1,this.active=1,this.SearchCountryField=n.wX,this.CountryISO=n.HT,this.PhoneNumberFormat=n.M9.International,this.preferredCountries=[n.HT.SaudiArabia],this.countries=[],this.phoneInitiated=!1,this.languageList=[],this.countryList=[],this.disabledButton=!1,this.isDisabled=!1}ngOnInit(){this.initForm(),this.languageList=[{id:"0",code:"EN",name:"English"},{id:"1",code:"AR",name:"Arabic"}],this.getOnlyCountries(),this.getCountryList(),this.isMoreDetails&&this._customerService.get(this.customerId).subscribe(t=>{this.customerName=t?.name,this.form=this._fb.group({name:[{value:t?.name,disabled:!0}],customerKey:[{value:t?.customerKey,disabled:!0}],email:[{value:t?.email,disabled:!0}],phone:[{value:u(t?.phone),disabled:!0}],description:[{value:t?.description,disabled:!0}],customerStatus:[{value:t?.customerStatus,disabled:!0}],photo:[{value:t?.photo,disabled:!0}],customerSince:[{value:new Date(t?.customerSince),disabled:!0}],joinedSubnow:[{value:new Date(t?.joinedSubnow),disabled:!0}],preferredLanguage:[{value:t?.preferredLanguage,disabled:!0}],vatid:[{value:t?.vatid,disabled:!0}],companyRegistryNumber:[{value:t?.companyRegistryNumber,disabled:!0}],address:[{value:t?.address,disabled:!0}],isBusiness:[{value:t?.isBusiness,disabled:!0}],city:[{value:t?.city,disabled:!0}],stateProvince:[{value:t?.stateProvince,disabled:!0}],countryId:[{value:t?.countryId,disabled:!0}],tags:[{value:t?.tags,disabled:!0}],customerSource:[{value:t?.customerSource,disabled:!0}]})}),this.form.statusChanges.subscribe(()=>{this.formValid.emit(this.form.valid)}),this.form?.controls.customerSince.setValue(void 0===this.customer?.customerSince?"":new Date(this.customer?.customerSince))}getOnlyCountries(){this.countries=Object.keys(n.HT).map(t=>n.HT[t]).filter(t=>"il"!=t&&"ir"!=t)}getCountryList(){this._countryService.getAll().subscribe(t=>{this.countryList=t?.items,this.selectedCity=!0===this.isEdit?this.countryList?.filter(g=>g?.id===this.customer?.countryId)[0]?.id:this.countryList?.filter(g=>"fbc691ae-a106-42d6-bb86-467bbde9b8a7"===g?.id)[0]?.id})}initForm(){this.form=this._fb.group(!0===this.isEdit?{name:[this.customer?.name,r.Validators.required],customerKey:[{value:this.customer?.customerKey,disabled:!0},r.Validators.required],email:[this.customer?.email],phone:[u(this.customer?.phone)],description:[this.customer?.description,r.Validators.maxLength(250)],customerStatus:[this.customer?.customerStatus],photo:[this.customer?.photo],customerSince:[{value:new Date(this.customer?.customerSince),disabled:!0}],joinedSubnow:[{value:new Date(this.customer?.joinedSubnow),disabled:!0}],preferredLanguage:[this.customer?.preferredLanguage],vatid:[this.customer?.vatid],companyRegistryNumber:[this.customer?.companyRegistryNumber],address:[this.customer?.address],isBusiness:[this.customer?.isBusiness],city:[this.customer?.city],stateProvince:[this.customer?.stateProvince],countryId:[this?.customer?.countryId],tags:[this.customer?.tags],customerSource:[this.customer?.customerSource]}:{name:[this.customer?.name,r.Validators.required],customerKey:[this.customer?.customerKey,r.Validators.required],email:[this.customer?.email,r.Validators.email],phone:[this?.customer?.phone],description:[this.customer?.description,r.Validators.maxLength(250)],customerStatus:[0],photo:[""],customerSince:[null],joinedSubnow:[{value:new Date,disabled:!0}],preferredLanguage:["English"],vatid:["0"],companyRegistryNumber:["0"],address:[this.customer?.address],isBusiness:[!1],city:[this.customer?.city],stateProvince:[this.customer?.stateProvince],countryId:[this?.customer?.countryId],tags:[""],customerSource:[0]})}closeModal(){this.activeModal.close()}createEditCustomer(){if(!this.form)return;const{id:t}=this?.customer||{},g={customerKey:this.form.get("customerKey").value,name:this.form.get("name").value,email:this.form.get("email").value,phone:this.form.get("phone").value?.internationalNumber,description:this.form.get("description").value,customerStatus:this.form.get("customerStatus").value,photo:this.form.get("photo").value,customerSince:this.form.get("customerSince").value,joinedSubnow:this.form.get("joinedSubnow").value,preferredLanguage:this.form.get("preferredLanguage").value,vatid:this.form.get("vatid").value,companyRegistryNumber:this.form.get("companyRegistryNumber").value,address:this.form.get("address").value,isBusiness:this.form.get("isBusiness").value,city:this.form.get("city").value,stateProvince:this.form.get("stateProvince").value,countryId:this.form.get("countryId").value,tags:this.form.get("tags").value,customerSource:this.form.get("customerSource").value},l={id:t,name:this.form.get("name").value,email:this.form.get("email").value,phone:this.form.get("phone").value?.internationalNumber,description:this.form.get("description").value,customerStatus:this.form.get("customerStatus").value,photo:this.form.get("photo").value,preferredLanguage:this.form.get("preferredLanguage").value,vatid:this.form.get("vatid").value,companyRegistryNumber:this.form.get("companyRegistryNumber").value,address:this.form.get("address").value,isBusiness:this.form.get("isBusiness").value,city:this.form.get("city").value,stateProvince:this.form.get("stateProvince").value,countryId:this.form.get("countryId").value,tags:this.form.get("tags").value,customerSource:this.form.get("customerSource").value};(t?this._customerService.update(l):this._customerService.create(g)).pipe((0,y.x)(()=>this.isLoading=!1)).subscribe(C=>{this.toastr.success(this._localizationService.instant(t?"General::customerEditMsg":"General::customerAddMsg"),"",{timeOut:1e3}),this.activeModal.close(C)})}ngAfterViewInit(){if(this.cd.detectChanges(),this.countryList&&this.countryList.length>0){const t=this.countryList.filter(g=>g.id===(this.isEdit?this.customer?.countryId:"fbc691ae-a106-42d6-bb86-467bbde9b8a7"));t.length>0?this.selectedCity=t[0].id:(console.warn("No matching country found"),this.selectedCity=this.countryList[0].id)}}static#e=this.\u0275fac=function(g){return new(g||a)(e.Y36(r.qu),e.Y36(s.H),e.Y36(p.v),e.Y36(h.T),e.Y36(d.oQ8),e.Y36(v._W),e.Y36(c.vL),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-edit-customer"]],inputs:{customer:"customer",isEdit:"isEdit",isMoreDetails:"isMoreDetails",customerId:"customerId"},outputs:{formValid:"formValid"},decls:150,vars:118,consts:[["class","modal-header",4,"ngIf"],[3,"ngClass"],[1,"form","section-form",3,"formGroup"],[1,"row","g-0","pb-32","border-bottom"],[1,"col-lg-3","col-md-12"],[1,"form-name"],[1,"col-lg-9","col-md-12"],[1,"row"],[1,"col-lg-8","col-md-12"],[1,"form-group"],[1,"form-label"],[1,"control-icon"],["formControlName","name","id","name","placeholder","Mike Johnson","type","text","required","",1,"form-control"],["tooltipClass","custom-tooltip","placement","top","container","body",1,"icon","fa-regular","fa-circle-question",3,"ngbTooltip"],["formControlName","customerKey","id","customerKey","placeholder","MikeJohnson@gmail.com","type","text","required","",1,"form-control",3,"keydown.space"],[1,"control-hint"],["formControlName","description","id","description","rows","2",1,"form-control",3,"placeholder"],[1,"col-lg-6","col-md-12"],[1,"form-group","mb-0"],["type","text","placeholder","dd/mm/yyyy","bsDatepicker","","formControlName","customerSince",1,"form-control",3,"bsConfig"],["customerSince","bsDatepicker"],["class","fa-regular fa-calendar icon",3,"click",4,"ngIf"],["class","fa-regular fa-calendar icon",4,"ngIf"],["type","text","placeholder","dd/mm/yyyy","bsDatepicker","","formControlName","joinedSubnow",1,"form-control",3,"bsConfig"],[1,"icon"],[1,"fa-regular","fa-calendar"],["formControlName","email","id","email","placeholder","MikeJohnson@gmail.com","type","email",1,"form-control"],["name","phone","formControlName","phone","id","phone",3,"cssClass","preferredCountries","onlyCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode"],["formControlName","preferredLanguage","bindLabel","name","bindValue","name",1,"select-lang",3,"items","placeholder","clearable"],["ng-label-tmp",""],[1,"form-check","form-switch","customer-check"],["type","checkbox","id","isABusiness","formControlName","isBusiness",1,"form-check-input"],["for","isABusiness",1,"form-check-label"],["class","mt-16 col-lg-8 col-md-12",4,"ngIf"],["class","col-lg-8 col-md-12",4,"ngIf"],[1,"row","g-0"],["formControlName","address","id","address","placeholder","100 Smith Street","type","text",1,"form-control"],["formControlName","city","id","city","type","text",1,"form-control",3,"placeholder"],["formControlName","stateProvince","id","stateProvince","type","text",1,"form-control",3,"placeholder"],["formControlName","countryId","bindLabel","name","bindValue","id",1,"select-country",3,"items","placeholder","clearable"],["ng-option-tmp",""],[1,"modal-header"],[1,"container"],[1,"modal-header-wrapper"],[1,"modal-close",3,"click"],[1,"fa","fa-xmark"],[1,"title"],[1,"fa-regular","fa-calendar","icon",3,"click"],[1,"fa-regular","fa-calendar","icon"],[1,"info"],[1,"code"],[1,"name"],[1,"mt-16","col-lg-8","col-md-12"],["formControlName","companyRegistryNumber","id","companyRegistryNumber","type","text",1,"form-control"],["formControlName","vatid","id","vatid","type","text",1,"form-control"],[1,"country"],[1,"img-fluid",3,"src"]],template:function(g,l){1&g&&(e.YNc(0,S,9,1,"div",0),e.TgZ(1,"div",1)(2,"form",2)(3,"div",3)(4,"div",4)(5,"p",5),e._uU(6),e.ALo(7,"abpLocalization"),e.qZA()(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"label",10),e._uU(13),e.ALo(14,"abpLocalization"),e.TgZ(15,"sup"),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"div",11),e._UZ(18,"input",12)(19,"i",13),e.ALo(20,"abpLocalization"),e.qZA()()(),e.TgZ(21,"div",8)(22,"div",9)(23,"label",10),e._uU(24),e.ALo(25,"abpLocalization"),e.TgZ(26,"sup"),e._uU(27,"*"),e.qZA()(),e.TgZ(28,"input",14),e.NdJ("keydown.space",function(T){return T.preventDefault()}),e.qZA(),e.TgZ(29,"span",15),e._uU(30),e.ALo(31,"abpLocalization"),e.qZA()()(),e.TgZ(32,"div",8)(33,"div",9)(34,"label",10),e._uU(35),e.ALo(36,"abpLocalization"),e.qZA(),e._UZ(37,"textarea",16),e.ALo(38,"abpLocalization"),e.qZA()(),e.TgZ(39,"div",8)(40,"div",7)(41,"div",17)(42,"div",18)(43,"label",10),e._uU(44),e.ALo(45,"abpLocalization"),e.qZA(),e.TgZ(46,"div",11),e._UZ(47,"input",19,20),e.YNc(49,O,1,1,"i",21)(50,E,1,1,"i",22),e.qZA()()(),e.TgZ(51,"div",17)(52,"div",18)(53,"label",10),e._uU(54),e.ALo(55,"abpLocalization"),e.qZA(),e.TgZ(56,"div",11),e._UZ(57,"input",23),e.TgZ(58,"i",24),e._UZ(59,"i",25),e.qZA()()()()()()()()(),e.TgZ(60,"div",3)(61,"div",4)(62,"p",5),e._uU(63),e.ALo(64,"abpLocalization"),e.qZA()(),e.TgZ(65,"div",6)(66,"div",7)(67,"div",8)(68,"div",9)(69,"label",10),e._uU(70),e.ALo(71,"abpLocalization"),e.qZA(),e.TgZ(72,"div",11),e._UZ(73,"input",26)(74,"i",13),e.ALo(75,"abpLocalization"),e.qZA(),e.TgZ(76,"span",15),e._uU(77),e.ALo(78,"abpLocalization"),e.qZA()()(),e.TgZ(79,"div",8)(80,"div",9)(81,"label",10),e._uU(82),e.ALo(83,"abpLocalization"),e.qZA(),e.TgZ(84,"div",11),e._UZ(85,"ngx-intl-tel-input",27)(86,"i",13),e.ALo(87,"abpLocalization"),e.qZA(),e.TgZ(88,"span",15),e._uU(89),e.ALo(90,"abpLocalization"),e.qZA()()(),e.TgZ(91,"div",8)(92,"div",9)(93,"label",10),e._uU(94),e.ALo(95,"abpLocalization"),e.qZA(),e.TgZ(96,"ng-select",28),e.ALo(97,"abpLocalization"),e.YNc(98,N,5,2,"ng-template",29),e.qZA()()()()()(),e.TgZ(99,"div",3)(100,"div",4)(101,"p",5),e._uU(102),e.ALo(103,"abpLocalization"),e.qZA()(),e.TgZ(104,"div",6)(105,"div",7)(106,"div",8)(107,"div",30),e._UZ(108,"input",31),e.TgZ(109,"label",32),e._uU(110),e.ALo(111,"abpLocalization"),e.qZA()()(),e.YNc(112,D,9,6,"div",33)(113,I,9,6,"div",34),e.qZA()()(),e.TgZ(114,"div",35)(115,"div",4)(116,"p",5),e._uU(117),e.ALo(118,"abpLocalization"),e.qZA()(),e.TgZ(119,"div",6)(120,"div",7)(121,"div",8)(122,"div",9)(123,"label",10),e._uU(124),e.ALo(125,"abpLocalization"),e.qZA(),e._UZ(126,"input",36),e.qZA()(),e.TgZ(127,"div",8)(128,"div",9)(129,"label",10),e._uU(130),e.ALo(131,"abpLocalization"),e.qZA(),e._UZ(132,"input",37),e.ALo(133,"abpLocalization"),e.qZA()(),e.TgZ(134,"div",8)(135,"div",9)(136,"label",10),e._uU(137),e.ALo(138,"abpLocalization"),e.qZA(),e._UZ(139,"input",38),e.ALo(140,"abpLocalization"),e.qZA()(),e.TgZ(141,"div",8)(142,"div",18)(143,"label",10),e._uU(144),e.ALo(145,"abpLocalization"),e.qZA(),e.TgZ(146,"ng-select",39),e.ALo(147,"abpLocalization"),e.YNc(148,q,4,2,"ng-template",29)(149,U,4,2,"ng-template",40),e.qZA()()()()()()()()),2&g&&(e.Q6J("ngIf",l.isMoreDetails),e.xp6(),e.Q6J("ngClass",e.WLB(110,M,l.isMoreDetails,l.isMoreDetails)),e.xp6(),e.Q6J("formGroup",l.form),e.xp6(4),e.Oqu(e.lcZ(7,54,"General::mainInfo")),e.xp6(7),e.Oqu(e.lcZ(14,56,"General::customerName")),e.xp6(6),e.s9C("ngbTooltip",e.lcZ(20,58,"General::customerName")),e.xp6(5),e.Oqu(e.lcZ(25,60,"General::customerKey")),e.xp6(6),e.Oqu(e.lcZ(31,62,"General::customerKeyHint")),e.xp6(5),e.Oqu(e.lcZ(36,64,"General::customerDescription")),e.xp6(2),e.s9C("placeholder",e.lcZ(38,66,"General::customerDescriptionPlaceholder")),e.xp6(7),e.Oqu(e.lcZ(45,68,"General::customerSince")),e.xp6(3),e.Q6J("bsConfig",e.DdM(113,x)),e.xp6(2),e.Q6J("ngIf",!l.isEdit),e.xp6(),e.Q6J("ngIf",l.isEdit),e.xp6(4),e.Oqu(e.lcZ(55,70,"General::joinedSubnowOn")),e.xp6(3),e.Q6J("bsConfig",e.DdM(114,x)),e.xp6(6),e.Oqu(e.lcZ(64,72,"General::contactInfo")),e.xp6(7),e.Oqu(e.lcZ(71,74,"General::customerEmail")),e.xp6(4),e.s9C("ngbTooltip",e.lcZ(75,76,"General::customerEmailTooltip")),e.xp6(3),e.Oqu(e.lcZ(78,78,"General::customerEmailHint")),e.xp6(5),e.Oqu(e.lcZ(83,80,"General::customerPhone")),e.xp6(3),e.Q6J("cssClass","custom-tel-input")("preferredCountries",l.preferredCountries)("onlyCountries",l.countries)("enableAutoCountrySelect",!0)("enablePlaceholder",!0)("cssClass","form-control")("searchCountryFlag",!0)("searchCountryField",e.WLB(115,P,l.SearchCountryField.Iso2,l.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",l.CountryISO.SaudiArabia)("maxLength",20)("phoneValidation",!0)("separateDialCode",!0),e.xp6(),e.s9C("ngbTooltip",e.lcZ(87,82,"General::customerPhoneTooltip")),e.xp6(3),e.Oqu(e.lcZ(90,84,"General::customerPhoneHint")),e.xp6(5),e.Oqu(e.lcZ(95,86,"General::preferredLanguage")),e.xp6(2),e.s9C("placeholder",e.lcZ(97,88,"General::preferredLanguage")),e.Q6J("items",l.languageList)("clearable",!1),e.xp6(6),e.Oqu(e.lcZ(103,90,"General::mainInfo")),e.xp6(8),e.Oqu(e.lcZ(111,92,"General::isABusiness")),e.xp6(2),e.Q6J("ngIf",l.form.get("isBusiness").value),e.xp6(),e.Q6J("ngIf",l.form.get("isBusiness").value),e.xp6(4),e.Oqu(e.lcZ(118,94,"General::address")),e.xp6(7),e.Oqu(e.lcZ(125,96,"General::address")),e.xp6(6),e.Oqu(e.lcZ(131,98,"General::city")),e.xp6(2),e.s9C("placeholder",e.lcZ(133,100,"General::city")),e.xp6(5),e.Oqu(e.lcZ(138,102,"General::stateProvince")),e.xp6(2),e.s9C("placeholder",e.lcZ(140,104,"General::state")),e.xp6(5),e.Oqu(e.lcZ(145,106,"General::country")),e.xp6(2),e.s9C("placeholder",e.lcZ(147,108,"General::country")),e.Q6J("items",l.countryList)("clearable",!1))},dependencies:[b.mk,b.O5,r._Y,r.Fj,r.Wl,r.JJ,r.JL,r.Q7,r.sg,r.u,Z.hL,Z.J5,c._L,A.w9,A.ir,A.mR,n.FV,n.mh,L.Np,L.Y5,d.fuE],styles:[".custom-padding[_ngcontent-%COMP%]{padding-top:122px;padding-bottom:48px}"]})}return a})()},2351:(_,f,i)=>{i.d(f,{H:()=>c});var e=i(9212),r=i(7757);let c=(()=>{class n{constructor(u){this.restService=u,this.apiName="Default",this.create=(o,s)=>this.restService.request({method:"POST",url:"/api/app/category",body:o},{apiName:this.apiName,...s}),this.delete=(o,s)=>this.restService.request({method:"DELETE",url:`/api/app/category/${o}`},{apiName:this.apiName,...s}),this.get=(o,s)=>this.restService.request({method:"GET",url:`/api/app/category/${o}`},{apiName:this.apiName,...s}),this.getAllByCompanyId=o=>this.restService.request({method:"GET",url:"/api/app/category/by-company-id"},{apiName:this.apiName,...o}),this.update=(o,s,p)=>this.restService.request({method:"PUT",url:`/api/app/category/${o}`,body:s},{apiName:this.apiName,...p})}static#e=this.\u0275fac=function(o){return new(o||n)(e.LFG(r.vgb))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},8692:(_,f,i)=>{i.d(f,{v:()=>c});var e=i(9212),r=i(7757);let c=(()=>{class n{constructor(u){this.restService=u,this.apiName="Default",this.create=(o,s)=>this.restService.request({method:"POST",url:"/api/app/customer",body:o},{apiName:this.apiName,...s}),this.delete=(o,s)=>this.restService.request({method:"DELETE",url:`/api/app/customer/${o}`},{apiName:this.apiName,...s}),this.get=(o,s)=>this.restService.request({method:"GET",url:`/api/app/customer/${o}`},{apiName:this.apiName,...s}),this.getCompanyCustomers=o=>this.restService.request({method:"GET",url:"/api/app/customer/company-customers"},{apiName:this.apiName,...o}),this.getFilteredCustomers=(o,s)=>this.restService.request({method:"GET",url:"/api/app/customer/filtered-customers",params:{status:o.status,plan:o.plan,searchTerm:o.searchTerm}},{apiName:this.apiName,...s}),this.getList=(o,s)=>this.restService.request({method:"GET",url:"/api/app/customer",params:{sorting:o.sorting,skipCount:o.skipCount,maxResultCount:o.maxResultCount}},{apiName:this.apiName,...s}),this.update=(o,s)=>this.restService.request({method:"PUT",url:"/api/app/customer",body:o},{apiName:this.apiName,...s})}static#e=this.\u0275fac=function(o){return new(o||n)(e.LFG(r.vgb))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},9290:(_,f,i)=>{i.d(f,{T:()=>c});var e=i(9212),r=i(7757);let c=(()=>{class n{constructor(u){this.restService=u,this.apiName="Default",this.getAll=o=>this.restService.request({method:"GET",url:"/api/app/country"},{apiName:this.apiName,...o})}static#e=this.\u0275fac=function(o){return new(o||n)(e.LFG(r.vgb))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},7956:(_,f,i)=>{i.d(f,{G:()=>y});var e=i(6814),r=i(2999),c=i(9212),n=i(7757);let y=(()=>{class u{static#e=this.\u0275fac=function(p){return new(p||u)};static#t=this.\u0275cmp=c.Xpm({type:u,selectors:[["app-not-found-data-standalone"]],standalone:!0,features:[c.jDz],decls:6,vars:3,consts:[[1,"notFound-wrapper"],["src","assets/images/not-found.svg","alt","not-found-item",1,"notFound-img","img-fluid"],[1,"notFound-title"]],template:function(p,h){1&p&&(c.TgZ(0,"div",0),c._UZ(1,"img",1),c.TgZ(2,"div")(3,"h1",2),c._uU(4),c.ALo(5,"abpLocalization"),c.qZA()()()),2&p&&(c.xp6(4),c.Oqu(c.lcZ(5,1,"General::notFound")))},dependencies:[e.ez,r.m,n.fuE]})}return u})()},5668:(_,f,i)=>{i.d(f,{P:()=>r});var e=i(9212);let r=(()=>{class c{static#e=this.\u0275fac=function(u){return new(u||c)};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-page-title-standalone"]],inputs:{title:"title",description:"description"},standalone:!0,features:[e.jDz],decls:5,vars:2,consts:[[1,"page-title"],[1,"title"],[1,"description"]],template:function(u,o){1&u&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"p",2),e._uU(4),e.qZA()()),2&u&&(e.xp6(2),e.Oqu(o.title),e.xp6(2),e.Oqu(o.description))}})}return c})()},342:(_,f,i)=>{i.d(f,{TU:()=>n});var e=i(6814),r=i(9212);class c{constructor(p,h){this._document=h;const d=this._textarea=this._document.createElement("textarea"),v=d.style;v.position="fixed",v.top=v.opacity="0",v.left="-999em",d.setAttribute("aria-hidden","true"),d.value=p,d.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(d)}copy(){const p=this._textarea;let h=!1;try{if(p){const d=this._document.activeElement;p.select(),p.setSelectionRange(0,p.value.length),h=this._document.execCommand("copy"),d&&d.focus()}}catch{}return h}destroy(){const p=this._textarea;p&&(p.remove(),this._textarea=void 0)}}let n=(()=>{class s{constructor(h){this._document=h}copy(h){const d=this.beginCopy(h),v=d.copy();return d.destroy(),v}beginCopy(h){return new c(h,this._document)}static#e=this.\u0275fac=function(d){return new(d||s)(r.LFG(e.K0))};static#t=this.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);