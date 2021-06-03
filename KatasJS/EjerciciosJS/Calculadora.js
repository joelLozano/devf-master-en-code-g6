// programa que realzia uan calculadora basica de 3 numeros ( * + - / )

// function suma(a,b,c) {
//  return a+b+c
// }

// function resta(a,b,c) {
//     return a-b-c
// }

// function multiplicacion(a,b,c) {
//     return a*b*c
// }

// function division(a,b,c) {
//     return (a / b) / c
// }

// var suma = suma(5,5,200);
// console.log(suma);

// var resta = resta(100-40-30);
// console.log(resta);

// Bool , Number String "joel" "+"

// var operacion = "+" 

// if (operacion === "+") {
//     suma(2+3+4)
// } else if (operacion === "-") {
//     resta(2-53-65)
// }
//  var arreglo = [1,4,3,6,7] // empieza desde 0 
// // 
// var totalResultado = 0 // Variables Globales

// function division(numeros) {
//     var resultado = 1
//     for (var i = 0; i < numeros.length; i++) {
//         resultado = resultado / numeros[i] // [10,2,5]
//         consoleç.log(i)
//     }
//     return resultado
// }

// var arreglo = [2,4,5,7,3,8,9];

 
// tengo un programa que sea como un ecommerce  de Ciertos productos
//en este ecommerce deseo visualizar mis productos con sus caracterisiticas
//como son costo, color…  unidades disponibles. etc
//deseo  poder agregar mas pruductos a mi stock
// un producto puede estar agotado o no disponible
// mi programa debe permitirme elegir si quiero mostrar los productos Disponibles o agostados


// function Productos(nombre, precio, descripcion, color, unidades) {
//     this.nombre = nombre
//     this.precio = precio 
//     this.descripcion = descripcion
//     this.color = color
//     this.unidades = unidades
// }

// var item1 = new Productos("El inversor inteligente","Libro de asesoramiento practico", "Rojo",10 )
// var item2 = new Productos("Go PRO","Libro de mercadeo en red", "negro",5 )
// var item3 = new Productos("InstorCOuch","Finazas personales", "verde",4 )

// var productos = [item1,item2, item3]

// function imprimirProductosDisponibles(producto) {
//     for (var i = 0; i> producto.length; i++) {
//         if (producto[i].unidades > 0) {
//             console.log(producto[i].nombre, producto[i].precio, producto[i].descripcion, producto[i].color, producto[i].unidades )
//         }
//     }
// }

// function imprimirProductosNoDisponibles(producto) {
//     for (var i = 0; i> producto.length; i++) {
//         if (producto[i].unidades < 0) {
//             console.log(producto[i].nombre, producto[i].precio, producto[i].descripcion, producto[i].color, producto[i].unidades )
//         }
//     }
// }

// imprimirProductosDisponibles(productos)


// tengo un programa que sea como un ecommerce  de Ciertos productos
//en este ecommerce deseo visualizar mis productos con sus caracterisiticas
//como son costo, color…  unidades disponibles. etc
//deseo  poder agregar mas pruductos a mi stock
// un producto puede estar agotado o no disponible
// mi programa debe permitirme elegir si quiero mostrar los productos Disponibles o agostados
// cada elemento del arreglo es un objeto :-) es decir lo que está en {}
var arreglo=[
    {nombre:"celular",marca:"Apple",color:"rojo",Precio:400, unidades:12},
    {nombre:"Laptop",marca:"Lenovo",color:"rojo",Precio:200, unidades:5},
    {nombre:"Parlante",marca:"JBS",color:"rojo",Precio:100, unidades:200},
    {nombre:"Mouse",marca:"Apple",color:"rojo",Precio:50, unidades:0},
    {nombre:"USB",marca:"Samsung",color:"rojo",Precio:60, unidades:0},
]
// esta funcion es para imprimir la pantalla por eso se pone console.log
//le estoy diciendo que esta haciendo pero no que lo haga
function consultarproductos(){
    for(var i=0;i<=arreglo.length;i++){
        console.log(arreglo[i])
    }
}
//aca vamos a decirle que lo haga
consultarproductos();
//funcion para agregar un nuevo producto solo le decimos como hacerlo pero no ejecutamos
function agregar(nuevoproducto){
    arreglo.push(nuevoproducto)
}
//agregamos el nnuevo producto llamando la función
agregar({nombre:"Audifonos",marca:"JBS",color:"Azul",Precio:150, unidades:8});
//para ver el que agregue
consultarproductos();


function mostrardisponibilidad(disponibilidad){
    if(disponibilidad=="disponible"){
        for(var i=0;i<arreglo.length;i++){
            
            const produnidades= arreglo[i].unidades;
            if (produnidades>0){
                console.log(arreglo[i]);
            }
        }
    }
}
mostrardisponibilidad("disponible");

