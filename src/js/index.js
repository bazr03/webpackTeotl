const path = require("path");
/* Estilos*/
require("normalize.css");
//import "../../node_modules/materialize-css/dist/js/materialize.min.js";
import "../../node_modules/popper/dist/popper.min.js";
import "jquery/dist/jquery.min.js";
import "bootstrap/js/dist/index";
import "bootstrap/scss/bootstrap.scss";
import "../styles/main.scss";
import "../styles/index.scss";
//import "../styles/custom.scss";

/* Imagenes*/
/*
***** REVISAR LAS RUTAS A IMAGENES DESDE ARCHIVOS CSS 
 CUANDO SE LANZE A PRODUCIION 
*/
import "../static/iconoTeotl.png";
import "../static/LOGO-TEOTL.png";
import "../static/panorama-Monterrey-NL-OPT.jpg";

/*--------------------------
------- Codigo JS ----------
----------------------------*/

/*--------------------------
------- SELECTORES ----------
----------------------------*/
const heroHome = document.querySelector(".hero-home");
const header = document.querySelector(".header");
const heroImage = document.querySelector(".header-logo");
const mainNavLinks = document.querySelectorAll(".nav-main__desktop a");
let mainNavLinksArr = Array.from(mainNavLinks);

/*--------------------------
------- OBSERVADORES ----------
----------------------------*/
observadores();

function observadores() {
  const heroOptions = {
    rootMargin: "-140px"
  };

  const heroObserver = new IntersectionObserver(function(
    entries,
    heroObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("header-scrolled");
        heroImage.classList.add("headerImg-scrolled");
        mainNavLinksArr.forEach(link => {
          link.classList.add("nav-main__desktop__item-scrolled");
        });
      } else {
        header.classList.remove("header-scrolled");
        heroImage.classList.remove("headerImg-scrolled");
        mainNavLinksArr.forEach(link => {
          link.classList.remove("nav-main__desktop__item-scrolled");
        });
      }
    });
  },
  heroOptions);

  heroObserver.observe(heroHome);
}
