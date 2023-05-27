// persistencia de datos

localStorage.getItem("nobre", "carlos")

localStorage.setItem("persona", JSON.stringify("persona", { nombre: carlos,  edad: 24}))

console.log(localStorage.getItem("persona"))

// jsonstringify -> convierte un objeto en string

//json.parse convierte objetos vonvertidos con stringify en objetos javascript

localStorage.removeItem("persona")

sessionStorage.setItem("nombre -sesion", "carlos")

/* cookies */

document.cookie = "nombreCokiee=CarlosCokiee"

document.cookie = "nombreCaducidad=nombre;expiries" + new Date (2023,06,01).toUTCString

