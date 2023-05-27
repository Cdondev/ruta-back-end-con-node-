//meteodos de cadenas de texto 3
// http//.rehex.com
// obetenr tods las instancias en una cadena de texto 

let textoLargo = "tito no es un mono cualquiera, a tito no le gusta rtrepar por los arboles y odia comer bananas, el prefiero pasear por el bosque, oler flores y recoger las nueces que se caen de los arboles"

// a match le decimos que nos pase todas las instancias de la palabra que queremos buscar

console.log(textoLargo.match(/no/g))

// saber si existe cierta palabra dentro de un texto 
console.log(textoLargo.includes("En este espacio se pasa la palabra que queremos buscar"))

// saber si un texto comienza por una palabra]
console.log(textoLargo.startsWith("va la palabra de la cual queremos saber si comienza"))
// aca si queremos saber si termina
console.log(textoLargo.endsWith("palabra de la cual queremos saber si termina"))