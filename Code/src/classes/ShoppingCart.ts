import Product from "./Product";

/**
 * Represents a shopping cart where shoppers can add/remove items from cart, and get a list of all products in cart.
 * 
 * @author Okiki Ojo
 * @date April 5, 2022
 */
export class ShoppingCart {
    private products = new Set<Product>();
    constructor() { }

    public getProducts() {
        return this.products;
    }

    public getItem(index: number) {
        return Array.from(this.products)[index];
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