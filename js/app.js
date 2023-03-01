console.log("Funciona correctamente!")

// QuerySelector
const heading = document.querySelector('.header__text h2');
console.log(heading);

// QuerySelectorAll
const links = document.querySelectorAll('.nav a');
console.log(links);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar HREF
nuevoEnlace.href = 'nuevo-enlace.html'

// Agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

// Agregar la clase
nuevoEnlace.classList.add('nav__links');

// Agregarlo al documento
const navegacion = document.querySelector('.nav');
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace);

