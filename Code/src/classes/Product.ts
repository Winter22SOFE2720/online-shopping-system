export interface Image {
    src: string,
    alt?: string
}

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
        private price: number,
        private image: Image
    ) { 
        if (typeof name != "string" && typeof details != "string")
            throw new TypeError("Product constructor arguments are not valid.");
            
        if (typeof name != "string" || name.length <= 0)
            throw new TypeError("Product must have a name and it must be a non-empty string.");
        
        this.setDetails(details);
        this.setPrice(price);
        this.setImage(image);
    }
    
    /**
     * Normally we would connect to a backend and verify that product quantity wanted was fulfilable,
     * but for the sake of project delievery for now we will remove the backend portion of the project
     * 
     * _Note, you can't have less than 0 quantities of a product, the minimum quantity allowed is 0_
     * 
     * @param amount Amount of product user would like to by
     */
    public updateQuantity(amount: number) {
        // You can't have less than 0 quantities of a product
        this.quantity = Math.max(0, amount);
        return this;
    }
    
    public setPrice(price: number) {
        if (typeof price != "number")
            throw new TypeError("Product price must be a number.");

        this.price = Math.max(0, price);
        return this;
    }
    
    public setDetails(details: string) {
        if (typeof details != "string" || details.length <= 0)
            throw new TypeError("Product must have a description about it and it must be a non-empty string.");

        this.details = details;
        return this;
    }
    
    public setImage(image: Image) {
        if (
            image == undefined || image == null ||
            typeof image?.src != "string" || image?.src?.length <= 0
        ) 
            throw new TypeError("Product must have an image and it must be given a src to grab the image from.");

        this.image = image;
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
    
    public getImage() {
        return this.image;
    }
}

export default Product;