const persona = {
    nombre: "carlos",
    edad: 24
}
console.log(persona)

function dobleEdad(edad){
    return edad * 2
}
const edadDoble = dobleEdad(persona.edad)

console.log(edadDoble);

function obtenArray(edad){
    let ArrayNums = []
    for(let i = 0; i < 10; i++){
        const numero = edad + 1
        console.log(numero)
        ArrayNums = [...ArrayNums, numero]
    }
    return ArrayNums
}
const Array = obtenArray(persona.edad)

console.log(Array)

