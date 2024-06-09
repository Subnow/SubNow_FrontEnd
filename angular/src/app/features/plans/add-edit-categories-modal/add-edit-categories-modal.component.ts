import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDto, CategoryService } from '@proxy/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LocalizationService } from '@abp/ng.core';

@Component({
  selector: 'app-add-edit-categories-modal',
  templateUrl: './add-edit-categories-modal.component.html',
  styleUrl: './add-edit-categories-modal.component.scss'
})
export class AddEditCategoriesModalComponent  implements OnInit{
  @Input() category?: CategoryDto;
  form: FormGroup;
  activeModal = inject(NgbActiveModal);
  isLoading = false;
  updateStatus;

  constructor(
    public _fb: FormBuilder,
    private _categoryService:CategoryService,
    private toastr: ToastrService,
    private _localizationService: LocalizationService

  ) {
    this.initForm()
  }
  ngOnInit(): void {
    this.initForm();
    this.form.get('status').valueChanges.subscribe(toggleValue => {
      this.updateStatus = toggleValue;
    });
  }

  initForm(){
    this.form = this._fb.group({
      name: [this.category?.name, Validators.required],
      description: [this.category?.description, Validators.required],
      status:[this?.category?.status]
    })
  }


  createEditCategory(): void {
    if (!this.form) {
      return;
    }
    // this.isLoading = true;
    const { id } = this.category || {};
    const updateCategory = {
      name: this.form.controls.name?.value,
      description: this.form.controls.description?.value,
      status:this.updateStatus
    };
    (!id
        ? this._categoryService.create(updateCategory)
        : this._categoryService.update(id,updateCategory)
    )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((value) => {
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
  closeModal(){
    this.activeModal.close();
  }
}
