import { describe, expect, it } from 'vitest';

import Order from "../../Code/src/classes/Order";
import PaymentDetails from "../../Code/src/classes/PaymentDetails";
import ShoppingCart from "../../Code/src/classes/ShoppingCart";
import Product from "../../Code/src/classes/Product";

describe("Order class", () => {
    const newPaymentDetails = new PaymentDetails();
    const newShoppingCart = new ShoppingCart();
    const newOrder = new Order(
        newPaymentDetails,
        newShoppingCart
    );

    it("getPaymentDetails()", async () => {
        expect(newOrder.getPaymentDetails()).toBeInstanceOf(PaymentDetails);
        expect(newOrder.getPaymentDetails()).eql(newPaymentDetails);

        let BankVerification = await newOrder
            .getPaymentDetails()
            .VerifyPaymentInformation();

        expect(BankVerification).to.be.false;
    });

    it("getShoppingCart()", () => {
        expect(newOrder.getShoppingCart()).toBeInstanceOf(ShoppingCart);
        expect(newOrder.getShoppingCart()).eql(newShoppingCart);

        expect(newOrder.getShoppingCart().getProducts()).to.be.empty;

        let pizza = new Product("Pizza", "Italian Pizza", 5.00, { src: "./but-its-pizza.jpg", alt: "The Pizza Delight" });
        newShoppingCart.addItem(pizza);

        expect(newOrder.getShoppingCart().getProducts()).to.not.be.empty;
        expect(newOrder.getShoppingCart().getProducts().has(pizza)).to.be.eql(true);

        newOrder.getShoppingCart().getProducts().delete(pizza);

        expect(newShoppingCart.getProducts()).to.be.empty;
        expect(newShoppingCart.getProducts().has(pizza)).to.not.be.eql(true);
    });
});