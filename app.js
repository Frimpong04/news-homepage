// selectors
const menuIcon = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu"); 
const navLinks = document.querySelector(".nav-links");
const container = document.querySelector(".main-content");
const navBar = document.querySelector("nav");

// functions
function showMenu() {
    console.log("clicked");
    navLinks.classList.add("open-menu");
    menuIcon.style.display = "none";
    closeMenu.style.display = "block";
    container.classList.add("darken-bg");
    // navBar.classList.add("darken-bg");
}

function hideMenu() {
    console.log("hide me");
    navLinks.classList.remove("open-menu");
    menuIcon.style.display = "block"
    closeMenu.style.display = "none";
    container.classList.remove("darken-bg");
    // navBar.classList.remove("darken-bg");
}
// event listeners
menuIcon.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu); 