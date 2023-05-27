// instalar axios para llamar a servisios externos 

// importamos axios 

import axios from "axios";

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("EJECUTADO CON EXITO");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR EN LA PETICION");
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


//   librerias  interesantes de javascript

