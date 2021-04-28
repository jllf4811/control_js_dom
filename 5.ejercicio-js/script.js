'use strict';

async function obtenerDatos(url) {
    const respuesta = await fetch(url);
    const json = await respuesta.json();
    return json;
}

async function personajesEnero() {
    
    let i = 1;
    let url = `https://rickandmortyapi.com/api/episode?page=${i}`;
    let objeto = await obtenerDatos(url);
    const paginas = objeto.info.pages;
    let array = [];

    do {
        url = `https://rickandmortyapi.com/api/episode?page=${i}`
        objeto = await obtenerDatos(url);

        const arrayObjecto = objeto.results.reduce((acc, obj)=>{
            if(obj.air_date.indexOf('January') === 0){
                const array2 = obj.characters;
                for (let i = 0; i < array2.length; i++) {
                    acc.push(array2[i]);
                }        
            }
            return acc;
        },[]);
        array.push(arrayObjecto);
        i++;
    } while (paginas >= i);


    let arraySinRepeticiones = [];
    for (const key of array) {
        for (const key1 in key) {
            if (arraySinRepeticiones.indexOf(key[key1]) === -1) {
                arraySinRepeticiones.push(key[key1]);
            }
        }
        
    }



    const arrayPersonajes = [];
    for (const key of arraySinRepeticiones) {
        
        url = `${key}`;
        objeto = await obtenerDatos(url);

        arrayPersonajes.push(objeto.name);
    }
    return arrayPersonajes;
}

personajesEnero().then((nombre)=> console.log(nombre));