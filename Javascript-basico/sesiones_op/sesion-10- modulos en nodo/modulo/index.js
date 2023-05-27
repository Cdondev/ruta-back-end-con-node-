// formar de exporta / importar modulos 
// 1. commonJs- requiere
// 2. import / en ecmascrpit 6 

// para import modulos con require

// como importar el modulo

// const moduloMate = require('./modulo/matematicas.js')

// const sum = moduloMate.suma(2,45);
// console.log(sum);

// const fac = moduloMate.factorial(4);
// console.log(fac);

// otro forma de hacerlo 

const {factorial,suma} = require('./matematicas.js');
const fac = factorial(4);
const sum = suma(2,4);
console.log(fac,sum);


