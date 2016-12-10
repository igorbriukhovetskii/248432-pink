var mainNavToggle = document.querySelector(".main-nav__menu-toggle");
var mainNavItems = document.querySelector(".main-nav__items");
var pageHeader = document.querySelector(".page-header");
var pageHeaderTop = document.querySelector(".page-header__top");

pageHeader.classList.remove("page-header--no-js");
pageHeaderTop.classList.remove("page-header__top--no-js");
mainNavToggle.classList.remove("main-nav__menu-toggle--no-js");
mainNavItems.classList.remove("main-nav__items--no-js");
mainNavItems.classList.toggle("main-nav__items--closed");

function toggleMenu(event) {
  event.preventDefault();
  pageHeaderTop.classList.toggle("page-header__top--menu-opened")
  mainNavItems.classList.toggle("main-nav__items--closed");
  mainNavToggle.classList.toggle("main-nav__menu-toggle--close");
}

  mainNavToggle.addEventListener("click", toggleMenu);
