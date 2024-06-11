


//setTimeout(funcion,tiempo)

/* function saludar(){
    alert("hola mundo")
}
 */

/* 
let jueguito = setTimeout(()=>console.log("podras pasar el video?"),14)
setTimeout(()=>console.log("bienvenido?"),5000)



let btn = document.getElementById("premio")

btn.addEventListener("click",setTimeout(()=>console.log("podras pasar el video en 3 segundo"),3000))
 */

/* 
let num = parseInt(prompt("ingresa los segundos")) 
let segundos = num *1000


let time = setInterval(  ()=>{
    const date = new Date()
    console.log(date.toLocaleTimeString())
},1000)


setTimeout(  ()=>{clearInterval(time)}, segundos) */




/* const promesa = new Promise( (resolve, reject)=>{

    let exito = true

    if(exito){
        resolve("operacion exitosa")
    }else{
        reject("error 404")
    }


}  

)


console.log(promesa) */



/* function holaMundo(){
    const mensaje = "hola mundo"

    try{procesarMensaje()
    }catch(error){
        console.log("exploto todo")
    }finally{
        console.log("saliendo del try catch")
    }

return mensaje

} */




/* async function procesoAsincronico(){
    console.log("iniciando lectura del archivo")

  const contenido=  await leerArchivo()
  console.log("el archivo se leyo correctamente")
} */