// var promesa = new Promise( (resolve, reject) => {
//     console.log("pintar el html en el navegador");
//     setTimeout( function() {
//         // resolve("Ir a consultar la BD y traer la informacion ")
//         reject("error en la conexion :( ")
//     }, 2000)

// })

// promesa.then( x => {
//     console.log(x)
// } ).then(() => {
//     console.log("pinta en la tabla la informacion ")
// }, function(reason) {
//     console.log(reason)
// })


// var numero = 23

// var promesa = new Promise( (resolve, reject ) => {
//    if (numero >= 40) {
//        resolve("Si, es mayor o igual a 40");
//    } else {
//        reject("No, no es mayor, es menor");
//    }
// })

// promesa.then((x) => {
//     console.log(x)
// }).catch((x) => {
//     console.log(x)
// })


// simular una conexion a BD 
// Vamos a declarar un arreglo de 3 objetos. 
// de una persona con su nombre, edad y correo

// mediante una promesa 
// ejecutar 3 procesos / tareas 
// primera mandar un mensaje de 
// imprimir despues de 3 segundos los objetos
// mandar un mensaje de Que se ejecuto correctamente la consulta de BD
// debe tener manejo de errores // cuando este vacio. 

var a = {
    nombre: "joel",
    edad: 28,
    correo: "joel@gmail.com"
}

var b = {
    nombre: "anderson",
    edad: 18,
    correo: "anders@gmail.com"
}

var c = {
    nombre: "Benito",
    edad: 13,
    correo: "benito@gmail.com"
}

var array = []

var promesa = new Promise((resolve, reject) => {

    console.log("Hola buenas tardes :D") // imprmir   saludo 

    setTimeout(() => {
        if (array.length > 0) {
            resolve(array)
        } else {
            reject("Error, arreglo vacio")
        }
    }, 3000)
})

promesa.then( (objectos) => {
    console.log(objectos)
})
.then( () => {
    console.log(" se imprimio correctamente")
}).catch((error) =>{
    console.log(error)
})

