
/**
 * Represents a Product shoppers can buy. The Product class contains, 
 * - The name of the product
 * - The details/descriptions of the product
 * - The price of the product
 * - The quantity/amounts to buy product in
 * 
 * @author Okiki Ojo
 * @date April 5, 2022
 */
export class Product {
    private quantity = 1;
    constructor(
        private name: string,
        private details: string,
        private price: number
    ) { 
        if (typeof name != "string" && typeof details != "string")
            throw new TypeError("Product constructor arguments are not valid.");
            
        if (typeof name != "string" || name.length <= 0)
            throw new TypeError("Product must have a name and it must be a non-empty string.");
        
        if (typeof details != "string" || details.length <= 0)
            throw new TypeError("Product must have a description about it and it must be a non-empty string.");
        
        if (typeof price != "number")
            throw new TypeError("Product price must be a number.");
        
        this.price = Math.max(0, price);
    }
    
    public setQuantity(amount: number) {
        // You can't have less than 0 quantities of a product
        this.quantity = Math.max(0, amount);
        return this;
    }
    
    public setPrice(price: number) {
        this.price = Math.max(0, price);
        return this;
    }
    
    public getName() {
        return this.name;
    }
    
    public getPrice() {
        return this.price;
    }
    
    public getDetails() {
        return this.details;
    }
    
    public getQuantity() {
        return this.quantity;
    }
}

export default Product;