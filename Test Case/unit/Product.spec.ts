import { describe, expect, it } from 'vitest';

import Product from "../../Code/src/classes/Product";

describe("Product class", () => {
    const item = new Product(
        // Product Name
        "Frozen Cheese Pizza", 

        // Description
        "Pizza is a delicious food that people enjoy to eat.", 

        // Cost ($5.00)
        5.00
    );

    it("constructor()", () => {
        try {
            // @ts-ignore
            let item = new Product();
        } catch (e) { 
            expect(e).to.instanceOf(TypeError);
            expect(e.message).to.equal("Product constructor arguments are not valid.");
        }
    });

    it("constructor(undefined, '', -5.00)", () => {
        try {
            // @ts-ignore
            let product = new Product(undefined, "", -5.00);
        } catch (e) { 
            expect(e).to.instanceOf(TypeError);
            expect(e.message).to.equal("Product must have a name and it must be a non-empty string.");
        }

        try {
            // @ts-ignore
            let product = new Product("", "", -5.00);
        } catch (e) { 
            expect(e).to.instanceOf(TypeError);
            expect(e.message).to.equal("Product must have a name and it must be a non-empty string.");
        }

        try {
            // @ts-ignore
            let product = new Product("name", "", -5.00);
        } catch (e) { 
            expect(e).to.instanceOf(TypeError);
            expect(e.message).to.equal("Product must have a description about it and it must be a non-empty string.");
        }

        try {
            // @ts-ignore
            let product = new Product("name", "details", -5.00);
        } catch (e) { 
            console.error(e);
        }
    });

    it("getQuantity()", () => {
        expect(item.getQuantity()).to.eq(1);
    });

    it("setQuantity()", () => {
        let result = item.setQuantity(5);
        expect(item.getQuantity()).to.eq(5);
        expect(result).to.be.instanceOf(Product);
    });

    it("setQuantity(-5)", () => {
        let result = item.setQuantity(-5);
        expect(item.getQuantity()).to.eq(0);
        expect(result).to.be.instanceOf(Product);
    });

    it("getName()", () => {
        expect(item.getName()).to.eq("Frozen Cheese Pizza");
    });

    it("getPrice()", () => {
        expect(item.getPrice()).to.eq(5.00);
    });

    it("setPrice()", () => {
        let result = item.setPrice(15.00);
        expect(item.getPrice()).to.eq(15.00);
        expect(result).to.be.instanceOf(Product);
    });

    it("setPrice(-5.00)", () => {
        let result = item.setPrice(-5.00);
        expect(item.getPrice()).to.eq(0.00);
        expect(result).to.be.instanceOf(Product);
    });

    it("getDetails()", () => {
        expect(item.getDetails()).to.eq("Pizza is a delicious food that people enjoy to eat.");
    });
});