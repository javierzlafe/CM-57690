/* 

let boton = document.getElementsByClassName("boton")


function saludar(){
    alert("hola perdida")
}



botoncito.addEventListener("click",saludar) */




/* 
let titulo = document.getElementById("titulo")

function saludar(){
    console.log("hola")
}


titulo.addEventListener("mousedown",()=>console.log("tatatatatatatatatata"))
titulo.addEventListener("mouseup",()=>console.log("recargar"))
titulo.addEventListener("mousemove", function(event){
console.log("la mira esta en la posicion "+ event.clientX + " y " + event.clientY)
})
 */


/* let inputField = document.getElementById("inputField")


inputField.addEventListener("change", function(event){
    console.log(`valor del campo cambiado : `+ event.target.value)
}) */





let btn = document.getElementById("boton")
let titulo= document.getElementById("titulo")
let container = document.getElementById("container")
let borrar = document.getElementById("borrar")


btn.addEventListener("click",()=>{
    const newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.innerHTML= `
    <h2>Nueva Tarjeta</h2>
    <p>Esta es una nueva tarjeta creada al hacer click en blablablabla</p>
    `
    container.appendChild(newCard)
})


borrar.addEventListener("click", ()=>{
    const cards = container.querySelectorAll(".card")

    if (cards.length >0){
        const lastCard = cards[cards.length -1]
        container.removeChild(lastCard)
    }else{
        alert("no hay mas tarjetas")
    }

})