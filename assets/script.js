var navLinks = document.getElementById("navLinks")

function showMenu () {                        // open menu bar for mobile devices
    navLinks.style.right = "0";
}

function hideMenu () {                        // close menu bar for mobile devices                 
    navLinks.style.right = "-200px";
}