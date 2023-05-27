// metodos en cadean de texto toLowerCase() y touppercase()
let input = "aries"
let bd = "Aries"


console.log( input === bd)
console.log( input.toLowerCase() === bd.toLowerCase())

// pasa texto a misnuscula
console.log(input.toLowerCase())
console.log(input.toLocaleLowerCase())
// pasa texto a mayuscula 
console.log(input.toUpperCase())
console.log(input.toLocaleUpperCase())

// formas de concatenar cadena de taxto

let str_1 = "hola soy la primera cadena"
let str_2 = "hola soy la segunda cadena"
// pirmera forma
console.log(str_1.concat(" ",str_2))
// concatenacion con operador +
console.log(str_1 + " " + str_2)
// concatenacion con comilla invetida
console.log(`${str_1} , ${str_2}`)

//eliminar espacios al inicio y al final 

let str_3 = "  hola soy un string con un espacio al final.  "
console.log(str_3.length)
// metodo trim() elimina espacios 
console.log(str_3.trim().length)
// elimina los espacios del principio  
console.log(str_3.trimStart().length)
// elimina los espacios del final 
console.log(str_3.trimEnd().length)

// obtener un caracter de cualquier posicion
let str_4 = "hola soy el caracter nuemro 4"
console.log(str_4.charAt(3))//dentro del metodo pasamos la poscicion del caracter
console.log(str_4[5]) // se busca como en la lista[]

// conocer la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "hola mi nombre es carlos, y  me dicen carlos"
console.log(str_5.indexOf("carlos"))
console.log(str_5.charAt(18))
// Nos devuelve la posicion del ultimo caracter que aparesca dento de la cadena de texto 
console.log(str_5.lastIndexOf("carlos"))
