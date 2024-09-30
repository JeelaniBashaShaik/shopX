import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products-list-item.component.html',
  styleUrl: './products-list-item.component.scss'
})
export class ProductsListItemComponent {
  @Input('productDetails') productDetails: any;
}
