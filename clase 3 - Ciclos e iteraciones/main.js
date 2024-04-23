

//FOR

//  desde; hasta; actualizacion/incremento





/* for(let i=1; i<5;i++){

console.log("hola javascript " + i)

}
 */


/* 
let numero = parseInt(prompt("ingresa un numero"))

for(let i=1; i<=10;i++){

  let resultado = numero *i
  alert( "esta es la tabla del numero "+ numero + " = " +   resultado)

}





for (let i = 1; i <= 10; i++) {


    

  if(i == 5){
    continue;
}


alert(i);


}
 */




/* let entrada = prompt("Ingresar un dato");



//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "tortuga" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
 */


/* let iterar = true

while(iterar === true){
  console.log("imprimo mensaje por consola")
  iterar = confirm("queres seguir en el bucle?")
}


confirm("true o false")
alert("solo el mensaje") */








let identificar = true
let intentos = 1
do{ 
  let usuario = prompt("ingresa el usuario, (solo tenes 3 intentos)")
  if(usuario == null){
    break
  }
  if(usuario == "pedro ramos" && intentos <=3){
    alert("bienvenido bichito de luz a mi corazon")
    identificar= false
  }else{
    intentos++
    if(intentos >3){
      alert("raja de aca, vos no sos mi bichito de luz")
      break
    }
  }
}while(identificar)