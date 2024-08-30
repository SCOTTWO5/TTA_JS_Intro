let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry', 'kiwi', 'grape', 'watermelon', 'pineapple', 'blueberry'];
let vegetable    = ['carrot', 'tomato', 'pepper', 'lettuce', 'cucumber', 'broccoli', 'onion', 'garlic', 'potato', 'ginger'];
let fastFood = ['hamburger', 'fries', 'hotdog', 'pizza', 'ice cream', 'chicken nuggets', 'sandwich', 'onion rings', 'taco', 'burrito',];

console.log("==== Inventory Management System ====");
console.log("---- fruits ----");
for (let i = 0; i < fruits.length; i++){
    let j = i + 1;
    console.log(' ' + j + '. ' + fruits[i]);
}
console.log("-----------------");
console.log(`Total number of fruits: ${fruits.length}`);

console.log("---- Vegetable ----");
let n = 0;
while (n < vegetable.length){
    let m = n + 1;
    console.log(' ' + m + '. ' + vegetable[n]);
    n++;
}
console.log("--------------------");
console.log(`Total number of vegetation: ${vegetable.length}`);

console.log("---- Fast Food ----");
fastFood.forEach((food, index) => {
    console.log(' ' + (index + 1) + '. ' + food);
});
console.log("--------------------");
console.log(`Total number of fast food: ${fastFood.length}`);
console.log("======================================")