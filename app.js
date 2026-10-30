
// Create the Macintosh status bar
const status = document.createElement("div");

status.id = "mac-status";
status.textContent = "Welcome to Macintosh!";

document.querySelector(".mac-window").appendChild(status);

// Navigation messages
const links = document.querySelectorAll(".main-nav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        status.textContent = "Opening " + link.textContent + "...";
    });
});

// Desktop icon messages
const icons = document.querySelectorAll(".desktop-icon");

icons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        status.textContent = "Selected: " + icon.textContent.trim();
    });
});
