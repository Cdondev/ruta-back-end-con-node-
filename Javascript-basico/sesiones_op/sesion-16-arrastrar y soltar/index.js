const parrafos = document.querySelectorAll("#parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const img_fantasma = document.querySelector(".fantasma")
        event.dataTransfer.setDragImage(img_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () =>{
        console.log("He terminado de arrastras")
        parrafo.classList.remove("dragging")
    })
});

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        console.log("dragover")
    })

    seccion.addEventListener("drop", event =>{
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("parrafo id:", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)    
    })

})