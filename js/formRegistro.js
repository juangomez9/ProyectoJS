//Creamos array y pusheamos los datos del usuario
let inputs = Array.from(document.querySelectorAll(".form-control"))

function ArrayFormu() {
    datosUsuario = inputs.map((input) => {
        return input.value
    })

    localStorage.setItem("Usuario", JSON.stringify(datosUsuario))
}

//Evento registro
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validar()
})

//Validamos el campo de registro
function validar() {
    let verificamos = true;

    if (document.querySelector("#nombre").value.length < 3) {
        verificamos = false;
    }
    if (document.querySelector("#apellido").value.length < 3) {
        verificamos = false;
    }
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    let email = document.querySelector("#email").value;
    if (!expresion.test(email)) {
        verificamos = false;
    }
    if (document.querySelector("#contraseña").value == ' ') {
        verificamos = false;
    }
    if (document.querySelector("#direccion").value.length == ' ') {
        verificamos = false;
    }
    if (document.querySelector("#pais").value - length == ' ') {
        verificamos = false;
    }
    if (document.querySelector("#ciudad").value.length == ' ') {
        verificamos = false;
    }
    if (document.querySelector("#telefono").value.length == ' ') {
        verificamos = false;
    }

    if (verificamos) {
        Swal.fire({
            title: 'Su registro se realizo con exito!',
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
        Swal.fire(`Usted debe completar el campo para registrarse`)
    }

    return verificamos;
}