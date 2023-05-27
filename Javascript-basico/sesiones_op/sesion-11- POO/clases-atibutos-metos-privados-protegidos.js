
class persona {
    // para la proteccion de atributos se utiliza el metodos

    // private --- #  --- atibutos privados 
    #nombre  // ----> de esta manera puedo decidir que atibutos son privados y que no se pueden altera desde fuera de la clase
    #edad

    // atributos protegidas
    // protected ---> _ 
    // --> solo se peude accerder dentro de la clase y desde clases descendientes
    
    _isDveloper = true;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
} saludo(){
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
}
obtenNombre(){
    return this.#nombre;
}

obteneEdad(){ // --> getter nos permite acceder de fomra controlada a  algun atributo protegido 
    return this.#edad;
}

getEdad(){
    return this.#edad
}
setEdad(nuevaEdad){
    this.#edad = nuevaEdad;
}
}

const persona1 = new persona("Carlos",24);
// console.log(persona1)
// persona1.saludo()




// metodos getter ---> nos permiten obetener metodos/atributos protegidos o privados
// setter ---> nos permite cambiar el valor de los atributos privados o protegidos

const edad = persona1.getEdad() // nos permite acceder a la edad de la clse que est aprotegida o privada
console.log(edad)


persona1.setEdad(34) // nos permire cambiar el atributo edad
console.log(persona1.getEdad()) 



