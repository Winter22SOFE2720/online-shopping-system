import { writable } from 'svelte/store';
export * from 'svelte/store';

import Order from "../classes/Order";
import PaymentDetails from "../classes/PaymentDetails";
import ShoppingCart from "../classes/ShoppingCart";
import Product from "../classes/Product";

export const paymentDetails = new PaymentDetails();
export const shoppingCart = new ShoppingCart();
export const order = new Order(
    paymentDetails,
    shoppingCart
);

// Too lazy to go find different images
let DefaultImage = { 
    src: `https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`, 
    alt: `Description of image` 
};

export const Catagories = {
    "Food": [
        new Product(
            "Burger", 
            "A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.", 
            5.00, DefaultImage
        ),
        new Product(
            "Fries", 
            "French fries, chips, finger chips, french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes, probably originating from France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer.", 
            3.00, DefaultImage
        ),
        new Product(
            "Onion Rings", 
            `An onion ring, also called a French fried onion ring, is a form of appetizer or side dish in British and American cuisine. They generally consist of a cross-sectional "ring" of onion dipped in batter or bread crumbs and then deep fried; a variant is made with onion paste.`, 
            3.00, DefaultImage
        ),
        new Product(
            "Chicken Buckets", 
            "A bucket containing 15 pieces of chicken, a pint of gravy, and biscuits. The idea was sold as a way for housewives to escape the kitchen dinner and still prepare a great dinner, merely needing to add a salad and a vegetable for a balanced mea", 
            15.00, DefaultImage
        ),
    ],
    "Drinks": [
        new Product(
            "Coca Cola", 
            "Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton in Atlanta, Georgia.", 
            1.00, DefaultImage
        ),
        new Product(
            "Pepsi", 
            "Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893 by Caleb Bradham and introduced as Brad's Drink, it was renamed as Pepsi-Cola in 1898, and then shortened to Pepsi in 1961.", 
            1.00, DefaultImage
        ),
        new Product(
            "Canada Dry", 
            "Canada Dry is a brand of soft drinks founded in 1904 and owned since 2008 by the American company Keurig Dr Pepper. For over 100 years, Canada Dry has been known mainly for its ginger ale, though the company also manufactures a number of other soft drinks and mixers.", 
            1.00, DefaultImage
        ),
        new Product(
            "Beer", 
            "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most consumed drink overall after water and tea.", 
            1.00, DefaultImage
        )
    ],
    "Pizzas": [
        new Product(
            "Pepperoni Pizza", 
            "Pepperoni is an American variety of spicy salami made from cured pork and beef seasoned with paprika or other chili pepper. Prior to cooking, pepperoni is characteristically soft, slightly smoky, and bright red. Thinly sliced pepperoni is one of the most popular pizza toppings in American pizzerias.", 
            8.00, DefaultImage
        ),
        new Product(
            "Cheese Pizza", 
            "Pizza cheese encompasses several varieties and types of cheeses and dairy products that are designed and manufactured for use specifically on pizza. These include processed and modified cheese such as mozzarella-like processed cheeses and mozzarella variants.", 
            5.00, DefaultImage
        ),
        new Product(
            "Crust Lovers Pizza", 
            "Pizza that embraces the crust, it's not for everyone, but for those that enjoy it, they really enjoy it.", 
            10.00, DefaultImage
        ),
        new Product(
            "Mystery Toppings Pizza", 
            "Exactly as it sounds, a bunch of mystery toppings, customers are able to remove certain toppings they don't like.", 
            15.00, DefaultImage
        )
    ],
    "Snacks": [
        new Product(
            "Lays Chips", 
            "Lay's is a brand of potato chips, as well as the name of the company that founded the chip brand in the United States. The brand has also sometimes been referred to as Frito-Lay because both Lay's and Fritos are brands sold by the Frito-Lay company, which has been a wholly owned subsidiary of PepsiCo since 1965.", 
            0.50, DefaultImage
        ),
        new Product(
            "Pringles Original", 
            `Pringles is an American brand of stackable potato-based crisps. Originally sold by Procter & Gamble in 1968 and marketed as "Pringle's Newfangled Potato Chips", the brand was sold in 2012 to the current owner, Kellogg's. As of 2011, Pringles were sold in more than 140 countries.`, 
            0.50, DefaultImage
        ),
        new Product(
            "Doritos Original", 
            "Doritos is an American brand of flavored tortilla chips produced since 1964 by Frito-Lay, a wholly owned subsidiary of PepsiCo. The original Doritos were not flavored. The first flavor was Toasted Corn, released in 1966, followed by Taco in 1967 and Nacho Cheese in 1972.", 
            0.50, DefaultImage
        ),
        new Product(
            "Cookies", 
            "A cookie is a baked or cooked snack or dessert that is typically small, flat and sweet. It usually contains flour, sugar, egg, and some type of oil, fat, or butter. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc.", 
            0.50, DefaultImage
        )
    ]
};

for (let i = 0; i < Catagories.Food.length; i ++) {
    let food = Catagories.Food[i];
    shoppingCart.addItem( food );
}

export let filterBy = writable([]);
export let productsList = writable(Array.from(shoppingCart.getProducts()));

export const updateProductsList = () => 
    productsList.set(Array.from(shoppingCart.getProducts()));

export let addItem = (item: Product) => {
    shoppingCart.addItem(item);
    updateProductsList();
};

export let removeItem = (item: Product) => {
    shoppingCart.removeItem(item);
    updateProductsList();
};

export let getItem = (index: number) => {
    return shoppingCart.getItem(index);
};