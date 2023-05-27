// trabjando con objetos 

const obj = {
    id: 3,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    isDeveloper: true,
    librosFavoritos: "el cantante",
    "4-juagador": [1,2,3,4]  // forma de declarar valores poco comunes dentro de objetos 
}

// conocer valores especificos dentro de los objetos 

console.log(obj["4-juagador"])
console.log(obj.edad)

const prop = "isDeveloper" // acceder a valores del objeto fuera de el
console.log(obj[prop]) 

//  duplicar un objeto 

const obj2 = obj;
console.log(obj2)
// variable asignado valor a el objeto duplicado
obj2.nombre = "pepito"
console.log(obj2.nombre)

console.log(obj.nombre)

// al duplicar el obejto principal el segundo objeto toma pocision de los valores en memoria, lo que signifa que cualquier cambio se vera reflejo en el objeto principal 


const obj3 = { ...obj}
console.log(obj.nombre)
console.log(obj2.nombre)

obj3.nombre = "carlos"

console.log(obj.nombre)
console.log(obj3.nombre)


//  se copia el objeto principal pero atravez delmetodo de propagacion solo afecta al array duplicado

// como orednar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "la momia",anyo:1997},
    {titulo: "Her",anyo:2012},
    {titulo: "Matrix",anyo:1999},
    {titulo: "boo", anyo: 2002},
    {titulo: "casper", anyo: 2003}
];
// con el metodo sort() en esta caso ordena de mayor a menor por años, MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a,b) => a.anyo - b.anyo)
console.log(listaPeliculas);


