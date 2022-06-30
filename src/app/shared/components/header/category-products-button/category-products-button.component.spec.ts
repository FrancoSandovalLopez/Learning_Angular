import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductsButtonComponent } from './category-products-button.component';
import { MatMenuModule } from '@angular/material/menu';

describe('CategoryProductsButtonComponent', () => {
  let component: CategoryProductsButtonComponent;
  let fixture: ComponentFixture<CategoryProductsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductsButtonComponent ],
      imports: [
        MatMenuModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
