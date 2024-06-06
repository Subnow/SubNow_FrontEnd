import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundDataStandaloneComponent } from './not-found-data-standalone.component';

describe('NotFoundDataStandaloneComponent', () => {
  let component: NotFoundDataStandaloneComponent;
  let fixture: ComponentFixture<NotFoundDataStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundDataStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundDataStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
