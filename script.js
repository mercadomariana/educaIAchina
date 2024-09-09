const elegir1 = document.querySelector('.elegir1');
const elegir1HoverContenedor = document.querySelector('.elegir1hover-contenedor');

elegir1.addEventListener('mouseover', function() {
    elegir1HoverContenedor.classList.remove('elegir1hover-contenedor');
    elegir1.classList.add('elegir1hover-contenedor');
    elegir1.classList.add('pointer-cursor');
});

elegir1.addEventListener('mouseout', function() {
    elegir1HoverContenedor.classList.add('elegir1hover-contenedor');
    elegir1.classList.remove('elegir1hover-contenedor');
    elegir1.classList.remove('pointer-cursor');
});


const elegir2 = document.querySelector('.elegir2');
const elegir2HoverContenedor = document.querySelector('.elegir2hover-contenedor');
elegir2.addEventListener('mouseover', function() {
    elegir2HoverContenedor.classList.remove('elegir2hover-contenedor');
    elegir2.classList.add('elegir2hover-contenedor');
    elegir2.classList.add('pointer-cursor');
});
elegir2.addEventListener('mouseout', function() {
    elegir2HoverContenedor.classList.add('elegir2hover-contenedor');
    elegir2.classList.remove('elegir2hover-contenedor');
    elegir2.classList.remove('pointer-cursor');
});

const elegir3 = document.querySelector('.elegir3');
const elegir3HoverContenedor = document.querySelector('.elegir3hover-contenedor');
elegir3.addEventListener('mouseover', function() {
    elegir3HoverContenedor.classList.remove('elegir3hover-contenedor');
    elegir3.classList.add('elegir3hover-contenedor');
    elegir3.classList.add('pointer-cursor');
});
elegir3.addEventListener('mouseout', function() {
    elegir3HoverContenedor.classList.add('elegir3hover-contenedor');
    elegir3.classList.remove('elegir3hover-contenedor');
    elegir3.classList.remove('pointer-cursor');
});

const elegir4 = document.querySelector('.elegir4');
const elegir4HoverContenedor = document.querySelector('.elegir4hover-contenedor');
elegir4.addEventListener('mouseover', function() {
    elegir4HoverContenedor.classList.remove('elegir4hover-contenedor');
    elegir4.classList.add('elegir4hover-contenedor');
    elegir4.classList.add('pointer-cursor');
});
elegir4.addEventListener('mouseout', function() {
    elegir4HoverContenedor.classList.add('elegir4hover-contenedor');
    elegir4.classList.remove('elegir4hover-contenedor');
    elegir4.classList.remove('pointer-cursor');
});

// amarillo 2015
document.querySelector('.graficoAmarillo2015').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
});
document.querySelector('.graficoAmarillo2015').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
});

// amarillo 2017
document.querySelector('.graficoAmarillo2017').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2017').classList.add('amarillo2017Hover');
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
    document.querySelector('.graficoAmarillo2016').classList.add('amarillo2016Hover');
});
document.querySelector('.graficoAmarillo2017').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2017').classList.remove('amarillo2017Hover');
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
    document.querySelector('.graficoAmarillo2016').classList.remove('amarillo2016Hover');
});

//amarillo 2016
document.querySelector('.graficoAmarillo2016').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2016').classList.add('amarillo2016Hover');
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
});
document.querySelector('.graficoAmarillo2016').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2016').classList.remove('amarillo2016Hover');
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
});

//amarillo 2018
document.querySelector('.graficoAmarillo2018').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2018').classList.add('amarillo2018Hover');
    document.querySelector('.graficoAmarillo2017').classList.add('amarillo2017Hover');
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
    document.querySelector('.graficoAmarillo2016').classList.add('amarillo2016Hover');
});
document.querySelector('.graficoAmarillo2018').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2018').classList.remove('amarillo2018Hover');
    document.querySelector('.graficoAmarillo2017').classList.remove('amarillo2017Hover');
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
    document.querySelector('.graficoAmarillo2016').classList.remove('amarillo2016Hover');
});

// Rojo 2015
document.querySelector('.graficoRojo2015').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.add('rojo2015Hover');
});

document.querySelector('.graficoRojo2015').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.remove('rojo2015Hover');
});

// Rojo 2016
document.querySelector('.graficoRojo2016').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.add('rojo2015Hover');
    document.querySelector('.graficoRojo2016').classList.add('rojo2016Hover');
    document.querySelector('.graficoAmarillo2016').classList.add('amarillo2016Hover');
});

document.querySelector('.graficoRojo2016').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.remove('rojo2015Hover');
    document.querySelector('.graficoRojo2016').classList.remove('rojo2016Hover');
    document.querySelector('.graficoAmarillo2016').classList.remove('amarillo2016Hover');
});

// Rojo 2017
document.querySelector('.graficoRojo2017').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.add('rojo2015Hover');
    document.querySelector('.graficoRojo2016').classList.add('rojo2016Hover');
    document.querySelector('.graficoAmarillo2016').classList.add('amarillo2016Hover');
    document.querySelector('.graficoAmarillo2017').classList.add('amarillo2017Hover');
    document.querySelector('.graficoRojo2017').classList.add('rojo2017Hover');
});

document.querySelector('.graficoRojo2017').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.remove('rojo2015Hover');
    document.querySelector('.graficoRojo2016').classList.remove('rojo2016Hover');
    document.querySelector('.graficoAmarillo2016').classList.remove('amarillo2016Hover');
    document.querySelector('.graficoRojo2017').classList.remove('rojo2017Hover');
    document.querySelector('.graficoAmarillo2017').classList.remove('amarillo2017Hover');
});

// Rojo 2018
document.querySelector('.graficoRojo2018').addEventListener('mouseover', function() {
    document.querySelector('.graficoAmarillo2015').classList.add('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.add('rojo2015Hover');
    document.querySelector('.graficoRojo2016').classList.add('rojo2016Hover');
    document.querySelector('.graficoAmarillo2016').classList.add('amarillo2016Hover');
    document.querySelector('.graficoAmarillo2017').classList.add('amarillo2017Hover');
    document.querySelector('.graficoRojo2017').classList.add('rojo2017Hover');
    document.querySelector('.graficoAmarillo2018').classList.add('amarillo2018Hover');
    document.querySelector('.graficoRojo2018').classList.add('rojo2018Hover');
});

document.querySelector('.graficoRojo2018').addEventListener('mouseout', function() {
    document.querySelector('.graficoAmarillo2015').classList.remove('amarillo2015Hover');
    document.querySelector('.graficoRojo2015').classList.remove('rojo2015Hover');
    document.querySelector('.graficoRojo2016').classList.remove('rojo2016Hover');
    document.querySelector('.graficoAmarillo2016').classList.remove('amarillo2016Hover');
    document.querySelector('.graficoRojo2017').classList.remove('rojo2017Hover');
    document.querySelector('.graficoAmarillo2017').classList.remove('amarillo2017Hover');
    document.querySelector('.graficoRojo2018').classList.remove('rojo2018Hover');
    document.querySelector('.graficoAmarillo2018').classList.remove('amarillo2018Hover');
});