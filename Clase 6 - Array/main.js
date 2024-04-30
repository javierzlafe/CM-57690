  


                   // const frutas= ["manzana", "pera", "banana", "sandia"]
                        //indice:      0         1        2         3

                        


    /* Para acceder a los elementos de un array, se usa el índice del elemento dentro de los corchetes.
    Por ejemplo, para acceder al segundo elemento del array que creamos aca, se puede escribir: */

                       /*  console.log(frutas[0]) 
                        console.log(frutas[2]) */

                        //y para asignar ese valor a una variable, seria:

             //let frutaPreferida = frutas[1];*/






     /* Los arrays en JavaScript son como objetos, se pueden hacer cálculos matemáticos, manipular 
     elementos de la página web, entre otras muchas cosas...
     
     
     
     Por ejemplo, si tenemos un array de números como este: 

                const numeros = [10, 20, 30, 40];

                console.log(numeros[0]); // Output: 10

                console.log(numeros[2]); // Output: 30


    También se puede asignar un nuevo valor a un elemento específico del array usando su índice:

                numeros[1] = 25;
                console.log(numeros); // Output: [10, 25, 30, 40]
      */
    
    /* Es importante tener en cuenta que si queremos acceder a un índice que no existe, 
    nos va a tirar el valor undefined */

                //console.log(numeros[4]); // Output: undefined

            
                                        //EJEMPLO FACIL DE SUMA CON ARRAY

        /*  const  numeros = [1,2,3,4,5];
            console.log( "indice numero 0: " + numeros[0] ) // 1; 
            console.log( "indice numero 3: " + numeros[3] ) // 4; 
            let resultado  = numeros[1] + numeros[2] 
            console.log( resultado  ) // 5; */
                                                            


/* el bucle for se puede usar tranquilamente para poder RECORRER un array.
que signifa recorrer una array? que podemos acceder a cada uno de los elementos por separado.*/


                        /* const numeros = [1, 2, 3, 4, 5];
                        for (let i = 0; i < 5; i++) {   que me deberia mostar aca? hasta que numero?
                            console.log(numeros[i]);
                        }
                        */







                    //METODOS Y PROPIEDADES DE LOS ARRAY           


                    /*
                                            ---LENGTH---

                    length(): cuenta la cantidad de propiedades que hay en el array
                            
                                const miArray = ["marca", 3 ,"palabra"];
                                console.log( miArray.length ); //imprime 3
                    
                    este es muy importante porque nos sirve para que se recorra todo el array
                    sin tener que especificar hasta Donde, por ejemplo:
                    
                                const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

                                for (let i= 0; i < numeros.length; i++) {
                                    alert(numeros[i]);
                                } */

                    


                     /*                        ---PUSH---

                    push(): Agrega uno o más elementos al final del array.



                                const frutas = ["manzana", "banana", "naranja"];
                                frutas.push('otro elemento')
                                
                                console.log(frutas.length) // ⇒ 4
                                console.log(frutas) //["marca", 3, "palabra", “otro elemento”] */
                    


                                      /*           --POP--

                    pop(): Elimina el último elemento del array.


                                let frutas = ["manzana", "banana", "naranja"];
                                let ultimoElemento = frutas.pop();

                                console.log(frutas);  // ["manzana", "banana"]
                                console.log(ultimoElemento);  // "naranja"

                     
                                                --SHIFT--

                    shift(): Elimina el primer elemento del array.
                                
                                frutas.shift();
                                console.log(frutas); // ["banana", "naranja"]



                                                --UNSHIFT--


                    unshift(): Agrega uno o más elementos al inicio del array.
                                
                                frutas.unshift('kiwi');
                                console.log(frutas); // ["kiwi", "banana", "naranja"]



                                                --SLICE--


                    slice(): Retorna una copia de parte del array. parametros (desde,hasta)
                                
                                const copia = frutas.slice(0, 2);
                                console.log(copia); // ["kiwi", "banana"]




                    concat(): Une dos o más arrays.
                                
                                const perros = ['puqui', 'negrito','manchita'];
                                const gatos = ['mishi', 'garfield', 'salem']
                                const mascotas = perros.concat(gatos);
                                console.log(mascotas); // aparecen todos los perros y gatos





                                                --JOIN--

                    join(): Une todos los elementos de un array en una cadena.
                               
    º                            const cadena = frutas.join(', ');
                                console.log(cadena); // "kiwi, mango, sandía, banana, naranja"





                                                --INDEXOF--



                    indexOf(): Retorna la posición de un elemento específico en el array.
                                si el elemento no existe, retorna -1
                                
                                 const posicion = frutas.indexOf('banana');
                                console.log(posicion); // 1
 


                                                --INCLUDES--


                    includes(): el método includes me permite saber si un elemento que recibo por parámetro 
                    existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:



                                const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

                                console.log( nombres.includes('Rita') ) // ⇒ true
                                console.log( nombres.includes('Miguel') ) // ⇒ true
                                console.log( nombres.includes('Julieta') ) // ⇒ false
            
 */



                                   /*  --EJEMPLO FACIL DE USO CON PUSH--

                    let miArray = [];

                    // Pedimos al usuario que ingrese un nombre
                    let entrada = prompt("Ingresa un nombre:");
                    
                    // Mientras el usuario siga ingresando nombres, los agregamos al array
                    while (entrada !== null) {
                      // agregamos al array lo que escribe el usuario
                      miArray.push(entrada);
                      // Pedimos al usuario que ingrese otro número
                      entrada = prompt("Ingresa otro número o presiona cancelar para terminar:");
                    }
                    
                    // Mostramos el array completo en la consola
                    console.log(miArray); */





                                /* EJEMPLO SIMPLE USANDO INDEX OF Y SPLICE

          let miArray = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];

            // Encontramos el índice del elemento que queremos eliminar
            let indice = miArray.indexOf('elemento3');

            // Si el elemento existe en el array, lo eliminamos con splice()
            if (indice !== -1) {
            miArray.splice(indice, 1);
            }

            console.log(miArray); // ['elemento1', 'elemento2', 'elemento4']
 */





                               /*  COMO ARMAR UN ARRAY DE OBJETOS   


                        let personas = [
                        { nombre: "Juan", edad: 25, ciudad: "Buenos Aires" },
                        { nombre: "María", edad: 30, ciudad: "Córdoba" },
                        { nombre: "Pedro", edad: 20, ciudad: "Rosario" }
                        ];


                        console.log(personas[1].edad); // salida: 30

tambien podemos usar bucles para iterar dentro de un array de objetos y 
acceder a las propiedades de cada objeto. Por ejemplo, 
vamos a mostrar el nombre y la ciudad de cada persona en el array:


                        for (let i = 0; i < personas.length; i++) {
                        console.log(personas[i].nombre + " vive en " + personas[i].ciudad);
                        }
 */



                                            /* FOR OF


      La sentencia for...of es una estructura de control de flujo, que se usa para recorrer 
      elementos de  un array o un objeto iterable, y que ejecuta un conjunto de instrucciones 
      en cada uno.

      En criollo, la sentencia for...of nos va a dejar recorrer cada elemento del array
      y hacer una tarea específica en cada uno. 
      La sintaxis básica de la sentencia for...of es la siguiente:

      for (variable of iterable) {
        // instrucciones a ejecutar en cada iteración
      }


      const remeras= [   //declaro el array con objetos adentro
    { 
    id: 1, 
    color: "negra" 
    },
    {   id: 2,  
    color: "blanca" 
    },
    {   id: 3,  
    color: "roja" 
    }
];



for (const producto of remeras) {   //creo const producto, DE remeras.
console.log(producto.id);   //recorro producto.id y lo muestro
console.log(producto.color); //recorro producto.color y lo muestro
} */




                    //EJERCICIO DEL FINAL DE LA CLASE




                    const Producto = function(nombre,precio,stock){
                        this.nombre= nombre,
                        this.precio = precio
                        this. stock = stock
                    }
                                       
                    let producto1= new Producto ("lenovo", 1950000, 20)
                    let producto2= new Producto ("samsung", 45500, 26)
                    let producto3= new Producto ("macbook", 700000, 45)
                    let producto4= new Producto ("xiaomi", 350000, 23)
                  
                    let lista = [producto1,producto2,producto3,producto4]

                    function filtrarProductos(){
                        let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase()
                        let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))
                    
                        if (resultado.length > 0){
                            console.table(resultado)
                        }else{
                            alert("no se encontro ninguna coincidencia con: "+ palabraClave)
                        }
                    
                    }



                                  