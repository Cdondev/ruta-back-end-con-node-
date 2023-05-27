// herencia y polimorfismo

// herencia

class persona {
    _nombre
    _edad
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    saludar(){
        console.log(`Hola, me llamo ${this._nombre} y tengo ${this._edad} años`);
}}

class desarrollador extends persona{
    constructor(nombre, edad,lenguaje){
        super(nombre,edad);
        this.lenguaje = lenguaje;
    }
    saludar(){
        super.saludar()       // override --> volver  a definir algo que ya esta definido
        console.log(`Y soy desallodor de ${this.lenguaje}`)
}}

const developer = new desarrollador("carlos", 24,"Javascript")
console.log(developer)
developer.saludar()

// polimorfismo






