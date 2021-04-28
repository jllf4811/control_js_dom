'use strict';


const contenedorCuadrado = document.querySelector('section');
const botonAñadir = document.querySelector('button');

botonAñadir.addEventListener('click',(e)=>{
    contenedorCuadrado.append(document.createElement('div'))
})

    
setInterval(() => {
    let cuadrado = document.querySelectorAll('div');
    for (let i = 0; i < cuadrado.length; i++) {
        cuadrado[i].style.backgroundColor= `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }
}, 500); 