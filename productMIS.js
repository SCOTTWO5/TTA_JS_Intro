class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo(){
        console.log(`\n\t Name: ${this.name} \n\t price: ${this.price} \n\t Category: ${this.category}`);
    }

    applyDicount(discountRate){
        let discount = (this.price * discountRate) / 100;
        this.price -= discount;
        console.log(`\t New price after ${discountRate}% discount: ${this.price}`);
    }
}

let product1 = new Product('Laptop', 50000, 'Electronics');
let product2 = new Product('Shirt', 500, 'Clothing');

product1.getInfo();
product1.applyDicount(10);
product2.getInfo();
product2.applyDicount(20);
