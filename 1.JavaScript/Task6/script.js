//6. Use strict mode in your program and understand why variable not declared causes 
//error. 
function runStrictMode() {
  "use strict"; // Enabling strict mode

  let message = "";

  try {
    // Trying to assign to an undeclared variable
    undeclaredVar = 10; // This will throw a ReferenceError in strict mode
  } catch (error) {
    // Catch the error and display it
    message = "Error: " + error.message;
  }

  document.getElementById("output").innerHTML = message;
}
