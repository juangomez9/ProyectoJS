alert("Bienvenido a Televisores SA.");

let cuenta = confirm("Usted desea crear una cuenta?");

let Samsung = 60000;
let LG = 50000;
let RCA = 55000;
let LGB = 40000;

do {
    if (cuenta) {
        let nombre = prompt("Ingrese nombre");
        let apellido = prompt("Ingrese apellido");
        let email = prompt("Ingrese email");
        let direccion = prompt("Ingrese direccion");

        let televisor = parseInt( prompt(`Que televisor desea comprar?
1: Samsung
2: LG
3: RCA
4: LGB`));

        switch (televisor) {
            case 1:
                alert(`Usted selecciono Samsung
El precio de Samsung es de ${Samsung}`);
                break;
            case 2:
                alert(`Usted selecciono LG
El precio de LG es de ${LG}`);
                break;
            case 3:
                alert(`Usted selecciono RCA
El precio de RCA es de ${RCA}`);
                break;
            case 4:
                alert(`Usted selecciono LGB
El precio de LGB es de ${LGB}`);
                break;
            default:
                "Esta opcion no esta disponible";
                break;
        }

        let pago = confirm("Desea realizar el pago en efectivo?");

        if (pago) {
            alert(`Su pago se realizo con exito`);
        }

        let tarjeta = confirm("Desea realizar el pago con tarjeta?");
        let numeroCoutas;

        if (tarjeta) {
            numeroCoutas = parseInt(prompt(`En cuantas coutas lo desea realizar?
    3 coutas
    6 coutas
    12 coutas
    24 coutas`));
        } else {
            alert("Solo se aceptan estos metodos de pago");
        }

        alert(`Usted selecciono ${numeroCoutas} cuotas`)

        let precioTotal = obtenerPrecio(televisor)
        let precioTotalConComision = agregarComision(precioTotal)

        let valorCuota = calcularCoutas(precioTotalConComision, numeroCoutas)

        alert(`Usted pagara ${valorCuota}`)


    } else {
        alert("Usted debe crear una cuenta para acceder");
        break;
    }
} while (cuenta == false);


function calcularCoutas(valorTotal, cantidadCoutas) {
    return valorTotal / cantidadCoutas;

}

function obtenerPrecio(marcaTelevisor) {
    switch (marcaTelevisor) {
        case 1:
            return Samsung;
        case 2:
            return LG;
        case 3:
            return RCA;
        case 4:
            return LGB;

        default:
            return 0;
    }
}

function agregarComision(precio){
    return precio * 1.15;
}