import { Component } from '@angular/core';
import { ProductsListItemComponent } from '../products-list-item/products-list-item.component';

@Component({
  selector: 'app-specific-catalog',
  standalone: true,
  imports: [ProductsListItemComponent],
  templateUrl: './specific-catalog.component.html',
  styleUrl: './specific-catalog.component.scss'
})
export class SpecificCatalogComponent {
  products = [
    {
      productId: 'productId1',
      productName: 'Product Name 1',
      productSummary: 'Brieft product summary that fits in a single line',
      productDescription: 'Couple of Meaningful sentences',
      productImageUrl: 'productImageUrl',
      productPrice: {
        mp: 150,
        sp: 130
      }
    },
    {
      productId: 'productId2',
      productName: 'Product Name 2',
      productSummary: 'Brieft product summary that fits in a single line',
      productDescription: 'Couple of Meaningful sentences',
      productImageUrl: 'productImageUrl',
      productPrice: {
        mp: 499,
        sp: 339
      }
    }
  ];
}
