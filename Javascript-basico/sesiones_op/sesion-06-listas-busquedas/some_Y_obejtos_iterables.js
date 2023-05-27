// como saber si algunos elementos cumplen la condicion
// metdodo .some()

const array = [2,45,56,3,5,7,3,8,-78,-90,4,1];

//comprobamos si varios valores en existen  

const existe = array.some(valor => valor === 0);

console.log(existe);

// comprobamos si un determiado valor existe

const res = array.some(valor => valor === 90);
console.log(res);

// comprobamos con lista de objetos

const listaObjetos = [
    { nombre: "juan", edad: 28},
    { nombre: "luis", edad: 23},
    { nombre: "roberto", edad: 34},
    { nombre: "maria", edad: 32},
    { nombre: "jose", edad: 33}
];

const existePersona = listaObjetos.some(persona => persona.nombre === "juan");

console.log(existePersona);


// como obetner una lista apartir de un objeto iterable 

const str = "Hola soy carlos";

console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2,4,"hola",5]);
const ar_set = Array.from(set);
console.log(ar_set);


const keys = array.keys()
console.log(keys);

// nos retona un array con las claves, indices de la lista que se este pasando
const ar_keys = Array.from(keys);
console.log(ar_keys);
