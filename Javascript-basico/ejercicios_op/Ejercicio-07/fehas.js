// fechas 
// fecha de hoy 

const fechaHoy = new Date();

// fecha nacimiento

const fechaNacimiento = new Date(1998,10,11);

// compara fechas 

const compararFechas = fechaHoy.getTime > fechaNacimiento.getTime;

// dia- mes - anyo nacimiento 

const diaNacimiento = fechaNacimiento.getDate();

const mesNacimiento = fechaNacimiento.getMonth()+1;

const anyoNacimieto = fechaNacimiento.getFullYear();

// año con cuatro dijitos

const varNacimiento = 1998;

