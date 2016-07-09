export class Product {
    constructor(public sku: string, public name: string, public imageUrl: string, public departament: string[], public price: number) {
        this.sku = sku;
        this.name = name;
        this.imageUrl = imageUrl;
        this.departament = departament;
        this.price = price;
    }
}
