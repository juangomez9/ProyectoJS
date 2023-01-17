let nombreForm = document.querySelector("#nombre");
let apellidoForm = document.querySelector("#apellido");
let infoForm = document.querySelector(".info");

//Creamos array y pusheamos los datos del usuario
let inputs = Array.from(document.querySelectorAll(".form-control"))

function ArrayFormu() {
    datosUsuario = inputs.map((input) => {
        return input.value
    })

    localStorage.setItem("Usuario", JSON.stringify(datosUsuario))
}

function Persona(nombre, apellido, email, contraseña, direccion, pais, ciudad, telefono) {
    return nombre, apellido, email, contraseña, direccion, pais, ciudad, telefono
}

let usuario = new Persona();
const usuario1 = inputs.reduce((persona, input) => {
    persona[input.id] = input.value;
    return persona;
})

console.log(usuario)

const personas = new Array();
personas.push(usuario1)
console.log(personas)


const pintarInfo = formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    infoForm.innerHTML = `
<div class="alert alert-warning" role="alert">
<h5>Muchas gracias ${nombreForm.value} ${apellidoForm.value} por registrarse, ahora puede realizar la compra!</h5>`
})