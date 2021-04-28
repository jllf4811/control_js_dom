'use strict';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

const sinRepeticion = names.reduce((acc, name)=>{
    
    if (acc.indexOf(name) === -1 ) {
        acc.push(name);
    }
    return acc;
},[]);

console.log(sinRepeticion);