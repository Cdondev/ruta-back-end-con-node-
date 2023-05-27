//como ordenar listas 

// .sort() -> metodo qeu mofica los arrays

const array = [2,5,4,6,78,98,43];

console.log(array)

array.sort((a, b) => {
    if (a < b){
        return -1
    }else if (a > b){
        return +1
    }else{
        return 0;
    }
}) 

console.log(array)

const aarayNUmerico = [3,56,343,23,323,3,2323,];

// nos oreganiza un array de numeros de menor a mayor 

aarayNUmerico.sort((a,b) => a - b);

console.log(aarayNUmerico)


/////////////////////////////////////
// NOs organiza la lista de objetos de cuerdo a los para ¿metros que le pasemos 

const listaObjetos = [
    { nombre: "juan", edad: 28},
    { nombre: "luis", edad: 23},
    { nombre: "roberto", edad: 34},
];

listaObjetos.sort((a,b) => {
    if (a.edad < b.edad){
        return -1
}else if (a.edad > b.edad){
    return +1
}else{
    return 0;
}});

console.log(listaObjetos);

listaObjetos.sort((a,b) => a.edad - b.edad);
console.log(listaObjetos);
