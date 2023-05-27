// Obtener valores numericos apartir de literales valueOf();

let a = 2;
let b = new Number(3)

console.log(a)
console.log(b)
console.log(a + b)

console.log(b.valueOf())



// NaN (not a number) - Infinty

let m = Number("adios");
console.log(m);
console.log(isNaN(m));


let numerador = 19;
let divisor = 0;
console.log(numerador/divisor);

let divisor_2 = null;
 console.log(numerador/divisor_2);

// como convertir string a number parseInt y parseFloat

let numero = "5.89";
console.log(typeof numero)
 let numero2 = 17.4;

 console.log(numero + numero2); // error de concepto

 console.log(Number(numero)+ numero2); // En este caso con el number convertimos a valor numerico

 console.log(parseInt(numero)); // conversion de string a numero entero
 console.log(parseFloat(numero)); // convertimos a numero flotante




// numeros hexadecimales 

let numHex = '0x3ab7d';
console.log(parseInt(numHex, 16));



// obtener los valores maximos y minimos en javascript


let min_presicion = Number.EPSILON;
let max_valor_js = Number.MAX_VALUE;
let min_valor_js = Number.MIN_VALUE;

console.log(min_presicion);
console.log(max_valor_js);
console.log(min_valor_js);