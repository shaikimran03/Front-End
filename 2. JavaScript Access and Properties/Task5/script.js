//5. Add some more properties to an existing function using object prototypes.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding new properties using prototype
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

Person.prototype.country = "India"; // Adding a default property

// Creating an object
const imran = new Person("Imran", 25);

console.log(imran.greet());  // Output: Hello, my name is Imran and I am 25 years old.
console.log(imran.country);  // Output: India
