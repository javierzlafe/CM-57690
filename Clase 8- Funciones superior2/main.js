


//console.log(Math)
//console.log(Math.PI)
//console.log(Math.abs(7.8)) //devuelve el valor absoluto
//console.log(Math.ceil(7.8)) //redondea hacia arriba
//console.log(Math.floor(7.8)) //redondea para abajo
//console.log(Math.round(7.8)) //redondea para el mas cercano
//console.log(Math.pow(2,5)) //devuelve 2 elevado a 5
//console.log(Math.sqrt(81)) //raiz cuadrada

//console.log(  Math.floor(Math.random()*30))


let hora = new Date() 
console.log( hora )


/* 
año(4 digitos)
meses (0-11)
dias del mes (1-31)
hora (0-23)
minutos(0-59)
segundos(0-59)
milisegundos (0-999)



*/

/* const fechaEspecifica = new Date(2023,11,25,10,30,0,0)

console.log(fechaEspecifica) */


/* const fecha = new Date()

const mes = fecha.toDateString

console.log(mes) */


const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}
const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")