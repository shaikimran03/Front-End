document.getElementById("timeButton").addEventListener("click", function() {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Get formatted date & time

    const displayElement = document.getElementById("displayTime");
    displayElement.textContent = formattedTime;

    // Apply animation effect
    displayElement.style.opacity = 1;
});
