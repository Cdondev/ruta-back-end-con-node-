// declaracion de clases 

// metodo constructor

// en las clases las variables son los atributos y las funciones se le conocen como metodos

class persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = isDeveloper;
} saludo(){
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
}}

// crear nueva persona apartir de la primera clase --- instanciar 

const persona2 = new persona("carlos", 34);
console.log(persona2)   
persona2.saludo();

const persona3 = new persona("Maria",34,false)
console.log(persona3)



 



