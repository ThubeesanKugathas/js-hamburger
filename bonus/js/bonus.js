// obbiettivo: rendere visibile hamburger-menu dopo il click ed invisibile dopo il click del close 

// definire le variabili dei due bottoni 
const openButton = document.querySelector('.fa-bars');
const closeButton = document.querySelector('.close');

// definire le variabili delle classi che si modificheranno dopo i click 
let hamburgerEffect = document.querySelector('.hamburger-menu');

// clickCounter a 0 per indicare l'effetto spento
let clickCounter = 0;

openButton.addEventListener('click', function () {
    clickCounter++; 

    // se clickCounter è diverso da 0 allora aggiunge active
    if (clickCounter !== 0) {
        hamburgerEffect.classList.add('active');
    } 
})

closeButton.addEventListener('click', function () {
    clickCounter++; 

    // se clickCounter è diverso da 0, allora toglie active
    if (clickCounter !== 0) {
        hamburgerEffect.classList.remove('active');
    } 
})

const dropdown = document.getElementById('link');

let dropdownEffect = document.querySelector('.ms_dropdown-list');

dropdown.addEventListener('click', function () {
    clickCounter++; 

    // se clickCounter è diverso da 0 allora aggiunge active
    if (clickCounter % 2 !== 0) {
        dropdownEffect.classList.add('ms_show');
    } else {
        dropdownEffect.classList.remove('ms_show');
    }
})