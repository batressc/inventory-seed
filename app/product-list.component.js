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
var product_row_component_1 = require("./product-row.component");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.onProductSelected = new core_1.EventEmitter();
    }
    ProductListComponent.prototype.clicked = function (product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    };
    ProductListComponent.prototype.isSelected = function (product) {
        if (!product || !this.currentProduct)
            return false;
        return product.sku === this.currentProduct.sku;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            directives: [product_row_component_1.ProductRowComponent],
            inputs: ['products: data'],
            outputs: ['onProductSelected'],
            template: "\n        <div class=\"ui items\">\n            <product-row *ngFor=\"let myProduct of products\" [product]=\"myProduct\" (click)=\"clicked(myProduct)\" [class.selected]=\"isSelected(myProduct)\"></product-row>\n        </div>\n        \n        "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map