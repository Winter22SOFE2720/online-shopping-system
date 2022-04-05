export class Product {
    private quantity = 1;
    constructor(
        private name: string,
        private details: string,
        private price: number
    ) { }
    
    public setQuantity(amount: number) {
        this.quantity = amount;
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