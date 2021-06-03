// Funciones
// Una funcion realiza una accion, un procedimiento, 

// ejemplo : control remoto 
// bonton On  
// nos ayuda a realizar una tarea en especifico, puede obtener / tener Valores , - > parametros / atributos 

function llamar(numeroTelefonico) {
    // validar que el numero sea correcto 
    // Realiza la llamada 
    // doy un mensaje que no se completo la llamada 
}

// lista de numeros 
// 1.- 5523434345
// 2.- 3453455466
// 3.- 34534545

llamar(5523434345)
llamar(3453455466)
llamar(34534545)

function servirAgua(tipoDeAgua, temperatura) {
    // obtener vaso 
    // inclinar jarra 
    // servir 
    // y tomar 
}

servirAgua("simple", "Temperaturaam...")
servirAgua("llave", "fria")
servirAgua("limon"," helada")
servirAgua("melon" , "tibia")


function sumar(A, B) {
    console.log(A + B)
}

sumar(1,3) //4
sumar(3,5) // 8
sumar(3,9) // 12


// 5 

// CRear funciuones de la calculadora, que me permita hacer la operacion de 2 numeros (dividir, multiplicar, sumar, resta) 
// Mandarla llamar con un ejemplo. 



// RETURN 
var consumo = 50

function cobrar(monto) {
    if(monto > consumo){
        return monto - consumo
    }
    else {
        return "Gracias por consumir"
    }
}

var retorno = cobrar(200)

console.log(retorno) // 150 

var retornoDiana = cobrar(500)
console.log(retorno) // 450 

var retorno = cobrar(50)
console.log(retorno) // "Gracias por consumir"



var cambio  = cobrar(500) // 450

var propina = 5

var restante = cambio - propina

console.log("Monto actual en mi billetera ", restante) // 445





function prenderTelevisor (estado) {
    if (estado == "ON") {
        console.log("prender TV")
    } else {
        console.log("apagar TV")
    }
} 


function validarCorreo(correo) {
    if ( correo == cuentaorginal ) {
        return true
    }
    else {
        return false
    }
}

var correoIN = "joel@devf.com"

var resultado = validarCorreo(correoIN)

if (resultado) {
 console.log("puedes Stalkear")
} else {
    console.log("sorry no puedes Stalkear")
}



// crear una funcion que regrese   el area de un circulo PI X r2
// var pi = 3.1416
// var radio = 5

// El area de el circulo es : 2344456

const PI = 3.1416



function calcularArea(radio) {
    return PI * (radio * radio)
}

var area = calcularArea(5)
console.log("esto es el area: ", area)

console.log("esto es el area: ", calcularArea(15))


var arregloDeImagenes = []

function subirFoto(foto) {
    arregloDeImagenes.push(foto) // conexion a BD 
    return true
}


var resultadoImagen = subirFoto(fotoVacaciones)
if (resultadoImagen) {
    console.log("Imagen Subida con exito")
} else {
    console.log("Imagen Subida con error")
}