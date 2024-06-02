import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCategoriesModalComponent } from './add-edit-categories-modal.component';

describe('AddEditCategoriesModalComponent', () => {
  let component: AddEditCategoriesModalComponent;
  let fixture: ComponentFixture<AddEditCategoriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditCategoriesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditCategoriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
