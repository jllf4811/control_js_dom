'use strict';

const parrafo = document.querySelectorAll('p');

const fragment  = document.createDocumentFragment();
let palabras;
for (let i = 0; i < parrafo.length; i++) {
    
    palabras = parrafo[i].innerHTML.split(' ')
    .map((palabra)=> palabra.replace(/\s/g,'').split(''))
    .reduce((acc, letra)=> {        
        if (letra.length > 5) {
            
            letra.unshift('<u>')
            letra.push('</u>');
            acc.push(letra.join(''));
        }else {
            acc.push(letra.join(''))
        }
        return acc;
    },[]).join(' ');
    
    parrafo[i].innerHTML = `${palabras}`
}
