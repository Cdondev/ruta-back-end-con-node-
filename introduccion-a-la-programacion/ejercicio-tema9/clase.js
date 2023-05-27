class Persona {
    constructor(edad, nombre, telefono) {
      this.edad = edad;
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Cliente extends Persona {
    constructor(edad, nombre, telefono, credito) {
      super(edad, nombre, telefono);
      this.credito = credito;
    }
  }
  
  class Trabajador extends Persona {
    constructor(edad, nombre, telefono, salario) {
      super(edad, nombre, telefono);
      this.salario = salario;
    }
  }
  
  // Crear un objeto de la clase Cliente y mostrar sus propiedades
  const cliente = new Cliente(30, "Juan", "123456789", 1000);
  console.log(cliente.edad);       // Imprimirá: 30
  console.log(cliente.nombre);     // Imprimirá: Juan
  console.log(cliente.telefono);   // Imprimirá: 123456789
  console.log(cliente.credito);    // Imprimirá: 1000
  
  // Crear un objeto de la clase Trabajador y mostrar sus propiedades
  const trabajador = new Trabajador(35, "María", "987654321", 2000);
  console.log(trabajador.edad);    // Imprimirá: 35
  console.log(trabajador.nombre);  // Imprimirá: María
  console.log(trabajador.telefono);// Imprimirá: 987654321
  console.log(trabajador.salario); // Imprimirá: 2000
  