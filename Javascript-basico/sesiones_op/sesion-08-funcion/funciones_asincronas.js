// funciones asincronas 

function asincrona(){
    // hace llamadas a recursos externos-- bases de datos por ejemplo
    //puede llegar a dar algun error-- esto dependera de la infraestructura de los recurso que se estn llamando o algo externo 
}

// promesas --- como declarar una promesa

const miPromesa = new Promise((resolve, reject)=>{
    const i = Math.floor(Math.random()*2) // genera un numero aleatorio entro 0 y 2
    // si todo esta correcto 
    if (i !== 0){
        resolve()
    }else{
        reject()
    }
});

miPromesa
    .then(()=> console.log("se ha ejecutado de forma correcta¡"))
    .catch(()=> console.log("ERROR"))
    .finally(()=> console.log("siempre me ejcutare"))

    