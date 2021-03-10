// en una lista(array) de 10 nuemeros calular el promedio de esos numeros.


// suma     posicion    suma + listaNumeros[posicion]       posicion++
// 0        0           suma = 0 + 5 (listaNumeros[0])      1
// 5        1           suma = 5 + 8 (listaNumeros[1])      2
// 13       2           suma = 13 + 10 (listaNumeros[2])    3
// 23       3           suma = 23 + 7 (listaNumeros[3])     4


let suma = 0;
let listaNumeros = [5, 8 , 10 , 7];

for(var posicion = 0; posicion < listaNumeros.length; posicion++ ) {
    suma= suma + listaNumeros[posicion];
}

const promedio = suma / listaNumeros.length;

console.log('El promedio es: ', promedio)