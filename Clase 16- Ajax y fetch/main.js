

fetch('productos.json')
.then((response)=>response.json())  //convierto todo el json en objeto
.then(data => { 
const frutas = data.frutas
const container = document.getElementById('frutas-container')
container.className = ("pepe")

frutas.forEach( (x)=>{

const frutaElement = document.createElement('p')
frutaElement.innerHTML= `Nombre: ${x.nombre}, Color: ${x.color}, Sabor: ${x.sabor}`
container.appendChild(frutaElement)
})

}).catch((error)=>{
    console.error("exploto todo al carajo")
})