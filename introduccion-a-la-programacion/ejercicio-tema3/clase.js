function sumarNumeros(num1, num2, num3) {
  return num1 + num2 + num3;
}

// Llamar a la función en el main y darle valores
const resultado = sumarNumeros(5, 10, 3);
console.log(resultado); // Imprimirá: 18


// segunda parte 

class Coche {
  constructor() {
    this.numPuertas = 0;
  }

  incrementarPuertas() {
    this.numPuertas++;
  }
}

// Crear un objeto miCoche en el main y añadirle una puerta
const miCoche = new Coche();
miCoche.incrementarPuertas();

// Mostrar el número de puertas que tiene el objeto
console.log(miCoche.numPuertas); // Imprimirá: 1
