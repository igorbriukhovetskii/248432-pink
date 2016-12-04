var mainNavToggle = document.querySelector(".main-nav__toggle");
var mainNavItems = document.querySelector(".main-nav__items");
mainNavItems.classList.remove("main-nav__items--no-js");

function toggleMenu(event) {
  event.preventDefault();
  mainNavItems.classList.toggle("main-nav__items--closed");
  mainNavToggle.classList.toggle("main-nav__toggle--close");
}

mainNavToggle.addEventListener("click", toggleMenu);
