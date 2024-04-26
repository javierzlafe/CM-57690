
//OBJETOS LITERALES


const empleado1={
    nombre: "javier",
    cargo: "profesor",
    ingreso : "2021-03-25",
    edad : 31,
}

const empleado2={
    nombre: "javier",
    cargo: "profesor",
    ingreso : "2021-03-25", 
    edad : 31,
}

console.log(empleado1.nombre) //especifico que empleado y que propiedad quiero ver
              





//OBJETO CONSTRUCTOR o tambien conocido como FUNCIONES CONSTRUCTORAS

/*                 function Producto (id, nombre, importe, stock){  //primera inicial con mayuscula para diferenciar
                    this.id = id
                    this.nombre = nombre
                    this.importe = importe
                    this.stock = stock
                } */


/*              const producto1 = new Producto (1, "teclado", 1500, 50)
                const producto2 = new Producto (1, "mouse", 800, 20)
                const producto3 = new Producto (1, "monitor", 40000, 10) */
/* 
"this" permite el acceso a las propiedades y métodos de un objeto dentro de una función. 
Por ejemplo, si tenemos un objeto que se llama "persona" con una propiedad "nombre", 
se puede acceder a ella dentro de una función utilizando "this.nombre". */







function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
      
    }
  }
  
  // Crear dos instancias del objeto Persona
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Maria", 25);
  
  // Llamar al método saludar de las instancias creadas
  persona1.saludar(); // Imprime "Hola, mi nombre es Juan y tengo 30 años."
  persona2.saludar(); // Imprime "Hola, mi nombre es Maria y tengo 25 años."







                                    //METODOS Y OPERACIONES CON OBJETOS


     function Persona(nombre,edad, profesion){
         this.nombre = nombre
         this.edad = edad
         this.profesion = profesion
     
     
         this.hablar = function(){
             alert(`hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`)
         }
     
     }
     
     
     
     let personaA = new Persona("ruben", 30, "panadero")
     let personaB = new Persona("guada", 25, "desarrolladora sr")
     let personaC = new Persona("mati", 18, "gerente comecial")
     
     
     personaC.hablar()


                                //CLASES



/* 
una función constructora y una clase son dos formas diferentes de crear objetos y organizar el código. 
las dos hacen practicamente lo mismo, peeeeero existen algunas diferencias clave entre las dos.

En la función constructora basicamente es una función normal que se usa para crear nuevos objetos. 
Se usa con la palabra clave "new" como hicimos antes para instanciar objetos basados en un prototipo común.
cual es el prototipo? bueno lo que nosotros definamos en los parametros...


y Por otro lado, una clase es una forma más moderna e intuitiva de definir objetos. 
vamos a ver que la sintaxis es diferente, pero en realidad, las clases tambien se basan en prototipos.


Entonces, la principal diferencia entre una función constructora y una clase es la sintaxis 
que se usa para definir y crear los objetos. Las funciones constructoras son más viejas y 
tenemos que usar la palabra clave new, mientras que las clases son más modernas y fáciles de leer 
profe, cual uso yo? la que quieras, es por comodidad del programador, hay empresas con codigo viejo
y startup que usan todo lo nuevo. lo importante es conocer ambas...
*/
























/* const computadora1 = 
    {
        //clave:valor
        marca:"lenovo",
        procesador: "ryzen 7 5700",
        ram:32,
    }


   

    alert(computadora1.marca)

 */


/* 






function Coche(marca,color){
    this.marca = marca
    this.color = color
}



class Coche{
    constructor(marca,color){
        this.marca = marca
        this.color = color
    }
}

let ferrari = new Coche("ferrari","rojo")



 */


const persona= {
    nombre: "javier",
    edad: 79,
    profesion: "desarrollador"
}

for(const x in persona){
    console.log(persona.x)
}