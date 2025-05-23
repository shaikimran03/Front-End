//4. Create an object "person" with properties firstname and lastname. Display these 
//properties using 2 different ways of accessing.
// Create an object with properties
let person = {
  firstname: "Alice",
  lastname: "Johnson"
};

// Function to display the object properties
function showPersonInfo() {
  let output = "<strong>Accessing Object Properties</strong><br>";

  // Method 1: Dot notation
  output += "First Name (dot notation): " + person.firstname + "<br>";

  // Method 2: Bracket notation
  output += "Last Name (bracket notation): " + person["lastname"];

  // Show the result on the web page
  document.getElementById("output").innerHTML = output;
}
