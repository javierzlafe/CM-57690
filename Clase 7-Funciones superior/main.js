//ABSTRACCION

const coche =  {
marca: 'Toyota',
modelo: 'Corolla',
anio: 2022,
color: 'Azul',
arrancar: function() {
console.log('El coche está arrancando');
},
acelerar: function() {
console.log('El coche está acelerando');
},
frenar: function() {
console.log('El coche está frenando');
}
};

// Ejemplo de uso
coche.arrancar(); // Output: El coche está arrancando
coche.acelerar(); // Output: El coche está acelerando
coche.frenar(); // Output: El coche está frenando




/*la abstracción en JavaScript nos deja crear objetos o conceptos complejos 
para que podamos usarlos de forma reducida/*




//FUNCIONES FLECHA => ARROW FUNCTION

function sumar (a,b){    //paso parametros
let resultado = a+b  //asigno resultado a+b
return resultado      //retorno valor de resultado
}


const suma = (a,b) =>{ //creo constante, doy parametros y uso arrow function 
return a+b   //retorno el resultado de la funcion
} 

const sum = (a,b) => a+b   //RETORNO IMPLICITO, me lo devuelve de una sin poner return

/*  const frutas = ["manzana", "banana", "naranja"];





            --FOREACH--

forEach(): Ejecuta una función para cada elemento del array.
se podria decir que es como un for, aplicado mas sencillamente a un array


frutas.forEach(function(fruta) {
console.log(fruta.toUpperCase());
});

      // MANZANA
      // BANANA
      // NARANJA

                      --MAP--



map(): Crea un nuevo array con el resultado de llamar a una función para cada elemento del array.
      
      const numeros = [1, 2, 3, 4, 5];
      //declaro constante "doble" y guardo el nuevo array
      const doble = numeros.map(function(numero) {   //Recorro cada elemento
        return numero * 2;   //lo multiplico por 2
      });
      console.log(doble); // [2, 4, 6, 8, 10]


map es parecido a for each pero la diferencia mas importante es que map, crea un NUEVO ARRAY
y el for each, trabajo en el array original.





                    --FIND--

El método find se utiliza para buscar un elemento en un array que cumpla con cierta condición, 
y devuelve el primer elemento que cumple dicha condición.


                              const numeros = [2, 4, 6, 8, 10];
    const encontrado = numeros.find((numero) => numero >= 5);

    console.log(encontrado); // Output: 6


                  --FILTER--

filter(): Crea un nuevo array con todos los elementos que pasan una prueba especificada en una función.
      
const numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0; //si lo divido por dos y el resto da 0
      });
      console.log(numerosPares); // [2, 4]

*/


                  /* --REDUCE-- */


/* El método reduce en JavaScript se utiliza para reducir un array a un único valor, 
aplicando una función de reducción a cada elemento del array.  */

/* const preciosPrendas = [1, 2, 3, 4, 5];
const suma = preciosPrendas.reduce((acumulador, valorActual) => acumulador + valorActual);
                
console.log(suma); // Output: 15
*/




              //SORT

/*               const numeros = [7, 2, 10, 1, 5];

// Ordenar los números de forma ascendente

numeros.sort(function(a, b) {
return a - b;
});

console.log(numeros);  

ESTO ES UNA FORMULITA, SIEMPRE ES IGUAL, SOLO COPIAR Y PEGAR EN EL ARRAY QUE QUIERAS*/




//EJERCICIO DE LA HAMBURGUESA




/* const Producto = function(nombre,precio,stock){
    this.nombre= nombre,
    this.precio = precio
    this. stock = stock
}

let producto1= new Producto ("lenovo", 350000, 20)
let producto2= new Producto ("lenovo pad", 45500, 26)
let producto3= new Producto ("macbook", 700000, 45)
let producto4= new Producto ("apple pad", 350000, 23)
let producto5= new Producto ("smartwatch", 10000, 10)

let lista = [producto1,producto2,producto3,producto4,producto5]



function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: ", palabraClave)
    }

} */




 
/* 
function agregarProducto() {
    let nombre = prompt("Ingresa el nombre del producto:").trim();
    let precio = parseFloat(prompt("Ingresa el precio del producto:"));
    let stock = parseInt(prompt("Ingresa el stock del producto:"));
  
    if (isNaN(precio) || isNaN(stock) || nombre === "") { //si los datos estan vacios, alert
      alert("Por favor ingresa valores válidos.");
      return; //SI no pongo que retorne, me guarda el producto como nan
    }
  
    let producto = new Producto(nombre, precio, stock);   //Si los valores son válidos, se crea un objeto Producto con los valores ingresados y se verifica si ese producto ya existe en la lista utilizando el método some.
  
    if (lista.some((p) => p.nombre === producto.nombre)) {
      alert("El producto ya existe en la lista.");
      return;
    }
  
    lista.push(producto);//Si el producto no existe en la lista, se agrega a la misma y se muestra la lista completa de productos en la consola utilizando console.table
    console.table(lista);
  }*/



  //  SORT


  //usa dos parametros, (a,b),devuelve negativo si a tiene que ir antes que b
  //devuelve positivo si a tiene que ir despues de b, y cero si sonm iguales



  dbContext= [
    productos = {






    }
  ]


  const numeros= ["javier", "sabrina", "matias", "alejandro"]

  let menorAMayor =numeros.sort(function(a,b){
    return a-b
  })
  console.log(numeros)
  

  







