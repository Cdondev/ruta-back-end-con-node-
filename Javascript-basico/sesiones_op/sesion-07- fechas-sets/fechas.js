//trabajando con fechas 

// nos define la fecha y hora actual 

const fecha = new Date()
console.log(fecha)

// nos define fecha de cacuerdo al formato que le parsemos, en este caso es AnalyserNode, mes, dia
const fecha2 = new Date(1969,11);


// nos define fecha de acuerdo alos milisegundos

const fecha3 = new Date(10000)
console.log(fecha3)

// fechas en formato de string

const fecha4 = new Date("november 11, 1998");
console.log(fecha4)


// comparacion de fecha 

// para comparar fechas se deben convertir en milisegundos primero con lafuncion getTime()

const fecha5 = new Date("november 11, 1998");

const comparacionFechas = fecha4.getTime === fecha5.getTime; // de este manera comparamos fechas convirtiendolas a milisegundos
console.log(comparacionFechas);


// obtener dia, mes y anyo de una fecha 

// obtener dia 
const dia = fecha.getDate();
console.log(dia)

// obtner mes 
const mes = fecha.getMonth();
console.log(mes)

// obtener año
const anyo = fecha.getFullYear();
console.log(anyo)

// .toLocaleDateString
// fecha de acuerd al formato que queramos - o del pais que queramos

const fechaFormato = fecha.toLocaleDateString("us-US")
console.log(fechaFormato)
