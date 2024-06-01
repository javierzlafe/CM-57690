
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
    let palabraClave =  prompt("ingresa tu busqueda").toUpperCase().trim()
    let resultado = lista.filter( (x)=>x.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("aca no hay ninguna coincidencia con " + palabraClave)
    }
}


function agregarProducto(){

    let nombre = prompt("ingresa el nombre del producto").toUpperCase()
    let precio = parseFloat (prompt("ingresa el precio del producto"))
    let stock = parseInt(prompt("ingresa el stock del producto")) 

    if(isNaN(precio) || isNaN(stock) || nombre==""){
        alert("por favor ingresa datos validos")
        return  //SI NO PONGO QUE RETORNE, ME GUARDA EL PRODUCTO VACIO
    }

    let producto =  new Producto (nombre,precio,stock)

    if(lista.some((x)=>x.nombre === producto.nombre)){
        alert("ya hay un producto con ese nombre")
        return
    }

    lista.push(producto) //si el producto no existe en la lista, y el usuario puso todo bien. pusheo
    console.table(lista)
    
}
