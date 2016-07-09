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
var product_image_component_1 = require("./product-image.component");
var product_departament_component_1 = require("./product-departament.component");
var price_display_component_1 = require("./price-display.component");
var ProductRowComponent = (function () {
    function ProductRowComponent() {
    }
    ProductRowComponent = __decorate([
        core_1.Component({
            selector: 'product-row',
            directives: [product_image_component_1.ProductImageComponent, product_departament_component_1.ProductDepartamentComponent, price_display_component_1.PriceDisplayComponent],
            inputs: ['product'],
            host: {
                'class': 'item'
            },
            template: "\n        <product-image [product]=\"product\"></product-image>\n        <div class=\"content\">\n            <div class=\"header\">{{ product.name }}</div>\n            <div class=\"meta\">\n                <div class=\"product-sku\">SKU # {{ product.sku }}</div>\n            </div>\n            <div class=\"description\">\n                <product-departament [product]=\"product\"></product-departament>\n            </div>\n        </div>\n        <price-display [price]=\"product.price\"></price-display>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductRowComponent);
    return ProductRowComponent;
}());
exports.ProductRowComponent = ProductRowComponent;
//# sourceMappingURL=product-row.component.js.map