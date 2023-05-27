//control de bucles con break y continue


let lista = [1,2,3,4,5,6];

for (let i = 0; i < lista.length; i++) { 

    if (lista[i] === 3){      // estructura de control continue, salta datos en lista;
        continue;
    }
    console.log(lista[i])

if (lista[i] > 4){
    break;            // detiene el bucle de acuerdo a la condicion que se le pase;
}
}