// metodos mas avanzados 
// .map() -- .filte()---  . reduce()

const array = ["bogota", "cali", "medellin", "pereira", "bucaramanga"];

const val = array.forEach(v => {
    console.log(v)
})
// con la funcion map() me permite agregar valores a mi lista, en este caso se retorna el indeice de cadena de texto mas el valor
// el metodo map() me permite agregar informaciona a mi lista de objetos 

const newArrray = array.map((valor,indice)=>{
    return `${indice +1} - ${valor}`;

})
console.log(newArrray)

// forma de optimmzar el codigo antes mencionado --- retorna lo mismo pero se optmiza el codigo 

const newArrray2 = array.map((valor,indice)=> `${indice +1} - ${valor}`);
console.log(newArrray2)

// metodo filter 
// el metodo filter me permite filtrar infomracion dentro de mi lista de listaObjetos
const listaObjetos = [
    { nombre: "juan", edad: 28},
    { nombre: "luis", edad: 23},
    { nombre: "roberto", edad: 34},
];

const personasMayores = listaObjetos.filter(obj =>{
    if (obj.edad > 30){
    return true;
}else{
    return false;
}
})

console.log(personasMayores);

// optimizacion de codigo 
const personasMayores2 = listaObjetos.filter( obj => obj.edad > 30);
console.log(personasMayores2);

// en este caso el metodo filter mepermite retornar una lista con valores verdaderos y quitando el que yo pase como diferente o sea diferente 
const nuevLista = listaObjetos.filter( obj => obj.nombre !== "roberto");
console.log(nuevLista)

const newlista = listaObjetos.filter(obj => obj.nombre !== "juan");
console.log(newlista)


// reduce para obtener un valor apartir de una lista

const valores = [2,4,56,77,34]

const sumaValores = valores.reduce((acomulao,curr, i, array) =>{
    console.log(acomulao);
    console.log(curr);
    console.log(i);
    console.log(array);
    return acomulao + curr;
})
console.log(sumaValores);

