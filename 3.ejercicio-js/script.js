'use strict';


function conversion(numero, base) {
    if(base === 2){

    const array=[];
    let division = numero;
    
    do{
        let resto = division % 2;
        division /= 2;
        array.push(Math.floor(resto));
        
    }while (division > 1)
    

    return array.reverse().join(''); 
    }else if(base === 10){
        const array = numero.toString().split('').reverse();
        let cantidad = 0;
        for (let i = 0; i < array.length; i++) {
            
            if(array[0] === '0' && i === 0){
                
            }else {
                cantidad += 2 ** i;
            }
        }
        return cantidad;
    }
    
    
}
console.log(conversion(15,2));

console.log(conversion(1111,10));