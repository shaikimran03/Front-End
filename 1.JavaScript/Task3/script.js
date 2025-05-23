//3. Write a program with FOR/IN loop
// Object with key-value pairs
let student = {
  name: "John",
  age: 21,
  course: "Computer Science",
  grade: "A"
};

// Function to use for...in loop
function displayInfo() {
  let outputText = "<strong>Student Details:</strong><br>";

  // for...in loop to iterate over object properties
  for (let key in student) {
    outputText += key + ": " + student[key] + "<br>";
  }

  // Display the output
  document.getElementById("output").innerHTML = outputText;
}
