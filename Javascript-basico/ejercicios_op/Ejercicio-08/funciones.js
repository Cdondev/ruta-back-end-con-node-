// funcion sin parametros
function sinParametros(){
    return true;
}

// funcion con promesa y setTimeout

async function mensaje() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
  }
  
  mensaje();

  // funcion generadora de indices pares 
  
  
  function* indicesPares(){
    let indice = 0
    while(true){
     yield indice
     indice +=2
  }}


const gen = indicesPares();

console.log(gen.next().value)
console.log(gen.next().value)


