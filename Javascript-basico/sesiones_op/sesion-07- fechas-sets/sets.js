// set o conjuntos 

const array = [1,2,3,4,5,6,4,5,7];

// el set no me perimte valores repetidos dentro de la lista 

const miSet = new Set(array)
console.log(array)
console.log(miSet)

// añandir elementos de un set con los metodos .add()

miSet.add(10)
console.log(miSet)

// eliminar valores dentro de los conjuntos con el metodo .delete()

miSet.delete();
console.log(miSet)

// vaciar set con metodo .clear()

// miSet.clear()
// console.log(miSet)

// verificar si un valor esta en un set con el metodo .has()

miSet.has(2)
console.log(miSet.has(2));


// comnocer la cantidad de valores dentro del set con la propierad zise.
console.log(miSet.size)
// valores unicos, es decir que no se repiten


// iterar sobre los sets 

miSet.forEach(valor =>{
    console.log(valor);
})


// convertir mi set en un objeto iterator

const itMiSet = miSet.values()
console.log(itMiSet)

// convertir mi set en atravez del factor de propagacion

const arrMiset = [...miSet]
console.log(arrMiset)


