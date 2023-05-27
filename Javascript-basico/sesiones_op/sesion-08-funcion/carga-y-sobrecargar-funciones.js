 // Carga y sobre carga de funciones 

 function saludar(){
    hola()
 }

 function hola(){
    console.log('Hola, Soy la funcion saludar');
 } 

 saludar() // llamanos a la funcion 

 // 1. primero se llama a la funcion global() 
 // 2. luego se llama a la funcion saludar()- global()
 // 3. luego se llama a la funcion hola()- saludar()- global()
 // 4. luego se llama a la funcion saludar()- global()
 // 5. luego se llama a la funcion global()

//  function recursiva(){
//     recursiva()
//  }

//  recursiva() // PROBLEMAS DE RECURSIVIDAD


