
/* Estilos*/
require('normalize.css');
import "../styles/main.scss";
/* Imagenes*/
import "../static/iconoTeotl.png";



/* Codigo JS*/
eventListeners();

function eventListeners(){
    window.addEventListener('scroll', () =>{
        console.log(window.scrollY);
    });
}


