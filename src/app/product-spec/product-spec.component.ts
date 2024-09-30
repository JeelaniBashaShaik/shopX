import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-spec',
  standalone: true,
  imports: [],
  templateUrl: './product-spec.component.html',
  styleUrl: './product-spec.component.scss'
})
export class ProductSpecComponent {
  @Input('productDetails') productDetails: any;
}
