import { describe, expect, it } from 'vitest';

import ShoppingCart from "../../Code/src/classes/ShoppingCart";
import Product from "../../Code/src/classes/Product";

describe("ShoppingCart class", () => {
    const newShoppingCart = new ShoppingCart();
    const item = new Product("Pizza", "Description is ...", 5);

    it("getProducts()", () => {
        let products = newShoppingCart.getProducts();
        expect(products).to.be.instanceOf(Set);
        expect(products.size).to.equal(0);
    });

    it("addItem()", () => {
        let cart = newShoppingCart.addItem(item);
        expect(cart).to.be.instanceOf(ShoppingCart);

        let products = newShoppingCart.getProducts();
        expect(products.size).to.equal(1);
    });

    it("removeItem()", () => {
        let cart = newShoppingCart.addItem(item);
        expect(cart).to.be.instanceOf(ShoppingCart);

        let products = newShoppingCart.getProducts();
        expect(products.size).to.equal(1);

        cart = newShoppingCart.removeItem(item);
        expect(cart).to.be.instanceOf(ShoppingCart);

        products = newShoppingCart.getProducts();
        expect(products.size).to.equal(0);
    });
});