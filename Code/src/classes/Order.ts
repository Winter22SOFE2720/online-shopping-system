import PaymentDetails from "./PaymentDetails";
import ShoppingCart from "./ShoppingCart";

/** 
 * The Order class holds the {@link PaymentDetails payment details} and the {@link ShoppingCart shopping cart items} of shoppers. 
 * The order data is sent to order fulfilment team, where the logistics are carried out, an expected delivery date is given and the order is fulfilled.  
 * 
 * _**Note**: This class should be called the `Payment` class, but the `Order` class sounded better, so I renamed it._
 * 
 * @author Okiki Ojo
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