//5. Create a JSON object and access it using dot notation. 

// JSON object representing a user
const user = {
    name: "Imran",
    age: 25,
    country: "India",
    skills: {
        primary: "Web Development",
        secondary: "JavaScript"
    }
};

// Accessing properties using dot notation
console.log(user.name);       // Output: Imran
console.log(user.age);        // Output: 25
console.log(user.country);    // Output: India
console.log(user.skills.primary);  // Output: Web Development
console.log(user.skills.secondary); // Output: JavaScript
