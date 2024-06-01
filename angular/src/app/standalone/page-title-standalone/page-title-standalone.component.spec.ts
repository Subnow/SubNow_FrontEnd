import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleStandaloneComponent } from './page-title-standalone.component';

describe('PageTitleStandaloneComponent', () => {
  let component: PageTitleStandaloneComponent;
  let fixture: ComponentFixture<PageTitleStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTitleStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTitleStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
