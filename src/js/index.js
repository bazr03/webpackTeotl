
const path = require('path');
/* Estilos*/
require('normalize.css');
import "../styles/main.scss";
import "../styles/index.scss";

/* Imagenes*/
/*
***** REVISAR LAS RUTAS A IMAGENES DESDE ARCHIVOS CSS 
 CUANDO SE LANZE A PRODUCIION 
*/
import "../static/iconoTeotl.png";
import "../static/panorama-Monterrey-NL-OPT.jpg";



/* Codigo JS*/
const heroHome = document.querySelector('.hero-home');
const header = document.querySelector('.header');
const heroImage = document.querySelector('.header-logo');
const mainNavLinks = document.querySelectorAll('.nav-main__desktop a');
let mainNavLinksArr = Array.from(mainNavLinks);
console.log(mainNavLinks);

const heroOptions = {
    rootMargin: "-140px"
}

const heroObserver = new IntersectionObserver( function( entries,heroObserver ){
    entries.forEach( entry => {
        if(!entry.isIntersecting){
            header.classList.add("header-scrolled");
            heroImage.classList.add("headerImg-scrolled");
            //mainNavLinks.classList.add("nav-main__desktop__item-scrolled");
            mainNavLinksArr.forEach( link =>{
                link.classList.add("nav-main__desktop__item-scrolled");
            });
        } else {
            header.classList.remove("header-scrolled");
            heroImage.classList.remove("headerImg-scrolled");
            //mainNavLinks.classList.remove("nav-main__desktop__item-scrolled");
            mainNavLinksArr.forEach( link =>{
                link.classList.remove("nav-main__desktop__item-scrolled");
            });
        }
    });
}, heroOptions );

heroObserver.observe(heroHome);
//eventListeners();

function eventListeners(){
    window.addEventListener('scroll', () =>{
        console.log(window.scrollY);
    });
}


