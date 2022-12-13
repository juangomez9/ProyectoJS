class Producto {
    constructor(id, nombre, precio, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    mostrarInfo() {
        alert(`Usted selecciono ${this.nombre} ${this.precio} ${this.descripcion}`)
    }
    agregarComision() {
        return this.precio * 1.15;
    }
    calcularCoutas(valorTotal, cantidadCoutas) {
        return valorTotal / cantidadCoutas;
    } 
}

const array = [];
array.push(new Producto(1, "Samsung", 70000, "Televisor de 24 pulgadas"))
array.push(new Producto(2, "LG", 60000, "Televisor de 24 pulgadas"))
array.push(new Producto(3, "RCA", 55000, "Televisor de 24 pulgadas"))
array.push(new Producto(4, "TCL", 50000, "Televisor de 24 pulgadas"))

class Persona {
    nombre;
    apellido;
    email;
    direccion;

    constructor() {}

    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setEmail(email) {
        this.email = email;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }

    saludar() {
        alert(`Bienvenido ${this.nombre} ${this.apellido}, sus datos son
        ${this.email} ${this.direccion}`)
    }
}

alert("Bienvenido a Televisores SA.");

let cuenta = confirm("Usted desea crear una cuenta?");

do {
    if (cuenta) {
        const usuario1 = new Persona();
        usuario1.setNombre(prompt("Ingrese nombre"))
        usuario1.setApellido(prompt("Ingrese apellido"))
        usuario1.setEmail(prompt("Ingrese email"))
        usuario1.setDireccion(prompt("Ingrese direccion"));

        usuario1.saludar();

        let televisor = parseInt(prompt(`Que televisor desea comprar?
1: Samsung
2: LG
3: RCA
4: LGB`));

        const resultado = array.find(elemento => elemento.id === televisor)
        resultado.mostrarInfo()

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

        let precioTotalConComision = resultado.agregarComision()

        let valorCuota = resultado.calcularCoutas(precioTotalConComision, numeroCoutas)

        alert(`Usted pagara ${valorCuota} en cada couta`)


    } else {
        alert("Usted debe crear una cuenta para acceder");
        break;
    }
} while (cuenta == false);