//4. Write functions to set a cookie, get a cookie and check a cookie in a single program. 

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let [cookieName, cookieValue] = cookies[i].split("=");
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null; // Return null if the cookie isn't found
}

// Function to check if a cookie exists
function checkCookie(name) {
    let cookieValue = getCookie(name);
    if (cookieValue) {
        console.log(`Cookie "${name}" found with value: ${cookieValue}`);
    } else {
        console.log(`Cookie "${name}" not found.`);
    }
}

// Example Usage:
setCookie("user", "Imran", 7); // Set a cookie for 7 days
console.log(getCookie("user")); // Get cookie value
checkCookie("user"); // Check if cookie exists
