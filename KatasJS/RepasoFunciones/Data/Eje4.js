// Listas Enlazadas
// 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista.
//Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
//INICIO de lista//
//Generar una lista de elementos.
//identificar el elemento a agregar a la lista.
// verificar que no se encuentre repetido en la lista. En caso de estar repetido, mostrar una alerta de elemento repetido.
//Si el elemento no se repite, agregar a la lista y mostrar mensaje de "éxito".
//Fin de programa
// var lista = ["Diego", "Adrian", "Karla", "Ricardo"];
// var nuevo = "joel";

// lista.indexOf(nuevo)

// console.log(lista)

var almacen = ["Contenedor1","Contenedor2","Contenedor3","Contenedor4","Contenedor5","Contenedor6","Contenedor7","Contenedor8","Contenedor9"]
var contenedor= "Contenedor5"

function encontrarContenedor() {

    for (var i=0; i < almacen.length; i++){
        if (almacen[i] === contenedor) {
            var posicionDelElementoAEliminar = almacen.indexOf(almacen[i]); 
            var pilaTemporal2 = almacen.slice(i+1,almacen.length);
            // eliminamos los elementos, hasta extraer el elemento deseado
            for(var j=0; j <=posicionDelElementoAEliminar; j++){
                almacen.pop()
            }
            // Añado lo que tengo en mi pila temporal al arreglo original
            for(var j=0; j <pilaTemporal2.length; j++){
                almacen.push(pilaTemporal2[j])
            }
        }
    }

    console.log(almacen) 
}
encontrarContenedor();