// que son las funciones, como se declaran y como se utilizan 

const nom = "carlos"

saludar("carlos");
function saludar(nombre){
    console.log(`Hola ${nombre}`)}

// ejecuta la funcion de acuerdo al parametreo que se le paso en la variable definida al inicio


let nomb2 = "miguel"

// llamamos a la funcion 
despedir("joaquin")

function despedir(perso){
    perso = "pepito"
    console.log(`Adios ${perso}`)}

// en este caso al declarar nuevamente variables dentro de la misma function, altera el valor de los parametros pasados

let persona = {nombre: "juan", apellido: "gonzales"};

saludarpersona(persona)
function saludarpersona(obj){
    obj.apellido = "dominguez"
    console.log(`Hola ${obj.nombre} ${obj.apellido}`)}

// los objetos llamados y reaccionados dentro de las funciones si  altereran el objeto original



// en el caso de querer que la funcion me muestre algo sin pasar parametros al llamarla, estos deben estar definidos por defecto dentro del parametro de la funcion.
function imprimeNumero(numero = 5){ // parametros por defecto
    console.log(numero)
}
imprimeNumero();


// para llamar funciones con parametros indefinidos con el factor de propagacion

function imprimeAlgo(...algo){
    console.log(algo)
}
imprimeAlgo("hola", "mundo", "adios")
// los datos que le pase me los toma en como una lista

// dado el caso que quiera sumar valores indefinidos lo podria hacer de la siguiente forma

function suma(...nums){
    return nums.reduce((a,b)=> a + b) //  la palabra recervada return me rotorna el valor de la funcion 
}
const resul = suma(1,2,3,4,5,6,7,8,9,34)
console.log(resul)



