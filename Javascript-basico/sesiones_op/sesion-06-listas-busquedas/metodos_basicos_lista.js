// tabajr con listas( arrays, vectores)

let array = [0, "hola", false, null, undefined]
console.log(array)


// metodos para introcir nuevos valores
// push(),  unshitft()

array.push("final") // agrega valores a nuestros arrays al final 
console.log(array)

array.unshift("inicio")// aggrega vallores al inicio 
console.log(array)


// para eliminar datos del array
// pop()

array.pop() //elimina datos al final  
console.log(array)

array.shift() // elimina datos al inicio 
console.log(array)


array.splice(1, 2) //---> elimina datos apartir del indice que le indiquemos, el primero es el indice 
console.log(array)


array.splice(1,0, "hola") // ----> agrega datos apatir del indice qie le indiquemos
console.log(array)

array.splice(2,2,"me agregaron", "a mi tambien") //------> agrega datos aprtir del primer indice
console.log(array)