// Usando un if
let numeroIf = 5;

if (numeroIf > 0) {
  console.log("El número es positivo");
} else if (numeroIf < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

// Bucle While
let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

// Bucle Do While
let numeroDoWhile = 0;

do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 3);

// Bucle For
for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// Switch
let estacion = "verano";

switch (estacion) {
  case "invierno":
    console.log("Estamos en invierno");
    break;
  case "primavera":
    console.log("Estamos en primavera");
    break;
  case "verano":
    console.log("Estamos en verano");
    break;
  case "otoño":
    console.log("Estamos en otoño");
    break;
  default:
    console.log("No se reconoce la estación");
}
