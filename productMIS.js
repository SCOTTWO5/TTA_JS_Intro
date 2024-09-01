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

let product1 = new Product('T-Shirt', 1000, 'Clothing');
let product2 = new Product('Shirt', 500, 'Clothing');

product1.getInfo();
product1.applyDicount(10);
product2.getInfo();
product2.applyDicount(20);

class Electronics extends Product {
    constructor(name, price, brand, waranty){
        super(name, price, 'Electronics');
        this.brand = brand;
        this.waranty = waranty;
    }

    getInfo(){
        console.log(`\n\t Name: ${this.name} \n\t price: ${this.price} \n\t Category: ${this.category}`);
        console.log(`\t Brand: ${this.brand} \n\t Waranty: ${this.waranty}`);
    }
}

let product3 = new Electronics('Laptop', 50000, 'Dell', '1 year');
let product4 = new Electronics(' Mobile', 20000, 'Samsung', '2 year');

product3.getInfo();
// product3.getEletronicsInfo();
product3.applyDicount(10);
// product4.getEletronicsInfo();
product4.applyDicount(20);