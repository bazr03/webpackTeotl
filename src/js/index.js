const path = require("path");
/* Estilos*/


import "bootstrap";
import "../styles/main.scss";
import "../styles/index.scss";


/* Imagenes*/
/*
***** REVISAR LAS RUTAS A IMAGENES DESDE ARCHIVOS CSS 
 CUANDO SE LANZE A PRODUCIION 
*/
// import "../static/iconoTeotl.png";
import "../static/LogoTeotl.svg"
import "../static/LOGO-TEOTL.png";
import "../static/panorama-Monterrey-NL-OPT.jpg";
import "../static/panorama-Monterrey-NL-OPT-375x245px.jpg"
import "../static/panorama-Monterrey-NL-OPT-450x650px.jpg"
import "../static/Isotipo-blanco-teotl-SemiTransparent17.svg";
import "../static/Caracol-gris-teotl.svg"
import "../static/monterrey-H600px-W900px.jpg"


/*--------------------------
------- Codigo JS ----------
----------------------------*/

/*--------------------------
------- SELECTORES ----------
----------------------------*/
// const heroHome = document.querySelector(".hero-home");
// const header = document.querySelector(".header");
// const heroImage = document.querySelector(".header-logo");
// const mainNavLinks = document.querySelectorAll(".nav-main__desktop a");
const backdrop = document.querySelector(".backdrop");
const toggleNavButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector('.mobile-nav__container');
// let mainNavLinksArr = Array.from(mainNavLinks);

console.log(backdrop);
/*--------------------------
------- OBSERVADORES ----------
----------------------------*/
// observadores();

// function observadores() {
//   const heroOptions = {
//     rootMargin: "-140px"
//   };

//   const heroObserver = new IntersectionObserver(function(
//     entries,
//     heroObserver
//   ) {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         header.classList.add("header-scrolled");
//         heroImage.classList.add("headerImg-scrolled");
//         mainNavLinksArr.forEach(link => {
//           link.classList.add("nav-main__desktop__item-scrolled");
//         });
//       } else {
//         header.classList.remove("header-scrolled");
//         heroImage.classList.remove("headerImg-scrolled");
//         mainNavLinksArr.forEach(link => {
//           link.classList.remove("nav-main__desktop__item-scrolled");
//         });
//       }
//     });
//   },
//   heroOptions);

//   heroObserver.observe(heroHome);
// }


/*--------------------------
------- MOBILE NAV ----------
----------------------------*/
toggleNavButton.addEventListener('click', function(){
  backdrop.style.display = "block";
  mobileNav.style.opacity= "1";
  mobileNav.classList.add('open');
  setTimeout( function(){
    backdrop.classList.add('open');
 },10 );
});

backdrop.addEventListener('click', function(){
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
    setTimeout( function(){
        backdrop.style.display = "none";
     },200 );
} );