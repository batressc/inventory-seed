import { Component } from '@angular/core';
import { Product } from './model/Product.model';
import {ProductListComponent} from "./product-list.component";

@Component({
    selector: 'inventary',
    directives: [ProductListComponent],
    template: `
        <div class="inventory-app">
            <product-list [data]="products" (onProductSelected)="productWasSelected($event)"></product-list>
        </div>
        `
})
export class InventaryComponent {
    products: Product[];

    constructor() {
        this.products = [
            new Product('2109840141', 'D.VA Sticker', 'http://fanglow.co/wp-content/uploads/2016/06/overwatch-d-va-bunny-shirt.jpg', ['Games', 'Overwatch', 'Accesories', 'Stickers'], 12.59 ),
            new Product('1290984012', 'Two Dragon Brothers Dige', 'http://g02.a.alicdn.com/kf/HTB18c32KpXXXXXxaXXXq6xXFXXXC/Overwatch-Key-Chain-OW-HANZO-Key-Rings-For-Gift-Chaveiro-Car-Keychain-Jewelry-Game-Key-Holder.jpg_640x640.jpg', ['Games', 'Overwatch', 'Accesories', 'Jewery'], 119.99),
            new Product('3987342903', 'Overwatch Collection Edition - XBOX ONE', 'http://s4.thcdn.com/productimg/300/300/11195548-1584374965577843.JPG', ['Games', 'Overwatch', 'Specials'], 200.00)
        ];
    }

    productWasSelected(product: Product) {
        console.log('El producto seleccionado fue: ', product);
    }
}