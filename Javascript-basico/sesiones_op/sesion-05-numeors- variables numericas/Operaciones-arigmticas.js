//principales operaciones aritmeticas
// suma
let a = 1.3;
let b = 4.7;
console.log(a + b)
// resta
console.log(a - b)
// multiplicacion
console.log(a * b)
// division
console.log(a / b)



//numeros en cadenas de texto

console.log(typeof a);
let a_s = a.toString();
console.log(typeof a_s)
// redondear

let c = 3.5;
let d = c * 3.2;

console.log(d)

// .toFixed(en estes pasamos la cantidada de numeros que quremos redondear)
console.log(d.toFixed(1));

let e = 12134.454
let f = 1213445359;
// decimales despues del punto
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(X)--- pasa solo sifrs significativas
console.log(typeof e.toPrecision(7));


