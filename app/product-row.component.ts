import { Component } from '@angular/core';
import { Product } from './model/Product.model';
import { ProductImageComponent } from "./product-image.component";
import { ProductDepartamentComponent } from "./product-departament.component";
import { PriceDisplayComponent } from "./price-display.component";

@Component({
    selector: 'product-row',
    directives: [ProductImageComponent, ProductDepartamentComponent, PriceDisplayComponent],
    inputs: ['product'],
    host: {
        'class': 'item'
    },
    template: `
        <product-image [product]="product"></product-image>
        <div class="content">
            <div class="header">{{ product.name }}</div>
            <div class="meta">
                <div class="product-sku">SKU # {{ product.sku }}</div>
            </div>
            <div class="description">
                <product-departament [product]="product"></product-departament>
            </div>
        </div>
        <price-display [price]="product.price"></price-display>
        `
})
export class ProductRowComponent {
    product: Product;
}
