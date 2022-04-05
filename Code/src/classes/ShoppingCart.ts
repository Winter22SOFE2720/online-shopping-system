import Product from "./Product";

export class ShoppingCart {
    private products = new Set<Product>();
    constructor() { }

    public getProducts() {
        return this.products;
    }

    public addItem(item: Product) {
        this.products.add(item);
        return this;
    }

    public removeItem(item: Product) {
        this.products.delete(item);
        return this;
    }
}

export default ShoppingCart;