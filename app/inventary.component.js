"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Product_model_1 = require('./model/Product.model');
var product_list_component_1 = require("./product-list.component");
var InventaryComponent = (function () {
    function InventaryComponent() {
        this.products = [
            new Product_model_1.Product('2109840141', 'D.VA Sticker', 'http://fanglow.co/wp-content/uploads/2016/06/overwatch-d-va-bunny-shirt.jpg', ['Games', 'Overwatch', 'Accesories', 'Stickers'], 12.59),
            new Product_model_1.Product('1290984012', 'Two Dragon Brothers Dige', 'http://g02.a.alicdn.com/kf/HTB18c32KpXXXXXxaXXXq6xXFXXXC/Overwatch-Key-Chain-OW-HANZO-Key-Rings-For-Gift-Chaveiro-Car-Keychain-Jewelry-Game-Key-Holder.jpg_640x640.jpg', ['Games', 'Overwatch', 'Accesories', 'Jewery'], 119.99),
            new Product_model_1.Product('3987342903', 'Overwatch Collection Edition - XBOX ONE', 'http://s4.thcdn.com/productimg/300/300/11195548-1584374965577843.JPG', ['Games', 'Overwatch', 'Specials'], 200.00)
        ];
    }
    InventaryComponent.prototype.productWasSelected = function (product) {
        console.log('El producto seleccionado fue: ', product);
    };
    InventaryComponent = __decorate([
        core_1.Component({
            selector: 'inventary',
            directives: [product_list_component_1.ProductListComponent],
            template: "\n        <div class=\"inventory-app\">\n            <product-list [data]=\"products\" (onProductSelected)=\"productWasSelected($event)\"></product-list>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], InventaryComponent);
    return InventaryComponent;
}());
exports.InventaryComponent = InventaryComponent;
//# sourceMappingURL=inventary.component.js.map