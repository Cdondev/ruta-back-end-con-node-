// funciones tipo flecha y funciones anonimas 

const array = [2,3,45,65,34,2,3,4];

// funciona para que me devuelva otro array con el donble de los valores del original con funcion tipo fecla 

const array2 = array.map((valor)=> valor * 2);
console.log(array2);


// dos maneras de guardar valores de las funciones dentro de varibles

// const dobleValor = function(valor){
//     return valor * 2
// }


 // esta es una funcion anonim

const dobleValor = valor => valor * 2; // con este tipo de funciones solo se puede acceder despues de inicalizarlas  


function doble(valor){ // con las funciones delcardas de esta manera se puede acceder o llamar desde cualquier parte de nuestro script
    return valor * 2;
}

console.log((doble(2))); 
console.log(dobleValor(2));

// se esta utilizando el recurso de la funcion declarada al principio
const array3 = array.map(dobleValor)
console.log(array3)




