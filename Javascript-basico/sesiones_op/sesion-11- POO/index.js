// introduccion a la programacion orientada a objetos 

const persona = {
    nombre:"carlos",
    edad: 24,
    isDeveloper: true,
    saludar: function(){
        console.log("Hola")
    }
}

// console.log(persona)
persona.saludar();


//  para creacion de otras clases se pude usar una funcion factory

const crearPersona = (nombre,edad,isDeveloper) =>{
    return { 
        nombre,
        edad,
        isDeveloper,
        saludar: function(){
            console.log("Hola")
        }
    }
 }

// crera nuevas personas 

 const nuevaPersona = crearPersona("Jose",29,false)
 console.log(nuevaPersona)

 const nuevaPersona2 = crearPersona("Maria",23,false)
 console.log(nuevaPersona2)


