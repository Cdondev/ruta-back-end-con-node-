// lista compras

const listCompras = ["arroz","cafe","pollo","huevos","lentejas"];

// añadimos elemento a la lista

const newLista = listCompras.push("aceite de girasol");

// eliminamos elemento de la lista

const listaMod = listCompras.pop();

//lista de peliculas 
const listaPeliculas = [
    {titulo: "La casa de papel", director: "alex pina",fecha:new Date(2017,12,3)},
    {titulo: "Her", director: "spike jonze",fecha:new Date(2012,12,18)},
    {titulo: "Matrix", director: "Lana Wachowski",fecha:new Date(1999,5,21)}
];

// peliculas posteriores 

const pelisNuevas = listaPeliculas.filter(peliculas =>{
    return peliculas.fecha > new Date(2010,0,1)});

// directores de las peliculas .map()

const Directores = listaPeliculas.map(pelicula =>{
    return pelicula.director});


// titulos 

const titulosPelis = listaPeliculas.map(peliculas =>{
    return peliculas.titulo});


// concat listas 

const directoresTitulos = Directores.concat(titulosPelis);
console.log(directoresTitulos)


// propagacion 

const listaPropagacion =  [...Directores, ...titulosPelis];








