// unir listas, concatenar 

const lista1 = [1," hola", 3,3,5]
const lista2 = [2, "hola", 4,4,6]

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);
console.log(lista3)

// unir lista en factor de propagacion

const lista4 = [...lista1,...lista2];
console.log(lista4)

