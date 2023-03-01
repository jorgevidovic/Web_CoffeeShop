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

// Eventos
window.addEventListener('load', function(){ // Load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log('Test 1');
});

window.onload = function(){
    console.log('Test 2');
}

document.addEventListener('DOMContentLoaded', function(){ // DOMContentLoaded solo espera a que se cargue el HTML, pero no espera CSS o Imagenes
    console.log('Test 3');
});

/*window.onscroll = function() {
    console.log('scrolling...');
}*/

//Seleccionar elementos y asociarles un evento
/*const btnEnviar = document.querySelector('.button--main')
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('Enviando formulario');
});*/

// Eventos de los inputs o textarea 

const datos = {
    name: '',
    email: '',
    message: ''
}
const name = document.querySelector ('#name');
const email = document.querySelector ('#email');
const message = document.querySelector ('#message');

name.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
message.addEventListener('input', leerTexto);

function leerTexto(e){
   datos[e.target.id] = e.target.value;
   console.log(datos);
}

// Evento submit
const form = document.querySelector('.form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Enviando formulario.')
})