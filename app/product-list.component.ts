import { Component, EventEmitter } from '@angular/core';
import { Product } from './model/Product.model';
import {ProductRowComponent} from "./product-row.component";

@Component({
    selector: 'product-list',
    directives: [ProductRowComponent],
    inputs: ['products: data'],
    outputs: ['onProductSelected'],
    template: `
        <div class="ui items">
            <product-row *ngFor="let myProduct of products" [product]="myProduct" (click)="clicked(myProduct)" [class.selected]="isSelected(myProduct)"></product-row>
        </div>
        
        `
})
export class ProductListComponent {
    products: Product[];
    onProductSelected: EventEmitter<Product>;
    currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }
    
    clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }
    
    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) return false;
        return product.sku === this.currentProduct.sku;
    }
}
