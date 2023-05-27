
/// libreria de jquery 

// $(selector).accion()

//$("h1").hide() forma no mu recomendad

$(document).ready(()=>{
// se pasa la funcion que se desee
})

$(()=>{
    // se pasa la funciion que se desea
    // selectores
    // id = "el-1"  = "#el-1"
    // clase = ".el-2" = ".el-2"
})
//  referncia de la clase boton hide, al dar click el elmento h1 desaparece 

$(".hide-btn").click(()=>{
    $("h1").hide()
})

// referncia a la clase de boton show, al dar click reaparce el elemnto h1
$(".show-btn").click(()=>{
    $("h1").show()
})

// refencia a la lista al dar clic sobre cualquiera de los elementos li- el h1 cmabia su color 

$("li").click(()=> {
    $("h1").css({color: "red"})

})

// refencia a la clase de button al dar click agrega nuevos elemntos en la inferior de la lista 

$(".new-element").click(()=>{
    $("ul").append("<li>nuevo elemento</li>")
})

// refencia a la clase de button al dar click agrega nuevos elemntos en la posterior de la lista 
$(".new-element").click(()=>{
    $("ul").prepend("<li>nuevo elemento</li>")
})

// refeencia del maouse al pasar sobre los elementos de la lista, al pasar sobre ellos los elemntos cambian de color

$("li").mouseenter((elem)=>{
    elem.target.style.color = "blue"    // nativo de javascrpit 
})

//// refeencia del maouse al salir del elementos de la lista, al salir el elmento de la lista retoma su color o vuelve a negro 

$("li").mouseleave((elem)=>{
    elem.target.style.color = "black"    // nativo de javascrpit 
})

