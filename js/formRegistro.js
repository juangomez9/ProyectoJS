let nombreForm = document.querySelector("#nombre");
let apellidoForm = document.querySelector("#apellido");
let emailForm = document.querySelector("#email");
let contraseñaForm = document.querySelector("#contraseña");
let direccionForm = document.querySelector("#direccion");
let paisForm = document.querySelector("#pais");
let ciudadForm = document.querySelector("#ciudad");
let telefonoForm = document.querySelector("#telefono");
let formulario = document.querySelector("#formulario");
let infoForm = document.querySelector(".info");

nombreForm.addEventListener("input", ()=> {
    if(nombreForm.value === ""){
        alert("Ingrese nombre válido")
    }
})

apellidoForm.addEventListener("input", ()=> {
    if(apellidoForm.value === ""){
        alert("Ingrese apellido válido")
    }
})

emailForm.addEventListener("input", ()=> {
    if(emailForm.value === ""){
        alert("Ingrese email válido")
    }
})

contraseñaForm.addEventListener("password", ()=> {
    if(contraseñaForm.value === ""){
        alert("Ingrese contraseña válido")
    }
})

direccionForm.addEventListener("input", ()=> {
    if(direccionForm.value === ""){
        alert("Ingrese direccion válido")
    }
})

paisForm.addEventListener("input", ()=> {
    if(paisForm.value === ""){
        alert("Ingrese pais válido")
    }
})

ciudadForm.addEventListener("input", ()=> {
    if(ciudadForm.value === ""){
        alert("Ingrese ciudad válido")
    }
})

telefonoForm.addEventListener("input", ()=> {
    if(telefonoForm.value === ""){
        alert("Ingrese telefono válido")
    }
})

const pintarInfo = formulario.addEventListener("submit", (e)=>{
e.preventDefault();
infoForm.innerHTML = `
<div class="alert alert-warning" role="alert">
<h5>Muchas gracias ${nombreForm.value} ${apellidoForm.value} por registrarse, ahora puede realizar la compra!</h5>`
})


