'use strict';

/* Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre
y apellido, el sexo, el país, el email y un enlace a su foto de perfil.

El número de usuarios a obtener se debe indicar con un parámetro de dicha función. */


async function getData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

async function userData(numberUser) {

    const url = `https://randomuser.me/api/?results=${numberUser}`;
    const object = await getData(url);
    const data = object.results;
    const array = [];
    
    for (let i = 0; i < numberUser; i++) {
        let userD = [`${data[i].name.first} ${data[i].name.last}`, data[i].gender, data[i].location.country, data[i].email, data[i].picture.large];
        array.push(userD);
    }
    
    return array;
}
userData(Number(prompt('Escribe el numeros de usuarios de los cuales quieres obtener sus datos:')))
    .then((array) => console.log(array));










