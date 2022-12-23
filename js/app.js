const cardBodies = document.querySelectorAll(".card-body");

const pintar = (prod) => {
    return `
            <h5>Precio: ${prod.precio}</h5>
            <p>Descripcion: ${prod.descripcion}</p>
            <button class="btn btn-primary">Comprar</button>`
}

const cargarTarjetas = (tarjetas)=> {
    for(let i = 0; i < tarjetas.length; i++){
        tarjetas[i].innerHTML = pintar(productos[i])
    }
}

cargarTarjetas(cardBodies);

const button = document.querySelector("button");

let carrito = []

