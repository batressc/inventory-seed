import { Component } from '@angular/core';
import { Product } from './model/Product.model';

@Component({
    selector: 'product-departament',
    inputs: ['product'],
    template: `
        <div class="product-department">
            <span *ngFor="let name of product.deparment; let i = index">
                <a href="#">{{ name }}</a>
                <span>{{ i < (product.department.lenght - 1) ? '>'  : '' }}></span>
            </span>
        </div>
        `
})
export class ProductDepartamentComponent {
    product: Product;
}
