// Get the navigation links container element by its ID
var navLinks = document.getElementById('navLinks');

// Function to show the navigation menu by setting its right position to 0
function showMenu() {
    navLinks.style.right = '0';
}

// Function to hide the navigation menu by setting its right position to -200
function hideMenu() {
    navLinks.style.right = '-200px';
}
