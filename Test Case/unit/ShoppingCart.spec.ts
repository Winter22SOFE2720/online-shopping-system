import { describe, expect, it } from 'vitest';

import ShoppingCart from "../../Code/src/classes/ShoppingCart";
import Product from "../../Code/src/classes/Product";

describe("ShoppingCart class", () => {
    const newShoppingCart = new ShoppingCart();
    const item = new Product("Pizza", "Description is ...", 5, { src: "./image.jpg" });

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

    it("getItem()", () => {
        let _item = newShoppingCart.getItem(0);
        expect(_item).to.be.equal(item);
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