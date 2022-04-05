import PaymentDetails from "./PaymentDetails";
import ShoppingCart from "./ShoppingCart";

/** 
 * This should be the `Payment` class, but the `Order` class sounded better, so I renamed it
 * 
 * @author @okikio_school (Okiki Ojo)
 * @date April 5, 2022
 */
export class Order {
    constructor(
        private paymentDetails: PaymentDetails,
        private shoppingCart: ShoppingCart
    ) { }

    public getPaymentDetails() {
        return this.paymentDetails;
    }

    public getShoppingCart() {
        return this.shoppingCart;
    }
}

export default Order;