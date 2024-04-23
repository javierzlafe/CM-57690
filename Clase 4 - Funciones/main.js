

/* function nombreFuncion() {
                     instrucciones que ejecutará la función
                }  */                                 

                function saludar (){
                    let nombre = prompt("ingresa tu nombre")
                    alert("bienvenido " + nombre)
                }



                            //EJEMPLO FUNCION
function login(){
    let usuario = prompt ("ingresa tu usuario:")
    //aca valido si es diferente a "", le saco los espacios al dato que ingresa, y que sea mayor a 1 letra
    if(usuario !== ""){ 
      alert("bienvenido: " + usuario)       
    }else{
        alert("error en el dato ingresado")
    }

}


            
            /* ejemplo simple */ 
                            function saludar(nombre) {
                                console.log(`Hola, ${nombre}!`);
                            }


            //ejemplo para calcular el iva
            const IVA = 1.21

function calcularIva(importe){  //Creo funcion con un parametro (importe)
    if (parseFloat(importe)){    // convierto a numero, si el importe es un numero => segui
        let resultado = importe * IVA
        alert("el importe mas iva es: " + resultado)
    }
}

function calcularPrecioFinal(){  //creo una funcion nueva
    let precioDelProducto = prompt("ingresa el importe del producto:") //pido dato al usuario
    calcularIva(precioDelProducto) //utilizo la funcion ya creada y le paso como parametro la nueva
    alert("el importe final es: " + resultado) //esto se rompe (NO SE MUESTRA), por el scope de resultado

}

calcularPrecioFinal()


            //VER FILMINAS
                    
            //FUNCION CON DOS PARAMETROS

function sumar(numA,numB){
    let resultado = numA + numB
    alert("el resultado de la suma es :" + resultado)
}

sumar(5,35)



            //FUNCIONES CON RETURN

            //ejemplo simple con numeros

            function sumar(num1, num2) {
                let resultado = num1 + num2;
                return resultado;
              }




// Función anónima asignada a una variable
let sumar = function(a, b) {
  return a + b;
}

alert(sumar(2, 3)); // 5


      //FUNCIONES FLECHA O   ARROW FUNCTION


      function normal(a,b){
        return a+b
      }



      let funcionAnonima = function(a, b) {
        return a + b;
      }



      let funcionFlecha = (a, b) => {
        return a + b;
      }


      let funcionFlechaEnLinea = (a, b) => a + b;
