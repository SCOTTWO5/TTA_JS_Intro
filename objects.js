const person = {
    name: 'Idris',
    age: 17,
    occupation: 'soldier',
    greet: function(){
        console.log('Hello' + ' ' + this.name);
    }
}

console.log(person.name);
console.log(person["age"]);
person.greet();