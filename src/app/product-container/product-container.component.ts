import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { mockProducts as products } from '../mocks/products.mock'

@Component({
    selector: 'app-product-container',
    standalone: true,
    templateUrl: './product-container.component.html',
    styleUrl: './product-container.component.scss',
    imports: [CommonModule, ProductCardComponent]
})
export class ProductContainerComponent {
  products = products
}
