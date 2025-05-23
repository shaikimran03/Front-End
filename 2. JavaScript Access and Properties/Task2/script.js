//2. Invoke a function using call() and apply(). Also Spot the difference between them. 

function introduce(language, country) {
    console.log(`Hello, my name is ${this.name}. I speak ${language} and I am from ${country}.`);
}

const person = { name: "Imran" };

// Using call (arguments passed individually)
introduce.call(person, "English", "India");

// Using apply (arguments passed as an array)
introduce.apply(person, ["English", "India"]);
