class estudiante {
    nombre = "Carlos" 
    asignatura = ["javascript", "HTML","CSS"]
    
obtenerDatos(){
    return { nobre: this.nombre,
         asignatura: this.asignatura
        }
    }
}

 const nuevoEstudiante = new estudiante()
 
console.log(estudiante.obtenerDatos())




