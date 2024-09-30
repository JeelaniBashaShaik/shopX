import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListItemComponent } from './products-list-item.component';

describe('ProductsListItemComponent', () => {
  let component: ProductsListItemComponent;
  let fixture: ComponentFixture<ProductsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
