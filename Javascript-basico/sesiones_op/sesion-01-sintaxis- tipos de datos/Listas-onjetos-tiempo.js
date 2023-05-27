// listas, objetos y tiempo

const lista1 = ["dato de la lista"];
const lista2 = new Array (3,4,4,5,2,2,2);
console.log(lista2);
const lista3 = [1,"bb", null, undefined];
const lista4 = [lista1,lista2,lista3]
console.log(lista4)
// objetos 
const mouse ={
    color: "red"
    // un Objeto tiene atributos y funcionalidades 
}

// tiempo
const ahora = new Date()
console.log(ahora)

const fechaMilis = new Date(10)
console.log(fechaMilis)

const fechaCadena = new Date("november 11 1998")
console.log(fechaCadena)

const fechaValore = new Date(2023,5,22)
console.log(fechaValore)
 const dia = ahora.getDate()
 const mes = ahora.getMonth()+ 1
 const anio = ahora.getFullYear()

 console.log(dia,mes,anio);


 const lista = [
    nombre = "Carlos",
    edad = 24,
    SoyDesarrollador = true,
    fechaNa = new Date(1998,11,11)
 ]
const libro = {
    titulo: "General en su leberinto",
    autor: "Carlos",
    fecha: 10-08-2015,  
   url:"https://www.todostuslibros.com/libros/general-en-su-laberinto-el_978-607-07-2656-9"
}
console.log(libro.autor())

