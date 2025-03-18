const menuIcon = document.querySelector(".menu-toggle");
const closeIcon = document.querySelector(".close-icon");
const menuContainer = document.querySelector(".mobile-menu-container");
console.log(menuIcon, closeIcon, menuContainer);

menuIcon.addEventListener("click", () => {
    console.log("Menu icon clicked");
    menuContainer.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
    console.log("Close icon clicked");
    menuContainer.classList.remove("active");
});