// import {suma,multiplica,eleva} from './modulos/matematicas.js'

// const sum = suma(34,2)
// console.log(sum)

// const el = eleva(2,3);
// console.log(el)


// para importar todo los modeulo del archivo

import * as moduloMate from './modulos/matematicas.js'

// importacion por defecto

import getAutor, {libro} from './modulos/literatura.js';
   
const sum = moduloMate.suma(34,2)
console.log(sum)

const el = moduloMate.eleva(2,3);
console.log(el)

console.log(getAutor());

console.log(libro);
