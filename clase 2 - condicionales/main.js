
                        //CLASE 2      CURSO JAVASCRIPT


//console.log(nombre.toLowerCase())  //MAYUSCULA
//console.log(nombre.toUpperCase())   //minuscula
//console.log(nombre.length)  //cantidad de caracteres




//CONDICIONALES 

/* "Un condicional es una estructura que nos permite tomar decisiones 
    en nuestro código. 


La estructura de un condicional se compone de tres partes: 
una condición, 
una acción si la condición es verdadera 
y una acción si la condición es falsa.


//VALORES BOOLEANOS 


//los buleanos se pueden poner de forma directa o tomar el valor mediante las condicionales

                    /* Por ejemplo, si queremos que el programa salude al usuario solo si 
                    su nombre es "Juan", se puede usar un condicional. 
                    La condición sería verificar si el nombre es igual a "malena". Si es verdadero, 
                    el programa muestra un saludo especial para malena. 
                    Si es falso, el programa puede mostrar un saludo general para cualquier otro nombre.

                            ejemplo

                    let nombre = prompt('Ingresa tu nombre');
                    if (nombre === 'malena') {
                    console.log('¡Hola, malena!');
                    } else {
                    console.log('¡Hola, amigo!');
                    } */



    //EJEMPLO DE IF


/* 
let num1 = 100
let num2 = 500 

let respuesta = (num1 > num2)
//let respuesta = (num1 = num2)  //aca no comparo, sino que asigno. para comparacion es ==
//esto es causa normal de errores

if (respuesta){
    console.log("num1 es menor a num2")
} */


        //IF ELSE  se puede usar el if solo, pero no se puede usar un else sin if



/* let respuesta = prompt("preferis una computadora o una notebook?")

if(respuesta.toLowerCase == "computadora"){
    console.log("las computadoras son buenas para jugar😊")
} else{
    console.log("las notebook son mas faciles de transportar💂‍♀️")
} */ 

        //EJEMPLO DE ELSE IF USANDO TODO LO APRENDIDO

      

/* console.log("vendo algo, escucho ofertas.")

let ofertabase = 2000
let ofertaDelUsuario = prompt("ingresa tu oferta:")
if (ofertaDelUsuario < 1000){
    console.error("olvidate, tu oferta es demaciado baja")
}else if(ofertaDelUsuario < 2000 && ofertaDelUsuario > 1000){
    console.warn("estirate un poco mas")
}else if(ofertaDelUsuario > 2000){
    console.log("oferta aceptada! ✅ te enviare un mensaje para coordinar el envio")
}else{
    console.log("tu oferta no se entendio")
} */








//OPERADORES LOGICOS  (AND-OR-NOT)  && || !

//BUSCAR EL GOOGLE LA TABLA DE LA VERDAD 


/* 
 */

/* if(numA < numB && numA < 1500){  //si uno solo da falso, ya no se cumple la sentencia
    console.log("esto nunca se va a mostrar")
}


if(numA < numB || numA < 1500){  //si se cumple una o la otra, se ejecuta
    console.log("esto si se va a mostrar porque una se cumple")
}

if(numA =! numB){    //para estar siempre seguro, usar ==! (estrictamente diferente)
    console.log("esto se muestra porque son diferentes")
} */


/* let correo = prompt("ingrese su correo")

if(correo =! "" ){ // si el ingreso NO ESTA VACIO (si es diferente a vacio), muestra el msj
    console.log("bienvenido ", correo)
}else{
    console.warn("ingresa un correo valido")
} */



/* ejemplo de CALCULADORA con if else 



let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");
let resultado;

if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  resultado = num1 / num2;
} else {
  console.log("Operación inválida");
}

console.log("El resultado es: " + resultado);*/



//archivo creado para uso educativo- propiedad de Javier Gimenez
//IG jg.programacion
//YT jg.programacion