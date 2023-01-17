const cardBodies = document.querySelectorAll(".card-body");

//Pinta datos en las tarjetas
const pintar = (prod) => {
    return `
            <h5 class="card-title text-center">${prod.nombre}</h5>
            <p class="card-text text-center">Precio: ${prod.precio}</p>
            <button id=${prod.id} class="boton-compra btn btn-primary">Comprar</button>`
}

const cargarTarjetas = (tarjetas) => {
    for (let i = 0; i < tarjetas.length; i++) {
        tarjetas[i].innerHTML = pintar(productos[i])
    }
}

//Cargamos tarjetas
cargarTarjetas(cardBodies);

//Creamos array vacio
let carrito = [];

//Evento boton 
const botonesCompra = document.querySelectorAll(".boton-compra");
botonesCompra.forEach((button) => {
    button.addEventListener("click", (e) => {
        agregarCarrito(parseInt(e.target.id))
    })
})

//Recorremos el array y pusheamos el producto
function agregarCarrito(prodId) {
    let producto = productos.find((producto) => {
        return producto.id === prodId
    });

    carrito.push(producto);
    renderCarrito();
}

//Pintamos el resultado
function renderCarrito() {
    const carritoHTML = document.querySelector(".carrito");
    carritoHTML.innerHTML = "";
    let tarjetas = carrito.map((producto) => {
        return `
        <div class="col-4 card" style="width: 15rem;">
        <div class"card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <button onclick="eliminarCarrito(event)" id=${producto.id} class="boton-eliminar btn btn-danger">Eliminar</button>
        </div>
        </div>`
    })

    tarjetas.forEach((tarjeta) => {
        carritoHTML.innerHTML += tarjeta;
    })

    calcularTotal();
}

//Eliminamos productos del carrito
function eliminarCarrito(e) {
    carrito = carrito.filter((producto) => {
        return producto.id !== parseInt(e.target.id)
    })
    renderCarrito();
}

//Vaciar productos del carrito
function vaciarCarrito() {
    carrito = [];
    renderCarrito();
}

//Evento vaciar carrito
const botonVaciar = document.querySelector(".vaciar")
botonVaciar.addEventListener('click', vaciarCarrito);

//Compramos productos del carrito
function comprarCarrito() {
    const compraRealizada = document.querySelector(".alert")
    carrito = [];
    renderCarrito();
    return compraRealizada.innerHTML = 'Su compra se realizo con exito!'
}

//Evento comprar carrito
const botonComprar = document.querySelector(".comprar")
botonComprar.addEventListener('click', comprarCarrito);

//Calculamos el precio
function calcularTotal() {
    const pagarTotal = document.querySelector(".total")
    let precioTotal = carrito.map((producto) => {
        return producto.precio
    }).reduce((total, prod) => {
        total += prod
        return total
    }, 0)
    pagarTotal.innerHTML = `Total a pagar: ${precioTotal}`
}