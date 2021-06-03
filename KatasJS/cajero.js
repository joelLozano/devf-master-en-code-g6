// configuraciones de la pagina 
document.getElementById("sectionOperaciones").style = "display: none";

var usuarioJoel = {
    nombre: "joel",
    saldo: 500,
    usuario: "joelito",
    password: "123",
    id: "J123"
} 
var usuarioIris = {
    nombre: "Iris",
    saldo: 2000,
    usuario: "Iris123",
    password: "12343546",
    id: "IP123"
}

var arregloUsuarios = [usuarioJoel, usuarioIris];
var propietario;





function login() {
    // obtener Datos de los input
    var usuario = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    // obtener la referencia de mi etiqueta html
    var etiquetaError = document.getElementById("mostrarError");
    var etiquetaSuccess = document.getElementById("mostrarSuccess");
    
    propietario = arregloUsuarios.find((flag) => {
        return flag.usuario === usuario;
    });

    if (propietario.password === password) {
        etiquetaError.innerHTML = ""
        etiquetaSuccess.innerHTML = "Bienvenido :D ";
        mostrarOperaciones()
    } else {
        etiquetaSuccess.innerHTML = ""
        etiquetaError.innerHTML = "Error, verifica tu usuario y contraseña";
    }
}

// funcion que muestre las opciones de nuestra cuenta de banco  depositar , retirar , consultar 

function mostrarOperaciones() {
    document.getElementById("sectionOperaciones").style = "display: block";
    document.getElementById("saldoActual").innerHTML = "Tu Saldo actual es: $"+propietario.saldo
}

function depositar() {
    var monto = document.getElementById("montoAdepositar").value;
    var totalSuma = propietario.saldo + parseInt(monto);
    if (totalSuma > 990) {
        alert("Error, estas superando el monto permitido" + totalSuma);
    } else {
        propietario.saldo =  totalSuma
        alert("Acabas de deposiutar" + monto);
    }
   
}

funcion

function retirar () {
    var monto = document.getElementById("montoRetirar").value;
    var mensaje = document.getElementById("messageRetiro");
    totalRetiro = propietario.saldo - parseInt(monto)
    if (totalRetiro < 10) { 
        mensaje.innerHTML = "Opercacion NO ¡Exitsa! :D ";
    }else {
        propietario.saldo = totalRetiro
        mensaje.innerHTML = "Opercacion ¡Exitsa! :D ";
    }
    
}

function mostrarSaldo() {
    document.getElementById("saldoActual").innerHTML = "Tu Saldo actual es: $"+propietario.saldo
}


// no debe de haber menos 10 
