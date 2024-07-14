import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDto, CategoryService } from '@proxy/categories';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LocalizationService } from '@abp/ng.core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-edit-categories-modal',
  templateUrl: './add-edit-categories-modal.component.html',
  styleUrls: ['./add-edit-categories-modal.component.scss']
})
export class AddEditCategoriesModalComponent implements OnInit {
  @Input() category?: CategoryDto;
  form: FormGroup;
  activeModal = inject(NgbActiveModal);
  isLoading = false;
  updateStatus;

  constructor(
    public _fb: FormBuilder,
    private _categoryService: CategoryService,
    private toastr: ToastrService,
    private _localizationService: LocalizationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.form.get('status').valueChanges.subscribe(toggleValue => {
      this.updateStatus = toggleValue;
    });
    this.loadPlans();
  }

  get plansArray(): FormArray {
    return this.form.get('plans') as FormArray;
  }

  initForm() {
    this.form = this._fb.group({
      name: [this.category?.name, Validators.required],
      description: [this.category?.description, Validators.required],
      status: [this.category?.status],
      plans: this._fb.array([])
    });
  }

  loadPlans() {
    const plansArray = this.form.get('plans') as FormArray;
    this.category?.plans?.forEach(plan => {
      plansArray.push(this.createPlanGroup(plan));
    });
  }

  createPlanGroup(plan: any): FormGroup {
    return this._fb.group({
      id: [plan.id],
      name: [plan.name],
      showOnPaylink: [plan.showOnPaylink],
      sort: [plan.sort]
    });
  }

  createEditCategory(): void {
    if (!this.form) {
      return;
    }
    const { id } = this.category || {};
    const updateCategory = {
      name: this.form.controls.name?.value,
      description: this.form.controls.description?.value,
      status: this.updateStatus,
      plans: this.plansArray.value
    } as any;
    (!id
        ? this._categoryService.create(updateCategory)
        : this._categoryService.update(id, updateCategory)
    )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(value => {
        if (id) {
          this.toastr.success(this._localizationService.instant('General::categoryEditMsg'), '', {
            timeOut: 1000,
          });
        } else {
          this.toastr.success(this._localizationService.instant('General::categoryAddMsg'), '', {
            timeOut: 1000,
          });
        }
        this.activeModal.close(value);
      });
  }

  closeModal() {
    this.activeModal.close();
  }

  onShowOnPaylinkChange(index: number, event: any) {
    this.plansArray.at(index).get('showOnPaylink').setValue(event.target.checked);
    this.form.markAsDirty();
  }
  drop(event: CdkDragDrop<FormGroup[]>) {
    moveItemInArray(this.plansArray.controls, event.previousIndex, event.currentIndex);
    this.plansArray.controls.forEach((control, index) => {
      control.get('sort').setValue(index);
    });
  }
}
