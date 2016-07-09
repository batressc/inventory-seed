import { Component } from '@angular/core';
import { Product } from './model/Product.model';

@Component({
    selector: 'product-image',
    inputs: ['product'],
    host: {
        'class': 'ui small image'
    },
    template: `
        <img class="product-image" [src]="product.imageUrl" />
        `
})
export class ProductImageComponent {
    product: Product;
}