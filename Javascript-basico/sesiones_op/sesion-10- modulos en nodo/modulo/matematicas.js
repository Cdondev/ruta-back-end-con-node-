// modulos 

// funciones 

function suma(a,b){
    return a + b;
}

function multiplica(a,b){
    return a * b;
}

function eleva(a,b){
    return a ** b;
}

function factorial(a){
    factorial = 1;
    for( let i = 1; i <= a; i++){
        factorial *=i;
    }return factorial;
}


//  como exportar modulo

module.exports = { suma,multiplica,eleva,factorial}

