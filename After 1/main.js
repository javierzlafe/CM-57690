/* alert("bienvenido a la consesionaria de coches")
let consulta = confirm("te puedo ayudar a buscar un coche?")

if(consulta == true){
    let coche= prompt("que coche estas buscando? ingresa la marca")
    let color = prompt(`elegi el color de tu ${coche}`)
    //estructura del switch
    switch(color){
        
        case "blanco":
            alert(`tenemos tu ${coche} en color ${color}`)
            break
        case "negro":
            alert(`tenemos tu ${coche} en color ${color}`)
            break   
        case "rojo":
                alert(`tenemos tu ${coche} en color ${color}`)
            break
            
        default:
            alert(`no tenemos el ${coche} en color ${color}`)
    }
}



 */


function loguear(){
    let identificar = true
    let intentos = 1

    do{ 
    let usuario = prompt("ingresa tu usuario, tenes solo 3 intentos").toLowerCase()
    if(usuario === null){
        alert("te pedi un usuario, por favor escribilo")
        break
    }
    if(usuario == "javier gimenez" && intentos <=3){
    alert("bienvenido javier gimenez a la consecionaria")
    identificar = false
    }else{
        alert("no se reconoce el usuario: " + usuario)
        intentos++
        if(intentos >3){
            alert("usted supero los 3 intentos, vuelva mas tarde")
            break
        }
    }
    }while(identificar)
}

loguear()