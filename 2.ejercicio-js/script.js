'use strict';

function reloj(){ 
    
    const data = new Date();
    
    const segundos = data.getSeconds();
    const minutos = data.getMinutes();
    const horas = data.getHours();
    const dias = data.getDate();
    
    console.log(`Day:${dias} -- Time:${horas}:${minutos}:${segundos}`);
}

setInterval(reloj, 5000); 




