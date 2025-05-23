//5. Write a program with variable hoisting(initialization first then declaration). 

function hoistExample() {
  // Initialize variable before declaration (hoisting example)
  output = "The value of x is: " + x; // At this point, x is 'undefined'
  
  var x = 10; // Declaration is hoisted, but not the value

  output += "<br>After initialization, x = " + x;

  document.getElementById("output").innerHTML = output;
}
