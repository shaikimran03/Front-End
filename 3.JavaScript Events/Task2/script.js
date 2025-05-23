document.getElementById("myForm").addEventListener("submit", function(event) {
    const inputBox = document.getElementById("inputBox");
    const errorMessage = document.getElementById("errorMessage");

    if (inputBox.value.trim() === "") {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = "Text box cannot be empty!";
        errorMessage.style.display = "block"; // Show error message
        inputBox.style.borderColor = "red"; // Highlight input box
    } else {
        errorMessage.style.display = "none"; // Hide error message
    }
});
