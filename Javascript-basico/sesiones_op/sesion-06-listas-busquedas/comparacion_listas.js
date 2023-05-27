// como comparamos lstas con el metodo .every()


//  en este caso nos devuelve  un valor true o false dependinedo de la condicion que le pase
// en este ejercisio se compara si tos lod numeros son mayores a 0 que retorne true 

const array = [ 23,12,56,-87,-34,32]

const resultado = array.every(valor => valor > 0);

console.log(resultado)


// comparacion de listas

const array1 = [1,2,3,4]
const array2 = [1,2,3,4]


//  comparacion de arrays mediante function, en el primer condicional comparamos la longitud y ya en el segun pasadmos a comparar sus indeces 

const comparacionArrays = (array_1, array_2) =>{
    if (array_1.length !== array_2.length)return false;
    const res = array_1.every((valor, i) => valor === array_2[i]);
    return res;
}

console.log(comparacionArrays(array1,array2))
