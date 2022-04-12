import { describe, expect, it } from 'vitest';
import Order from "../../Code/src/classes/Order";
import PaymentDetails from "../../Code/src/classes/PaymentDetails";
import ShoppingCart from "../../Code/src/classes/ShoppingCart";
import Product from "../../Code/src/classes/Product";

describe("Integration Test", () => {
    const newPaymentDetails = new PaymentDetails();
    const newShoppingCart = new ShoppingCart();
    const newOrder = new Order(
        newPaymentDetails,
        newShoppingCart
    );

    it("User adds products to Shopping Cart", () => { 
        for (let i = 0; i < 5; i++) {
            let index = i + 1;

            let title = `Food ${index}`;
            let details = `Description of Food ${index}`;

            let cost = index * 5;
            let image = { 
                src: `./image-${index}`, 
                alt: `Description of image ${index}` 
            };

            let item = new Product(title, details, cost, image);
            newShoppingCart.addItem( item );
        }
        
        expect(newOrder.getShoppingCart().getProducts().size).to.equal(5);
    });

    it("Get 3rd Item in Shopping Cart and Update it's quantity", () => { 
        let item = newShoppingCart.getItem(2); // 3rd item in Shopping Cart
        item.updateQuantity(200);
        expect(
            newOrder
                .getShoppingCart()
                .getItem(2)
                .getQuantity()
        ).to.equal(item.getQuantity());
    });

    it("Remove first item from Shopping Cart", () => { 
        let item = newShoppingCart.getItem(0); // 1st item in Shopping Cart
        newShoppingCart.removeItem(item);
        expect(
            newOrder
                .getShoppingCart()
                .getProducts()
                .size
        ).to.equal(4);

        expect(
            newOrder
                .getShoppingCart()
                .getProducts()
                .has(item)
        ).to.false;
    });

    it("Proceed to Checkout and Enter Payment Info", async () => { 
        newPaymentDetails.RecieveUserInformation(
            // Billing & Shipping are the same location
            "2000 Simcoe St N, Oshawa, ON L1G 0C5",
            "2000 Simcoe St N, Oshawa, ON L1G 0C5",

            // Payment Info.
            "5425233430109903 -- 123 -- 04/23 -- 1234"
        );

        expect(newPaymentDetails.getBilling()).to.be.equal("2000 Simcoe St N, Oshawa, ON L1G 0C5");
        expect(newPaymentDetails.getShipping()).to.be.equal("2000 Simcoe St N, Oshawa, ON L1G 0C5");
        expect(newPaymentDetails.getPaymentInformation()).to.be.equal("5425233430109903 -- 123 -- 04/23 -- 1234");
        
        // We haven't signed up with a service that verifies user payment info.,
        // so this can't work for now, but we will still leave it in
        expect(await newPaymentDetails.VerifyPaymentInformation()).to.be.false;
    });
});