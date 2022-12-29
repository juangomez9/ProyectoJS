const cardBodies = document.querySelectorAll(".card-body");

//Pinta datos en las tarjetas
const pintar = (prod) => {
    return `
            <h5 class="card-title">Precio: ${prod.precio}</h5>
            <p class="card-text">Descripcion: ${prod.descripcion}</p>
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
        <img src="./galeria/assets/BGH.jpg" class="card-img-top">
        <div class"card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <button onclick="eliminarCarrito(event)" id=${producto.id} class="boton-eliminar btn btn-danger">Eliminar</button>
        </div>
        </div>`
    })

    tarjetas.forEach((tarjeta) => {
        carritoHTML.innerHTML += tarjeta;
    })
}

//Eliminamos productos del carrito
function eliminarCarrito(e) {
    carrito = carrito.filter((producto) => {
        return producto.id !== parseInt(e.target.id)
    })
    renderCarrito();
}