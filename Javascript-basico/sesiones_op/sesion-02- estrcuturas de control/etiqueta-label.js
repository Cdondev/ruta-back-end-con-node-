// etqueta labels para estructura de control 

let unidades
let decenas

bucleDecenas: while(true){
   bucleUnidades: while(true){
        console.log(`el numero actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10){
            unidades = 0
            break bucleUnidades
        }
    }
    decenas++
    if (decenas === 2){
        break bucleDecenas
    }
    decenas++;
}
