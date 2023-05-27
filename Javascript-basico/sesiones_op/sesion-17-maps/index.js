
let marker, map

function initMap() {
    const posicion = { 
        lat: -25.344,
        lng: 131.031 };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    })

     marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "posicion inicial"
      })
      
    //   optener geolocalizacion 
    // marker.setPosition({lat, lgn:})
    geoposiciona()
}

function geoposiciona(){
    if (navigator.geolocation){
        const geoLoca = navigator.geolocation
        const options = {timeout: 60000}
        const whatPos = geoLoca.watchPosition(centraMpa, onError, options)

    }else{
        alert("Tu navegador no acepta geolocalizacion")
    }
}
// funcion de de localizacion con el parametro posicion de la funcion initmap

function centraMpa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}
// funcion de error mensaje de error si el navegador no abmite gooelocalizacion

function onError(error){
    console.error(error)
}
    

  