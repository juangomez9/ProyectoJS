const cardBodies = document.querySelector("#tarjetas");

//Creamos constructor de productos
class Producto {
    constructor(objeto) {
        this.id = objeto.id
        this.nombre = objeto.nombre;
        this.precio = objeto.precio
    }
}

//Pintamos las tarjetas en HTML 
fetch("/productos.json")
    .then((resp) => resp.json())
    .then((productos) => {
        productos.forEach((prod) => {
            const card = document.createElement("card");
            card.innerHTML = `
            <div class="card" style="width: 15rem;">
            <div class="card-body">
            <h5 class="card-title text-center">${prod.nombre}</h5>
            <p class="card-text text-center">Precio: ${prod.precio}</p>
            <button id=${prod.id} class="boton-compra btn btn-primary">Comprar</button>
            </div>
            </div>`;
            cardBodies.append(card);
            productos2.push(new Producto(prod))
        });
        eventoBotones();
    });

const productos2 = [];

//Creamos array vacio para el carrito
let carrito = [];

//Evento boton 
function eventoBotones() {
    const botonesCompra = document.querySelectorAll(".boton-compra");
    botonesCompra.forEach((button) => {
        button.addEventListener("click", (e) => {
            agregarCarrito(parseInt(e.target.id))
        })
    })
}

//Recorremos el array y pusheamos el producto
function agregarCarrito(prodId) {
    let producto = productos2.find((producto) => {
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
        <div class="card m-3" style="width: 15rem;">
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

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Esta seguro que desea eliminar?',
        text: "Este producto se eliminara del carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, quiero eliminar',
        cancelButtonText: 'No, cancela!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'El producto se elimino del carrito.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Su producto no se ha eliminado',
                'error'
            )
        }
    })
}

//Vaciar productos del carrito
function vaciarCarrito() {
    carrito = [];
    renderCarrito();
}

//Evento vaciar carrito
const botonVaciar = document.querySelector(".vaciar")
botonVaciar.addEventListener('click', vaciarCarrito);

//Compramos productos del carrito y verificamos su contenido
function comprarCarrito() {
    verificarCarrito()
    carrito = [];
    renderCarrito();
}

//Verificamos el carrito
function verificarCarrito(){
    if (carrito.length > 0) {
        Swal.fire({
            title: 'Su compra se realizo con exito!',
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
    } else {
        Swal.fire('Usted debe seleccionar un producto')
    }
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