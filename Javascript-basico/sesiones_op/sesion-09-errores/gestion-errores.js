// gestionar errores 

const FunError = val =>{
    if ( typeof val === "Number"){
        return true
    // }else false; // un manera de gestionar errores,  pero que no es la mejor 
}throw new Error("el valor debe ser de tipo numero"); // la palabra recervada throw-- lanzar 
}
// const elDoble = FunError("hola");

const num = 4;

try{
    // codigo que puede fallar
    console.log("Esta ejecutandoce de manera correcra");
    const doble = FunError(num);
    console.log(doble); 
}catch(e){ // con (e) se esta lanzando el error en caso de se asi
    // en caso de que falle, quiero que ejecutes
    console.error("Error en el codigo");
}finally{
    console.log("Siempre se va a ejecutar, sea o no error")
}


// errores mas comunes 

// internalError -- syntaxError -- typeError -- rangeError -- referenceError 
// refrencia:  error javascript 
