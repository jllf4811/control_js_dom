'use strict';
const boton = document.querySelectorAll('button');
const parrafo = document.querySelector('p');
const incio = new Date();

let crono;
let segundos =0;
let minutos =0;


function detenerse() {
    clearInterval(crono);
}

function star() {

    crono = setInterval(() => {
    segundos++;
    if (segundos === 60) {
            segundos = 0;
            minutos++;
        
    } else if (minutos === 60 && segundos === 60){
        detenerse();
        alert('Pausa por tiempo limitado del cronometro');
    }

    parrafo.textContent = `${agrgarCero(minutos)}:${agrgarCero(segundos)}`;
    
    }, 1000);
}

function agrgarCero(numero) {
    if (numero < 10) {
        return '0' + numero;
    }
    return numero;
}

boton[0].addEventListener('click',(e)=>{
    (e).preventDefault();
    
    if (e.target.matches('#start')) {
        boton[0].disabled = true;
        boton[1].disabled = false;
        star();
    }
})

boton[1].addEventListener('click',(e)=>{
    (e).preventDefault();
    
    if (e.target.matches('#pausa')) {
        boton[1].disabled = true;
        boton[0].disabled = false;
        detenerse();
    }
})

boton[2].addEventListener('click', (e)=>{
    
    if (e.target.matches('#reiniciar')){
    detenerse();
    boton[0].disabled = false;
    boton[1].disabled = false;
    segundos = '00';
    minutos = '00';
    parrafo.innerHTML = `${minutos}:${segundos}`; 
    }

})