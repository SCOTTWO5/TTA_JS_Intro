// Function Declaration
function sayHello(){
    console.log('Hello World!');
}

function greet(name){
    // console.log('Hello ' + name);
    return 'Hello' + name;
}

// Function calling
sayHello();
// greet('John');
console.log(greet('John'));

// Function Expression
const addition = function(a, b){
    return a + b;
}
let sum = addition(10,10)
console.log(`The sum is ${sum}`);

//Arrow Function
const multiply = (a, b) => a * b;
let product = multiply(10, 5);
console.log(`The product is ${product}`);

//Functional Scope
let x = 5;
function example(){
    let x = 10;
    console.log(`the value of x inside the function is ${x}`);
}

example();
console.log(`the value of x is ${x}`);