
const boton = document.querySelector("#btn")


console.log(boton)

boton.addEventListener("click", () => { 
     console.log("se ha hceho click") //mensaje de laerta 
    // confirm ("mensaje de confimacion")
// operador ternario 
    // confirm("¿Estas de acuerdo?")
    //     ?console.log("ok")
    //     :console.log("NO")


const respuesta = confirm("¿segura?")
    if (respuesta) {
        console.log("Estas de acuerdo ")
    }else{
        console.log("No estas de acuerdo ")
    }
})

const  botonInfo = document.querySelector("#info")

botonInfo.addEventListener("click", ()=>{
    const nombre = prompt("cual es tuu nombre?")
    console.log(` tu nombre es ${nombre}`)
})


const lista = [{
    nombre: "Juan",
    edad: 20,
}, {
    nombre: "Pedro",
    edad: 18,
}, {
    nombre: "Ana",
    edad: 25
}]

console.table(lista)