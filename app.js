// Create the Macintosh status bar
const status = document.createElement("div");

status.id = "mac-status";
status.textContent = "Welcome to Macintosh!";

document.querySelector(".mac-window").appendChild(status);


// Show messages when navigation links are clicked
const links = document.querySelectorAll(".main-nav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        status.textContent = "Opening " + link.textContent + "...";
    });
});


// Show messages when desktop icons are clicked
const icons = document.querySelectorAll(".desktop-icon");

icons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        status.textContent = "Selected: " + icon.textContent.trim();
    });
});


// Macintosh startup screen
const bootScreen = document.getElementById("boot-screen");
const skipButton = document.getElementById("boot-skip");

function startMacintosh() {
    bootScreen.classList.add("boot-finished");
    document.body.classList.add("mac-ready");
}


// Allow visitors to skip the startup screen
skipButton.addEventListener("click", startMacintosh);


// Automatically finish startup after 2.8 seconds
setTimeout(startMacintosh, 2800);
