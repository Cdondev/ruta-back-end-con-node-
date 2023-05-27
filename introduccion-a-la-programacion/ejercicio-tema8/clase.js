class Persona {
    constructor() {
      let _edad;
      let _nombre;
      let _telefono;
  
      this.getEdad = function () {
        return _edad;
      };
  
      this.setEdad = function (edad) {
        _edad = edad;
      };
  
      this.getNombre = function () {
        return _nombre;
      };
  
      this.setNombre = function (nombre) {
        _nombre = nombre;
      };
  
      this.getTelefono = function () {
        return _telefono;
      };
  
      this.setTelefono = function (telefono) {
        _telefono = telefono;
      };
    }
  }
  
  // Crear un objeto persona en el main
  const persona = new Persona();
  
  // Utilizar los getters y setters para asignar valores a las propiedades
  persona.setEdad(25);
  persona.setNombre("Juan");
  persona.setTelefono("123456789");
  
  // Mostrar las propiedades por consola
  console.log(persona.getEdad());      // Imprimirá: 25
  console.log(persona.getNombre());    // Imprimirá: Juan
  console.log(persona.getTelefono());  // Imprimirá: 123456789
  