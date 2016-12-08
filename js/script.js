var mainNavToggle = document.querySelector(".main-nav__menu-toggle");
var mainNavItems = document.querySelector(".main-nav__items");

mainNavToggle.classList.remove("main-nav__menu-toggle--no-js");
mainNavItems.classList.remove("main-nav__items--no-js");
mainNavItems.classList.toggle("main-nav__items--closed");

function toggleMenu(event) {
  event.preventDefault();
  mainNavItems.classList.toggle("main-nav__items--closed");
  mainNavToggle.classList.toggle("main-nav__menu-toggle--close");
}

  mainNavToggle.addEventListener("click", toggleMenu);

