// obbiettivo: rendere visibile hamburger-menu dopo il click ed invisibile dopo il click del close 

// definire le variabili dei due bottoni 
const openButton = document.querySelector('.fa-bars');
const closeButton = document.querySelector('.close');

// definire le variabili delle classi che si modificheranno dopo i click 
let hamburgerEffect = document.querySelector('.hamburger-menu');

let clickCounter = 0;

