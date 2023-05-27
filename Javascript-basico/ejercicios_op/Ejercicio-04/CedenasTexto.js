// cuarto ejercicio

// varibles iniciales 
let nombre = " Carlos ";
let apellido = " Dominguez ";

// concatenar 
let estudiante = `${nombre} ${apellido}`;

// pasar a mayuscula
let estudainteMayus = `${estudiante.toUpperCase()}`;

// pasar a minuscula
let estudianteMinus = `${estudiante.toLowerCase()}`;

// saber numero de letras contando espacios
let numeroLetras = `${estudiante.length}`;

// saber la primera letra de la variable 
let primerLetra = `${estudiante.charAt(1)}`;

// saber ultima letra de la variable
let ultimaLetra = `${estudiante[18]}`;

// eliminar espacios de la variable
let eliEpascios = `${estudiante.trim()}`;

// saber si una palabra esta contenida dentro de la variable
let varBool = `${estudiante.includes("Carlos")}`;
