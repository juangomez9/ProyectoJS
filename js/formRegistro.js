let nombreForm = document.querySelector("#nombre");
let apellidoForm = document.querySelector("#apellido");
let infoForm = document.querySelector(".info");

//Creamos array y pusheamos los datos del usuario
function ArrayFormu() {
    let arrayFormulario = new Array();
    let inputs = document.querySelectorAll(".form-control")
    datosUsuario = [].map.call(inputs, function (datoinput) {
        arrayFormulario.push(datoinput.value)
    });
    localStorage.setItem("Usuario", JSON.stringify(arrayFormulario))
}

const pintarInfo = formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    infoForm.innerHTML = `
<div class="alert alert-warning" role="alert">
<h5>Muchas gracias ${nombreForm.value} ${apellidoForm.value} por registrarse, ahora puede realizar la compra!</h5>`
})