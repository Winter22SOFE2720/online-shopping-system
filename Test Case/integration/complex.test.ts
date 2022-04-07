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

    it("getPaymentDetails()", () => { 
        expect(newOrder.getPaymentDetails()).toBeInstanceOf(PaymentDetails);
    })
});