// crear objeto con datos personales 

const miYo = {
    nombre: "carlos",
    apellido: "Dominguez",
    edad: 24,
    altura: 166,
    isDeveloper: true
}

// variable que conta mi edad 

const edad = miYo.edad;

// un lista con el obejto de mis datos personales 
const lista = [miYo]

 // objetos con datos personales de amigos 

const objAmigo = {...miYo};
objAmigo.nombre = "roberto";
objAmigo.apellido = "perez";
objAmigo.edad = 26;
objAmigo.altura = 170;
objAmigo.isDeveloper = false;

const objAmiga = {...miYo,}
objAmiga.nombre = "laura";
objAmiga.apellido = "rodriguez";
objAmiga.edad = 25;
objAmiga.altura = 165;
objAmiga.isDeveloper = false;

// lista con objetos odenados por edad

const listaAmigos = [objAmigo,objAmiga,miYo];

listaAmigos.sort((a,b) => a.edad - b.edad)



