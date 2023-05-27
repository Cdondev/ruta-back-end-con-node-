const hTexto = document.getElementById("h-texto")

console.log(hTexto)

hTexto.addEventListener("cambioTexto",evento =>{
    console.log(evento.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color

})

function cambiartexto(nuevoTexto,color){
    const evento = new CustomEvent("cambiartexto", {
        detail:{
            texto: nuevoTexto,
            color
         }
    })
    hTexto.dispatchEvent(evento)
}