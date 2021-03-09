// calcular el factorial de un numero

// factorial de 5
// 1 * 2 * 3 * 4 * 5 = 120;

// factorial de 10
// 1 * 2 * 3 .... * 10 =  3,628,800
// ---------------------------------------------------------


// PSEUDOCODIGO
// ---------------------------------------------------------

// Entras: 
//     numero a calcular el factorial
// Proceso 
//     calculo del factorial
// Salida 
//     resultado del calculo del factorial

// Caculco de factorial
// Inicio
//     lee numero
//     definir contador = 1
//     definir factorial = 1
//     para(contador; hasta que contador <= numero, contador = contador +1)
//         factorial = contador * factorial;
//     fin para
//     imprime el valor de: factorial es 
// Fin

// PRUEBA DE ESCRITORIO
// ---------------------------------------------------------

// numero =  5
// contador = 0;

// contador    contador <= 5   factorial        contador
// 1           SI              1 * 1 = 1        2
// 2           SI              2 * 1 = 2        3
// 3           SI              3 * 2 = 6        4
// 4           SI              4 * 6 = 24       5
// 5           SI              5 * 24 = 120     6
// 6           NO              

//el valor de factorial es 120

var numero = 5;
var contador = 1;
var factorial = 1;

for(contador; contador <= numero; contador++) {
    factorial = factorial * contador;
}

console.log("el factorial es:", factorial)