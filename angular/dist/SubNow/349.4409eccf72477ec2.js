"use strict";(self.webpackChunkSubNow=self.webpackChunkSubNow||[]).push([[349],{8349:(ae,v,r)=>{r.r(v),r.d(v,{PlansModule:()=>te});var h=r(2236),e=r(9212);let P=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-plans"]],decls:1,vars:0,template:function(i,l){1&i&&e._UZ(0,"router-outlet")},dependencies:[h.lC]})}return a})();var d=r(7757),_=function(a){return a[a.Active=0]="Active",a[a.Cancelled=1]="Cancelled",a[a.Future=2]="Future",a[a.Paused=3]="Paused",a[a.NonRenewing=4]="NonRenewing",a[a.Trial=5]="Trial",a[a.Expired=6]="Expired",a}(_||{});(0,d.Uoq)(_);var p=function(a){return a[a.Active=0]="Active",a[a.Disabled=1]="Disabled",a[a.Paused=2]="Paused",a}(p||{});(0,d.Uoq)(p);var L=function(a){return a[a.FixedPrice=0]="FixedPrice",a[a.DynamicPrice=1]="DynamicPrice",a}(L||{});(0,d.Uoq)(L);var A=function(a){return a[a.AutoRenew=0]="AutoRenew",a[a.ExpireSubscription=1]="ExpireSubscription",a}(A||{});(0,d.Uoq)(A);var m=r(6806),n=r(95),y=r(4716),T=r(2351),x=r(2425),b=r(1411),C=r(2386);let E=(()=>{class a{constructor(t,i,l,o){this._fb=t,this._categoryService=i,this.toastr=l,this._localizationService=o,this.activeModal=(0,e.f3M)(m.Kz),this.isLoading=!1,this.initForm()}ngOnInit(){this.initForm(),this.form.get("status").valueChanges.subscribe(t=>{this.updateStatus=t})}initForm(){this.form=this._fb.group({name:[this.category?.name,n.Validators.required],description:[this.category?.description,n.Validators.required],status:[this?.category?.status]})}createEditCategory(){if(!this.form)return;const{id:t}=this.category||{},i={name:this.form.controls.name?.value,description:this.form.controls.description?.value,status:this.updateStatus};(t?this._categoryService.update(t,i):this._categoryService.create(i)).pipe((0,y.x)(()=>this.isLoading=!1)).subscribe(l=>{this.toastr.success(this._localizationService.instant(t?"General::categoryEditMsg":"General::categoryAddMsg"),"",{timeOut:1e3}),this.activeModal.close(l)})}closeModal(){this.activeModal.close()}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(n.qu),e.Y36(T.H),e.Y36(x._W),e.Y36(d.oQ8))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-edit-categories-modal"]],inputs:{category:"category"},decls:44,vars:26,consts:[[1,"modal-header"],[1,"container"],[1,"modal-header-wrapper"],[1,"modal-close",3,"click"],[1,"fa","fa-xmark"],[1,"title"],["type","submit",1,"btn","btn-save",3,"disabled","click"],[1,"modal-body"],[1,"modal-body-wrapper"],[1,"row"],[1,"col-lg-3","col-md-4"],[1,"form-name"],[1,"col-lg-9","col-md-8"],[1,"form","row",3,"formGroup"],[1,"col-lg-8","col-md-6"],[1,"form-group"],[1,"form-label"],[1,"control-icon"],["formControlName","name","id","name","type","text","required","",1,"form-control",3,"placeholder"],["tooltipClass","custom-tooltip","placement","top","ngbTooltip","Tooltip on top",1,"icon","fa-regular","fa-circle-question"],[1,"form-group","mb-0"],["formControlName","description","id","description","rows","2","required","",1,"form-control",3,"placeholder"],[1,"form-check","form-switch","form-divider","mt-16","pt-16"],["type","checkbox","id","status","formControlName","status",1,"form-check-input"],["for","status",1,"form-check-label"]],template:function(i,l){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e.NdJ("click",function(){return l.closeModal()}),e._UZ(4,"i",4),e.qZA(),e.TgZ(5,"h2",5),e._uU(6),e.ALo(7,"abpLocalization"),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){return l.createEditCategory()}),e.TgZ(9,"span"),e._uU(10),e.ALo(11,"abpLocalization"),e.qZA()()()()(),e.TgZ(12,"div",7)(13,"div",1)(14,"div",8)(15,"div",9)(16,"div",10)(17,"p",11),e._uU(18),e.ALo(19,"abpLocalization"),e.qZA()(),e.TgZ(20,"div",12)(21,"form",13)(22,"div",14)(23,"div",15)(24,"label",16),e._uU(25),e.ALo(26,"abpLocalization"),e.qZA(),e.TgZ(27,"div",17),e._UZ(28,"input",18),e.ALo(29,"abpLocalization"),e._UZ(30,"i",19),e.qZA()()(),e.TgZ(31,"div",14)(32,"div",20)(33,"label",16),e._uU(34),e.ALo(35,"abpLocalization"),e.qZA(),e._UZ(36,"textarea",21),e.ALo(37,"abpLocalization"),e.qZA()(),e.TgZ(38,"div",14)(39,"div",22),e._UZ(40,"input",23),e.TgZ(41,"label",24),e._uU(42),e.ALo(43,"abpLocalization"),e.qZA()()()()()()()()()),2&i&&(e.xp6(6),e.Oqu(e.lcZ(7,10,"General::planCategory")),e.xp6(2),e.Q6J("disabled",!l.form.valid),e.xp6(2),e.Oqu(e.lcZ(11,12,"General::save")),e.xp6(8),e.Oqu(e.lcZ(19,14,"General::general")),e.xp6(3),e.Q6J("formGroup",l.form),e.xp6(4),e.Oqu(e.lcZ(26,16,"General::categoryName")),e.xp6(3),e.s9C("placeholder",e.lcZ(29,18,"General::exB2CCustomers")),e.xp6(6),e.Oqu(e.lcZ(35,20,"General::categoryDescription")),e.xp6(2),e.s9C("placeholder",e.lcZ(37,22,"General::categoryDescriptionPlaceholder")),e.xp6(6),e.Oqu(e.lcZ(43,24,"General::categoryStatus")))},dependencies:[n._Y,n.Fj,n.Wl,n.JJ,n.JL,n.Q7,n.sg,n.u,b.hL,b.J5,m._L,C.mh,d.fuE]})}return a})();const q_url=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;var M=r(6934),U=r(2913),g=r(6814),G=r(9193);const O=()=>({standalone:!0});function S(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"tr",55)(1,"td",56),e.ALo(2,"abpLocalization"),e.TgZ(3,"div",57)(4,"input",58),e.NdJ("ngModelChange",function(l){const s=e.CHM(t).$implicit;return e.KtG(s.active=l)})("change",function(){const o=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.toggleActiveStatus(o))}),e.qZA()()(),e.TgZ(5,"td",59),e.ALo(6,"abpLocalization"),e.TgZ(7,"div",60)(8,"span",61),e._uU(9),e.qZA(),e.TgZ(10,"span",62),e._uU(11),e.ALo(12,"abpLocalization"),e.ALo(13,"abpLocalization"),e.ALo(14,"abpLocalization"),e.TgZ(15,"span",63),e._uU(16),e.ALo(17,"abpLocalization"),e.qZA()()()(),e.TgZ(18,"td",64),e.ALo(19,"abpLocalization"),e.TgZ(20,"div",18)(21,"input",65),e.NdJ("ngModelChange",function(l){const s=e.CHM(t).$implicit;return e.KtG(s.price=l)}),e.ALo(22,"abpLocalization"),e.qZA(),e.TgZ(23,"span",66),e._uU(24),e.ALo(25,"abpLocalization"),e.qZA()()()()}if(2&a){const t=c.$implicit;e.xp6(),e.uIk("data-label",e.lcZ(2,18,"General::action")),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(36,O))("ngModel",t.active)("checked",null==t?null:t.active),e.xp6(),e.uIk("data-label",e.lcZ(6,20,"General::bullingCycles")),e.xp6(4),e.Oqu(null==t?null:t.billingCycleName),e.xp6(2),e.xDo("",e.lcZ(12,22,"General::billed")," ",null==t?null:t.durationInDays," ",e.lcZ(13,24,"General::days"),", ",e.lcZ(14,26,"General::each")," ",null==t?null:t.durationInDays," "),e.xp6(5),e.Oqu(e.lcZ(17,28,"General::days")),e.xp6(2),e.uIk("data-label",e.lcZ(19,30,"General::Price")),e.xp6(3),e.s9C("placeholder",e.lcZ(22,32,"General::Price")),e.MGl("id","price-",null==t?null:t.id,""),e.Q6J("ngModelOptions",e.DdM(37,O))("ngModel",t.price),e.xp6(3),e.Oqu(e.lcZ(25,34,"General::SAR"))}}function N(a,c){1&a&&(e.TgZ(0,"div",67)(1,"span",5),e._uU(2),e.ALo(3,"abpLocalization"),e.qZA(),e.TgZ(4,"p",43),e._uU(5),e.ALo(6,"abpLocalization"),e.qZA()()),2&a&&(e.xp6(2),e.Oqu(e.lcZ(3,2,"General::redirectHintOne")),e.xp6(3),e.Oqu(e.lcZ(6,4,"General::redirectHintTwo")))}let J=(()=>{class a{constructor(t,i,l,o,s,u){this._fb=t,this._categoryService=i,this._billingCycleService=l,this._planService=o,this._localizationService=s,this.toastr=u,this.activeModal=(0,e.f3M)(m.Kz),this.isLoading=!1,this.categoryList=[],this.planBillingCycleList=[],this.isSelectedBillingCycle=!1}ngOnInit(){this.initForm(),this.getCategoryList(),this.getBillingCycles()}getBillingCycles(){!0===this?.isEdit?(this._planService.getBillingCyclePlan(this.plan?.id).subscribe(t=>{this.planBillingCycleList=t,console.log("this.planBillingCycleList edit",this.planBillingCycleList)}),this.isSelectedBillingCycle=!0):this._planService.getBillingCyclePlan("00000000-0000-0000-0000-000000000000").subscribe(t=>{this.planBillingCycleList=t,console.log("this.planBillingCycleList ",this.planBillingCycleList)})}getCategoryList(){this._categoryService.getAllByCompanyId().subscribe(t=>{this.categoryList=t?.items})}toggleActiveStatus(t){this.isSelectedBillingCycle=!!this?.planBillingCycleList.some(l=>!0===l.active)}initForm(){this.form=this._fb.group(!0===this.isEdit?{name:[this.plan?.name,n.Validators.required],code:[{value:this.plan?.code,disabled:this.isEdit},n.Validators.required],description:[this.plan?.description,n.Validators.maxLength(250)],freeTrailDays:[this.plan?.freeTrailDays],pricingModel:[{value:this?.plan?.pricingModel,disabled:!0}],setUpFees:[this?.plan?.setUpFees],categoryId:[this.plan?.categoryId,n.Validators.required],renewals:[this.plan?.renewals],accountingCode:[this.plan?.accountingCode],planStatus:[this.plan?.planStatus],redirectUrl:[this.plan?.redirectUrl,n.Validators.pattern(q_url)],billingCyclePlans:[this.plan?.billingCyclePlans]}:{name:[this.plan?.name,n.Validators.required],code:[this.plan?.code,n.Validators.required],description:[this.plan?.description,n.Validators.maxLength(250)],freeTrailDays:[0],pricingModel:[{value:0,disabled:!0}],setUpFees:[0],categoryId:[this.plan?.categoryId,n.Validators.required],renewals:[0,n.Validators.required],accountingCode:[this.plan?.accountingCode],planStatus:[0],redirectUrl:[this.plan?.redirectUrl,n.Validators.pattern(q_url)],billingCyclePlans:[this.plan?.billingCyclePlans]})}createEditPlan(){if(!this.form)return;const{id:t}=this.plan||{},i={name:this.form.controls.name?.value,code:this.form.controls.code?.value,description:this.form.controls.description?.value,freeTrailDays:Number(this.form.controls.freeTrailDays?.value),pricingModel:this.form.controls.pricingModel?.value,setUpFees:Number(this.form.controls.setUpFees?.value),categoryId:this.form.controls.categoryId?.value,renewals:this.form.controls.renewals?.value,accountingCode:this.form.controls.accountingCode?.value,planStatus:this.form.controls.planStatus?.value,redirectUrl:this.form.controls.redirectUrl?.value,billingCyclePlans:this?.planBillingCycleList.filter(l=>!0===l.active)};(t?this._planService.update(t,{id:t,...i}):this._planService.create(i)).pipe((0,y.x)(()=>this.isLoading=!1)).subscribe(l=>{this.toastr.success(this._localizationService.instant(t?"General::planEditMsg":"General::planAddMsg"),"",{timeOut:1e3}),this.activeModal.close(l)})}closeModal(){this.activeModal.close()}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(n.qu),e.Y36(T.H),e.Y36(M.U),e.Y36(U.D),e.Y36(d.oQ8),e.Y36(x._W))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-edit-plan"]],inputs:{plan:"plan",isEdit:"isEdit"},decls:219,vars:146,consts:[[1,"modal-header"],[1,"container"],[1,"modal-header-wrapper"],[1,"modal-close",3,"click"],[1,"fa","fa-xmark"],[1,"title"],["type","submit",1,"btn","btn-save",3,"disabled","click"],[1,"modal-body"],[1,"modal-body-wrapper"],[1,"form","section-form",3,"formGroup"],[1,"row","g-0","pb-32","border-bottom"],[1,"col-lg-3","col-md-12"],[1,"form-name"],[1,"col-lg-9","col-md-12"],[1,"row"],[1,"col-lg-8","col-md-12"],[1,"form-group"],[1,"form-label"],[1,"control-icon"],["formControlName","name","id","name","type","text","required","",1,"form-control",3,"placeholder"],["tooltipClass","custom-tooltip","placement","top","container","body",1,"icon","fa-regular","fa-circle-question",3,"ngbTooltip"],["formControlName","code","id","code","type","text","required","",1,"form-control",3,"placeholder","keydown.space"],["formControlName","description","id","description","rows","2",1,"form-control",3,"placeholder"],[1,"form-group","mb-0"],["bindLabel","name","bindValue","id","formControlName","categoryId","required","",3,"items","placeholder","clearable"],[1,"control-icon-text"],["formControlName","freeTrailDays","id","freeTrailDays","placeholder","0","type","number","value","0",1,"form-control"],[1,"icon-text"],[1,"text"],["formControlName","pricingModel",3,"placeholder","clearable"],[3,"value"],[1,"table-responsive"],[1,"rounded-table"],[1,"rounded-table-head"],[1,"rounded-table-head-row"],[1,"rounded-table-head-cell"],[1,"rounded-table-body"],["class","rounded-table-body-row",4,"ngFor","ngForOf"],[1,"row","radio-box"],[1,"col-lg-6","col-md-12"],[1,"radio-box-wrapper"],["type","radio","name","renewals","formControlName","renewals","id","renewalsTypeIdRadio1",3,"checked","value"],["for","renewalsTypeIdRadio1",1,"radio-box-label"],[1,"desc"],["type","radio","name","renewals","formControlName","renewals","id","renewalsTypeIdRadio2",3,"checked","value"],["for","renewalsTypeIdRadio2",1,"radio-box-label"],[1,"col-lg-4","col-md-12"],["formControlName","setUpFees","id","setUpFees","type","number",1,"form-control"],["formControlName","accountingCode","id","accountingCode","placeholder","SKU-1234","type","text",1,"form-control",3,"keydown.space"],["myTooltipTemplate",""],[1,"custom-input-group","control-icon"],["formControlName","redirectUrl","id","redirectUrl","placeholder","www.yoursite.com/directory","type","text",1,"form-control"],["tooltipClass","custom-tooltip-lg","placement","top",1,"icon","fa-regular","fa-circle-question",3,"ngbTooltip"],[1,"row","g-0"],["formControlName","planStatus",3,"placeholder","clearable"],[1,"rounded-table-body-row"],["width","84",1,"rounded-table-body-cell"],[1,"form-check","form-switch"],["type","checkbox","id","",1,"form-check-input",3,"ngModelOptions","ngModel","checked","ngModelChange","change"],["width","273",1,"rounded-table-body-cell"],[1,"bullingCycle-cell"],[1,"name"],[1,"info"],[1,"text-lowercase"],["width","155",1,"rounded-table-body-cell"],["type","number","value","",1,"form-control",3,"ngModelOptions","placeholder","ngModel","id","ngModelChange"],[1,"icon"],[1,"redirect-tooltip"]],template:function(i,l){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e.NdJ("click",function(){return l.closeModal()}),e._UZ(4,"i",4),e.qZA(),e.TgZ(5,"h2",5),e._uU(6),e.ALo(7,"abpLocalization"),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){return l.createEditPlan()}),e.TgZ(9,"span"),e._uU(10),e.ALo(11,"abpLocalization"),e.qZA()()()()(),e.TgZ(12,"div",7)(13,"div",1)(14,"div",8)(15,"form",9)(16,"div",10)(17,"div",11)(18,"p",12),e._uU(19),e.ALo(20,"abpLocalization"),e.qZA()(),e.TgZ(21,"div",13)(22,"div",14)(23,"div",15)(24,"div",16)(25,"label",17),e._uU(26),e.ALo(27,"abpLocalization"),e.TgZ(28,"sup"),e._uU(29,"*"),e.qZA()(),e.TgZ(30,"div",18),e._UZ(31,"input",19),e.ALo(32,"abpLocalization"),e._UZ(33,"i",20),e.ALo(34,"abpLocalization"),e.qZA()()(),e.TgZ(35,"div",15)(36,"div",16)(37,"label",17),e._uU(38),e.ALo(39,"abpLocalization"),e.TgZ(40,"sup"),e._uU(41,"*"),e.qZA()(),e.TgZ(42,"input",21),e.NdJ("keydown.space",function(s){return s.preventDefault()}),e.ALo(43,"abpLocalization"),e.qZA()()(),e.TgZ(44,"div",15)(45,"div",16)(46,"label",17),e._uU(47),e.ALo(48,"abpLocalization"),e.qZA(),e._UZ(49,"textarea",22),e.ALo(50,"abpLocalization"),e.qZA()(),e.TgZ(51,"div",15)(52,"div",23)(53,"label",17),e._uU(54),e.ALo(55,"abpLocalization"),e.TgZ(56,"sup"),e._uU(57,"*"),e.qZA()(),e._UZ(58,"ng-select",24),e.ALo(59,"abpLocalization"),e.qZA()()()()(),e.TgZ(60,"div",10)(61,"div",11)(62,"p",12),e._uU(63),e.ALo(64,"abpLocalization"),e.qZA()(),e.TgZ(65,"div",13)(66,"div",14)(67,"div",15)(68,"div",23)(69,"label",17),e._uU(70),e.ALo(71,"abpLocalization"),e.qZA(),e.TgZ(72,"div",25),e._UZ(73,"input",26),e.TgZ(74,"div",27),e._UZ(75,"i",20),e.ALo(76,"abpLocalization"),e.TgZ(77,"span",28),e._uU(78),e.ALo(79,"abpLocalization"),e.qZA()()()()()()()(),e.TgZ(80,"div",10)(81,"div",11)(82,"p",12),e._uU(83),e.ALo(84,"abpLocalization"),e.qZA()(),e.TgZ(85,"div",13)(86,"div",14)(87,"div",15)(88,"div",16)(89,"label",17),e._uU(90),e.ALo(91,"abpLocalization"),e.qZA(),e.TgZ(92,"ng-select",29),e.ALo(93,"abpLocalization"),e.TgZ(94,"ng-option",30),e._uU(95),e.ALo(96,"abpLocalization"),e.qZA(),e.TgZ(97,"ng-option",30),e._uU(98),e.ALo(99,"abpLocalization"),e.qZA()()()()()()(),e.TgZ(100,"div",10)(101,"div",11)(102,"p",12),e._uU(103),e.ALo(104,"abpLocalization"),e.qZA()(),e.TgZ(105,"div",13)(106,"div",14)(107,"div",15)(108,"div",31)(109,"table",32)(110,"thead",33)(111,"tr",34)(112,"th",35),e._uU(113),e.ALo(114,"abpLocalization"),e.qZA(),e.TgZ(115,"th",35),e._uU(116),e.ALo(117,"abpLocalization"),e.qZA(),e.TgZ(118,"th",35),e._uU(119),e.ALo(120,"abpLocalization"),e.qZA()()(),e.TgZ(121,"tbody",36),e.YNc(122,S,26,38,"tr",37),e.qZA()()()()()()(),e.TgZ(123,"div",10)(124,"div",11)(125,"p",12),e._uU(126),e.ALo(127,"abpLocalization"),e.qZA()(),e.TgZ(128,"div",13)(129,"div",14)(130,"div",15)(131,"div",38)(132,"div",39)(133,"div",40),e._UZ(134,"input",41),e.TgZ(135,"label",42)(136,"span",5),e._uU(137),e.ALo(138,"abpLocalization"),e.qZA(),e.TgZ(139,"span",43),e._uU(140),e.ALo(141,"abpLocalization"),e.qZA()()()(),e.TgZ(142,"div",39)(143,"div",40),e._UZ(144,"input",44),e.TgZ(145,"label",45)(146,"span",5),e._uU(147),e.ALo(148,"abpLocalization"),e.qZA(),e.TgZ(149,"span",43),e._uU(150),e.ALo(151,"abpLocalization"),e.qZA()()()()()()()()(),e.TgZ(152,"div",10)(153,"div",11)(154,"p",12),e._uU(155),e.ALo(156,"abpLocalization"),e.qZA()(),e.TgZ(157,"div",13)(158,"div",14)(159,"div",46)(160,"div",16)(161,"label",17),e._uU(162),e.ALo(163,"abpLocalization"),e.qZA(),e.TgZ(164,"div",25),e._UZ(165,"input",47),e.TgZ(166,"div",27)(167,"span",28),e._uU(168),e.ALo(169,"abpLocalization"),e.qZA()()()()(),e.TgZ(170,"div",46)(171,"div",16)(172,"label",17),e._uU(173),e.ALo(174,"abpLocalization"),e.qZA(),e.TgZ(175,"input",48),e.NdJ("keydown.space",function(s){return s.preventDefault()}),e.qZA()()()()()(),e.TgZ(176,"div",10)(177,"div",11)(178,"p",12),e._uU(179),e.ALo(180,"abpLocalization"),e.qZA()(),e.TgZ(181,"div",13)(182,"div",14)(183,"div",15),e.YNc(184,N,7,6,"ng-template",null,49,e.W1O),e.TgZ(186,"div",16)(187,"label",17),e._uU(188),e.ALo(189,"abpLocalization"),e.qZA(),e.TgZ(190,"div",50)(191,"span",28),e._uU(192),e.ALo(193,"abpLocalization"),e.qZA(),e._UZ(194,"input",51)(195,"i",52),e.qZA()()()()()(),e.TgZ(196,"div",53)(197,"div",11)(198,"p",12),e._uU(199),e.ALo(200,"abpLocalization"),e.qZA()(),e.TgZ(201,"div",13)(202,"div",14)(203,"div",15)(204,"div",23)(205,"label",17),e._uU(206),e.ALo(207,"abpLocalization"),e.qZA(),e.TgZ(208,"ng-select",54),e.ALo(209,"abpLocalization"),e.TgZ(210,"ng-option",30),e._uU(211),e.ALo(212,"abpLocalization"),e.qZA(),e.TgZ(213,"ng-option",30),e._uU(214),e.ALo(215,"abpLocalization"),e.qZA(),e.TgZ(216,"ng-option",30),e._uU(217),e.ALo(218,"abpLocalization"),e.qZA()()()()()()()()()()()),2&i){const o=e.MAs(185);e.xp6(6),e.Oqu(e.lcZ(7,60,"General::plan")),e.xp6(2),e.Q6J("disabled",!l.form.valid||!l.isSelectedBillingCycle),e.xp6(2),e.Oqu(e.lcZ(11,62,"General::save")),e.xp6(5),e.Q6J("formGroup",l.form),e.xp6(4),e.Oqu(e.lcZ(20,64,"General::general")),e.xp6(7),e.Oqu(e.lcZ(27,66,"General::planName")),e.xp6(5),e.s9C("placeholder",e.lcZ(32,68,"General::exStarterPlan")),e.xp6(2),e.s9C("ngbTooltip",e.lcZ(34,70,"General::planNameHint")),e.xp6(5),e.Oqu(e.lcZ(39,72,"General::planCode")),e.xp6(4),e.s9C("placeholder",e.lcZ(43,74,"General::starterP")),e.xp6(5),e.Oqu(e.lcZ(48,76,"General::planDescription")),e.xp6(2),e.s9C("placeholder",e.lcZ(50,78,"General::planForBeginning")),e.xp6(5),e.Oqu(e.lcZ(55,80,"General::category")),e.xp6(4),e.s9C("placeholder",e.lcZ(59,82,"General::category")),e.Q6J("items",l.categoryList)("clearable",!1),e.xp6(5),e.Oqu(e.lcZ(64,84,"General::trialConfigurations")),e.xp6(7),e.Oqu(e.lcZ(71,86,"General::freeTrial")),e.xp6(5),e.s9C("ngbTooltip",e.lcZ(76,88,"General::freeTrialHint")),e.xp6(3),e.Oqu(e.lcZ(79,90,"General::days")),e.xp6(5),e.Oqu(e.lcZ(84,92,"General::pricingAndBilling")),e.xp6(7),e.Oqu(e.lcZ(91,94,"General::pricingAndBilling")),e.xp6(2),e.s9C("placeholder",e.lcZ(93,96,"General::model")),e.Q6J("clearable",!1),e.xp6(2),e.Q6J("value",0),e.xp6(),e.Oqu(e.lcZ(96,98,"General::fixedPrice")),e.xp6(2),e.Q6J("value",1),e.xp6(),e.Oqu(e.lcZ(99,100,"General::dynamicPrice")),e.xp6(5),e.Oqu(e.lcZ(104,102,"General::bullingCycles")),e.xp6(10),e.Oqu(e.lcZ(114,104,"General::action")),e.xp6(3),e.Oqu(e.lcZ(117,106,"General::bullingCycles")),e.xp6(3),e.Oqu(e.lcZ(120,108,"General::Price")),e.xp6(3),e.Q6J("ngForOf",l.planBillingCycleList),e.xp6(4),e.Oqu(e.lcZ(127,110,"General::renewals")),e.xp6(8),e.Q6J("checked",0==(null==l.plan?null:l.plan.renewals))("value",0),e.xp6(3),e.Oqu(e.lcZ(138,112,"General::autoRenewal")),e.xp6(3),e.Oqu(e.lcZ(141,114,"General::autoRenewalDesc")),e.xp6(4),e.Q6J("checked",1==(null==l.plan?null:l.plan.renewals))("value",1),e.xp6(3),e.Oqu(e.lcZ(148,116,"General::expireSubscription")),e.xp6(3),e.Oqu(e.lcZ(151,118,"General::expireSubscriptionDesc")),e.xp6(5),e.Oqu(e.lcZ(156,120,"General::fees")),e.xp6(7),e.Oqu(e.lcZ(163,122,"General::setupFee")),e.xp6(6),e.Oqu(e.lcZ(169,124,"General::SAR")),e.xp6(5),e.Oqu(e.lcZ(174,126,"General::accountingCode")),e.xp6(6),e.Oqu(e.lcZ(180,128,"General::redirectURL")),e.xp6(9),e.Oqu(e.lcZ(189,130,"General::redirectTo")),e.xp6(4),e.Oqu(e.lcZ(193,132,"General::link")),e.xp6(3),e.Q6J("ngbTooltip",o),e.xp6(4),e.Oqu(e.lcZ(200,134,"General::planStatus")),e.xp6(7),e.Oqu(e.lcZ(207,136,"General::status")),e.xp6(2),e.s9C("placeholder",e.lcZ(209,138,"General::planStatus")),e.Q6J("clearable",!1),e.xp6(2),e.Q6J("value",0),e.xp6(),e.Oqu(e.lcZ(212,140,"General::Active")),e.xp6(2),e.Q6J("value",1),e.xp6(),e.Oqu(e.lcZ(215,142,"General::Disabled")),e.xp6(2),e.Q6J("value",2),e.xp6(),e.Oqu(e.lcZ(218,144,"General::Paused"))}},dependencies:[g.sg,n._Y,n.Fj,n.wV,n.Wl,n._,n.JJ,n.JL,n.Q7,n.On,n.sg,n.u,b.hL,b.J5,m._L,G.w9,G.jq,C.mh,d.fuE]})}return a})();var F=r(5668),z=r(7956);function I(a,c){1&a&&(e.TgZ(0,"span",44),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&a&&(e.xp6(),e.Oqu(e.lcZ(2,1,"General::Active")))}function k(a,c){1&a&&(e.TgZ(0,"span",45),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&a&&(e.xp6(),e.Oqu(e.lcZ(2,1,"General::Disabled")))}function D(a,c){1&a&&(e.TgZ(0,"span",46),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&a&&(e.xp6(),e.Oqu(e.lcZ(2,1,"General::Paused")))}function B(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"tr",32)(1,"td",33),e.ALo(2,"abpLocalization"),e.TgZ(3,"div",34)(4,"div",35),e._uU(5),e.qZA(),e.TgZ(6,"div",36)(7,"span",37),e._uU(8),e.qZA(),e.TgZ(9,"span",38),e._uU(10),e.qZA()()()(),e.TgZ(11,"td",33),e.ALo(12,"abpLocalization"),e.YNc(13,I,3,3,"span",39)(14,k,3,3,"span",40)(15,D,3,3,"span",41),e.qZA(),e.TgZ(16,"td",33),e.ALo(17,"abpLocalization"),e._uU(18),e.qZA(),e.TgZ(19,"td",33),e.ALo(20,"abpLocalization"),e._uU(21),e.qZA(),e.TgZ(22,"td",33),e.ALo(23,"abpLocalization"),e._uU(24),e.ALo(25,"date"),e.qZA(),e.TgZ(26,"td",42)(27,"a",43),e.NdJ("click",function(){const l=e.CHM(t),o=l.$implicit,s=l.index,u=e.oxw(3);return e.KtG(u.addEditPlan(o,s,"edit"))}),e._UZ(28,"i",17),e.qZA()()()}if(2&a){const t=c.$implicit;e.xp6(),e.uIk("data-label",e.lcZ(2,14,"General::name")),e.xp6(4),e.Oqu(null==t?null:t.name.substring(0,2)),e.xp6(3),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.code),e.xp6(),e.uIk("data-label",e.lcZ(12,16,"General::status")),e.xp6(2),e.Q6J("ngIf",0===(null==t?null:t.planStatus)),e.xp6(),e.Q6J("ngIf",1===(null==t?null:t.planStatus)),e.xp6(),e.Q6J("ngIf",2===(null==t?null:t.planStatus)),e.xp6(),e.uIk("data-label",e.lcZ(17,18,"General::SETUPFEE")),e.xp6(2),e.hij(" ",null==t?null:t.setUpFees," "),e.xp6(),e.uIk("data-label",e.lcZ(20,20,"General::trial")),e.xp6(2),e.hij(" ",null==t?null:t.freeTrailDays," "),e.xp6(),e.uIk("data-label",e.lcZ(23,22,"General::dateCreated")),e.xp6(2),e.hij(" ",e.xi3(25,24,null==t?null:t.creationTime,"MMM dd, yyyy")," ")}}function Q(a,c){if(1&a&&(e.TgZ(0,"div",19)(1,"div",20)(2,"table",21)(3,"thead",22)(4,"tr",23)(5,"th",24),e._uU(6),e.ALo(7,"abpLocalization"),e.qZA(),e.TgZ(8,"th",25),e._uU(9),e.ALo(10,"abpLocalization"),e.qZA(),e.TgZ(11,"th",26),e._uU(12),e.ALo(13,"abpLocalization"),e.qZA(),e.TgZ(14,"th",27),e._uU(15),e.ALo(16,"abpLocalization"),e.qZA(),e.TgZ(17,"th",28),e._uU(18),e.ALo(19,"abpLocalization"),e.qZA(),e._UZ(20,"th",29),e.qZA()(),e.TgZ(21,"tbody",30),e.YNc(22,B,29,27,"tr",31),e.qZA()()()()),2&a){const t=e.oxw().$implicit;e.xp6(6),e.Oqu(e.lcZ(7,6,"General::name")),e.xp6(3),e.Oqu(e.lcZ(10,8,"General::status")),e.xp6(3),e.Oqu(e.lcZ(13,10,"General::SETUPFEE")),e.xp6(3),e.Oqu(e.lcZ(16,12,"General::trial")),e.xp6(3),e.hij(" ",e.lcZ(19,14,"General::dateCreated"),""),e.xp6(4),e.Q6J("ngForOf",null==t?null:t.plans)}}function Y(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"span",14),e._uU(5),e.qZA(),e.TgZ(6,"p",15),e._uU(7),e.qZA()(),e.TgZ(8,"button",16),e.NdJ("click",function(){const l=e.CHM(t),o=l.$implicit,s=l.index,u=e.oxw();return e.KtG(u.addEditCategory(o,s))}),e._UZ(9,"i",17),e.TgZ(10,"span"),e._uU(11),e.ALo(12,"abpLocalization"),e.qZA()()()(),e.YNc(13,Q,23,16,"div",18),e.qZA()}if(2&a){const t=c.$implicit;e.ekj("sperator",(null==t?null:t.plans.length)>0),e.xp6(5),e.Oqu(null==t?null:t.categoryName),e.xp6(2),e.Oqu(null==t?null:t.categoryDescription),e.xp6(4),e.Oqu(e.lcZ(12,6,"General::editCategory")),e.xp6(2),e.Q6J("ngIf",null==t?null:t.plans.length)}}function j(a,c){1&a&&(e.TgZ(0,"div"),e._UZ(1,"app-not-found-data-standalone"),e.qZA())}const V=[{path:"",component:P,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class a{constructor(t){this._planService=t,this.modalService=(0,e.f3M)(m.FF),this.categoryPlanList=[],this.planStatus=function w(a){return Object.keys(a).filter(c=>isNaN(Number(c))).map(c=>({key:c,value:a[c]}))}(p),this.isEdit=!1,this.getCategoryPlanList()}ngOnInit(){this.getCategoryPlanList()}getCategoryPlanList(){this._planService.getAllPlansForCompany().subscribe(t=>{this.categoryPlanList=t?.items})}addEditCategory(t,i){const l=this.modalService.open(E,{fullscreen:!0,windowClass:"custom-modal"});l.componentInstance.category={id:t?.categoryId,name:t?.categoryName,description:t?.categoryDescription,status:t?.status},l.result.then(Z=>{this.getCategoryPlanList()}),l.closed.subscribe(Z=>{Z&&("number"==typeof i?(console.log("edit"),this.categoryList?.splice(i,1,Z)):this.categoryList?.push(Z))}).unsubscribe()}addEditPlan(t,i,l){this.isEdit="edit"===l;const o=this.modalService.open(J,{fullscreen:!0,windowClass:"custom-modal"});o.componentInstance.plan={id:t?.id,name:t?.name,code:t?.code,description:t?.description,freeTrailDays:t?.freeTrailDays,pricingModel:t?.pricingModel,setUpFees:t?.setUpFees,categoryId:t?.categoryId,renewals:t?.renewals,accountingCode:t?.accountingCode,planStatus:t?.planStatus,redirectUrl:t?.redirectUrl,billingCyclePlans:t?.billingCyclePlans},o.componentInstance.isEdit=this.isEdit,o.result.then(f=>{this.getCategoryPlanList()}),o.closed.subscribe(f=>{f&&("number"==typeof i?(this.categoryPlanList?.splice(i,1,f),this.isEdit=!0):this.categoryPlanList?.push(this.categoryPlanList))}).unsubscribe()}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(U.D))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-plan-list"]],decls:20,vars:14,consts:[[1,"section-header"],[3,"title","description"],[1,"section-header-actions"],[1,"btn","btn-primary",3,"click"],[1,"fa-regular","fa-plus"],[1,"btn","btn-light",3,"click"],[1,"section-body"],[1,"section-row"],["class","row g-0",3,"sperator",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row","g-0"],[1,"col-lg-3","col-md-4"],[1,"category"],[1,"category-info"],[1,"category-name"],[1,"category-description"],[1,"btn","btn-light","btn-sm",3,"click"],[1,"fa-solid","fa-pen"],["class","col-lg-9 col-md-8",4,"ngIf"],[1,"col-lg-9","col-md-8"],[1,"table-responsive"],[1,"rounded-table"],[1,"rounded-table-head"],[1,"rounded-table-head-row"],[1,"rounded-table-head-cell"],["width","110",1,"rounded-table-head-cell"],["width","120",1,"rounded-table-head-cell"],["width","100",1,"rounded-table-head-cell"],["width","140",1,"rounded-table-head-cell"],["width","16",1,"rounded-table-head-cell"],[1,"rounded-table-body"],["class","rounded-table-body-row",4,"ngFor","ngForOf"],[1,"rounded-table-body-row"],[1,"rounded-table-body-cell"],[1,"cell-name"],[1,"avatar"],[1,"info"],[1,"name"],[1,"code"],["class","badge badge-success",4,"ngIf"],["class","badge badge-danger",4,"ngIf"],["class","badge badge-default",4,"ngIf"],[1,"rounded-table-body-cell","cell-action"],[3,"click"],[1,"badge","badge-success"],[1,"badge","badge-danger"],[1,"badge","badge-default"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"div",0),e._UZ(2,"app-page-title-standalone",1),e.ALo(3,"abpLocalization"),e.ALo(4,"abpLocalization"),e.TgZ(5,"div",2)(6,"button",3),e.NdJ("click",function(){return l.addEditCategory()}),e._UZ(7,"i",4),e.TgZ(8,"span"),e._uU(9),e.ALo(10,"abpLocalization"),e.qZA()(),e.TgZ(11,"button",5),e.NdJ("click",function(){return l.addEditPlan()}),e._UZ(12,"i",4),e.TgZ(13,"span"),e._uU(14),e.ALo(15,"abpLocalization"),e.qZA()()()(),e.TgZ(16,"div",6)(17,"div",7),e.YNc(18,Y,14,8,"div",8),e.qZA()()(),e.YNc(19,j,2,0,"div",9)),2&i&&(e.xp6(2),e.s9C("title",e.lcZ(3,6,"General::plans")),e.s9C("description",e.lcZ(4,8,"General::plansDes")),e.xp6(7),e.Oqu(e.lcZ(10,10,"General::createPlanCategory")),e.xp6(5),e.Oqu(e.lcZ(15,12,"General::createPlan")),e.xp6(4),e.Q6J("ngForOf",l.categoryPlanList),e.xp6(),e.Q6J("ngIf",!l.categoryPlanList.length))},dependencies:[F.P,z.G,g.sg,g.O5,g.uU,d.fuE]})}return a})()}]}];let H=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#a=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(V),h.Bz]})}return a})();var R=r(2999);class W{statusClass(c){return function $(a){switch(a){case p.Active:return"badge-success";case p.Disabled:return"badge-danger";case p.Paused:return"badge-warning";default:return"badge-info"}}(c)}statusText(c){return function K(a){switch(a){case p.Active:return"Active";case p.Disabled:return"Disabled";case p.Paused:return"Paused";default:return a||""}}(c)}}function X(a,c){if(1&a&&(e.TgZ(0,"span",1),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.Tol(t.statusClass(t.status)),e.xp6(),e.Oqu(t.statusText(t.status))}}let ee=(()=>{class a extends W{constructor(){super(),this.status=null}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-status-badge"]],inputs:{status:"status"},standalone:!0,features:[e.qOj,e.jDz],decls:1,vars:1,consts:[["class","badge",3,"class",4,"ngIf"],[1,"badge"]],template:function(i,l){1&i&&e.YNc(0,X,2,3,"span",0),2&i&&e.Q6J("ngIf",l.status)},dependencies:[g.ez,g.O5]})}return a})(),te=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#a=this.\u0275inj=e.cJS({imports:[H,ee,z.G,R.m]})}return a})()}}]);