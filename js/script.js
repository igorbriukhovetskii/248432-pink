var mainNav = document.querySelector(".main-nav");
var mainNavToggle = document.querySelector(".main-nav__menu-toggle");
// var mainNavItems = document.querySelector(".main-nav__items");
var pageHeader = document.querySelector(".page-header");
var logo = document.querySelector(".logo");
// var pageHeaderTop = document.querySelector(".page-header__top");

pageHeader.classList.remove("page-header--no-js");
logo.classList.remove("logo--no-js");
mainNav.classList.remove("main-nav--no-js");
// pageHeaderTop.classList.remove("page-header__top--no-js");
// mainNavToggle.classList.remove("main-nav__menu-toggle--no-js");
// mainNavItems.classList.remove("main-nav__items--no-js");
// mainNavItems.classList.toggle("main-nav__items--closed");

function toggleMenu(event) {
  event.preventDefault();
  pageHeader.classList.toggle("page-header--nav-opened");
  logo.classList.toggle("logo--nav-opened");
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--opened");
}

mainNavToggle.addEventListener("click", toggleMenu);
