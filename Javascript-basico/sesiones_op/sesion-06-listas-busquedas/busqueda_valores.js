// iterar los valores de las listas

const array = ["hola", 2,7,false]
for (let i = 0; i < array.length; i++){
    console.log(array[i])
};

//froma forEach()

let suma = 0;

const arrayNums = [23,343,5,52,23,]
arrayNums.forEach(valor =>{
    suma += valor;
    console.log(valor)
})
console.log(suma)

// busqueda de valor dentro de una lista  .find()

// quiero encontrar el elemnto 5

const variable = array.find(valor => {
    if (valor === 2){
        return true;
    }
})
console.log(variable)


const listaObjetos = [
    { nombre: "juan", edad: 28},
    { nombre: "luis", edad: 23},
    { nombre: "roberto", edad: 34},
];

//const objeto = listaObjetos.find(o => {
  //  if(o.nombre === "juan"){
  //      return true;
  //   }
//})



const objeto = listaObjetos.find(o => o.nombre === "juan")
     console.log(objeto.nombre)

const {edad} = listaObjetos.find(o => o.nombre === "juan")
console.log(edad)




