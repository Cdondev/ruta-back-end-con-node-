// metodos mas utilizados con cadenas de catecateres

// obtener longitud
let string = "hola soy un string"
console.log(string.length)

// PObetener parte de cadenas de caracteres
let SliceStr = string.slice(0,7)
console.log(SliceStr)

let subsStr = string.substring(0,7)
console.log(subsStr)
//  reemplazar parte del contenido de una cadena de texto

let cadena = "hola mi nombre es carlos"
console.log(cadena)

console.log(cadena.replace("carlos","jose")) // metodo para reemplazar una parte definida de mi cadena de texto 



// reemplaz atoda las instancias similares exprecion regular /los/g y seguido la que se va a reemplazar
console.log(cadena.replace((/carlos/g,'r')))