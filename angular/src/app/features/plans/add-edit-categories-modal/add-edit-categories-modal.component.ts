import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDto, CategoryService } from '@proxy/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    public _fb: FormBuilder,
    private _categoryService:CategoryService,
    private toastr: ToastrService

  ) {
    this.initForm()
  }
  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this._fb.group({
      name: [this.category?.name, Validators.required],
      description: [this.category?.description, Validators.required],
    })
  }


  createEditCategory(): void {
    if (!this.form) {
      return;
    }

    console.log(this.form?.value);
    // this.isLoading = true;
    const { id } = this.category || {};
    const updateCategory = {
      name: this.form.controls.name?.value,
      description: this.form.controls.description?.value,
    };
    (!id
        ? this._categoryService.create(updateCategory)
        : this._categoryService.update(id,updateCategory)
    )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((value) => {
        console.log(value);
        console.log(updateCategory);
        if (id) {
          this.toastr.success('Category Edit successfully', '', {
            timeOut: 1000,
          });
        } else {
          this.toastr.success('Category Add successfully', '', {
            timeOut: 1000,
          });
        }
        this.activeModal.close(value);
      });
  }
}
