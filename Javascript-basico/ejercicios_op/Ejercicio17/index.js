
let marker, map

function initMap() {
    const posicion = { 
        lat: 5.459060641274073, 
        lng: -73.09292270695967};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    })

     function marcadores(latitud,longitu, titulo){
        marker = new google.maps.Marker({
            position: { lat: latitud, lng: longitu },
            map: map,
            title: titulo
            });
     }
    marcadores(12.556994099479283, -81.71754437676675, "San andres islas, Colombia" )
    marcadores(43.086881112128566, -79.07801471691377, "Cascadas niagra, EEUU")
    marcadores(-23.94966627740391, -46.34130499760426, "Sao pablo, Brazil")
      
    }