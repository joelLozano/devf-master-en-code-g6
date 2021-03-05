// Calcular el tota de la compra de tus 3 productos favoritos.
// Nombre del producto, cantidad, precio unitario, total.
// Calcular el total individual de cada producto 
// Calcular el total general.

// Balon , 3 piezas,  100 cada uno, el total es : 300;
// Videojuegos 3, 1500 , total =  3 *1500;
// Videojuegos 3, 1500 , total =  3 *1500;
// TOTAL = tanto…

// Tiendita
// Inicio
// Entradas/Definiciones
// 1.	Define producto1
// 2.	Define precioProducto1
// 3.	Define cantidadProducto1
// 4.	Define producto2
// 5.	Define precioProducto2
// 6.	Define cantidadProducto2
// 7.	Define producto3
// 8.	Define precioProducto3
// 9.	Define cantidadProducto3
// Proceso
// 10.	totalProducto1 = precioProducto1 * cantidadProducto1
// 11.	totalProducto2 = precioProducto12* cantidadProducto2
// 12.	totalProducto3= precioProducto3 * cantidadProducto3
// 13.	totalGeneral = totalProducto1 + totalProducto2 + totalProducto3
// salidas
// imprime producto1 + “, cantidad: ” + cantidadProducto1 + “, Precio unitatio: ” + precioProducto1  + “total: ” + totalProducto1;
// imprime producto2 + “, cantidad: ” + cantidadProducto2 + “, Precio unitatio: ” + precioProducto2  + “total: ” + totalProducto2;
// imprime producto3 + “, cantidad: ” + cantidadProducto3 + “, Precio unitatio: ” + precioProducto3  + “total: ” + totalProducto3;

// imprimir “total general: ” + totalGeneral
// Tiendita
// Inicio
// 1.	producto1 = “tele”
// 2.	precioProducto1 = 250
// 3.	cantidadProducto1 = 2
// 4.	producto2 = “compu”
// 5.	precioProducto2 = 450
// 6.	cantidadProducto2 = 1
// 7.	producto2 = “ipad”
// 8.	precioProducto2 = 3050
// 9.	cantidadProducto2 = 5
// 10.	totalProducto1 = 250 * 2
// 11.	totalProducto2 = 450 * 1
// 12.	totalProducto3 = 3050 * 5
// 13.	totalGeneral = 16200
// 14.	tele, cantidad: 3, precio unitatio: 250, total=500
// 15.	compu, cantidad: 1, precio unitatio: 450, total=450
// 16.	ipad, cantidad: 5, precio unitatio: 3050, total=15250
// 17.	total general: 16200

var  producto1 = 'sillon';
var precioProducto1 = 250;
var cantidadProducto1 = 2;

var  producto2 = 'mesa';
var precioProducto2 = 450;
var cantidadProducto2 = 1;

var  producto3 = 'ipad';
var precioProducto3 = 3050;
var cantidadProducto3 = 5;

var totalProducto1 = precioProducto1 * cantidadProducto1;
var totalProducto2 = precioProducto2 * cantidadProducto2;
var totalProducto3 = precioProducto3 * cantidadProducto3;
var totalGeneral = totalProducto1 + totalProducto2 + totalProducto3;

console.log(producto1 + ", cantidad:" + cantidadProducto1 + ", precio unitario:" + precioProducto1 + ", total: "  + totalProducto1);
console.log(producto2 + ", cantidad:" + cantidadProducto2 + ", precio unitario:" + precioProducto2 + ", total: "  + totalProducto2);
console.log(producto3 + ", cantidad:" + cantidadProducto3 + ", precio unitario:" + precioProducto3 + ", total: "  + totalProducto3);
console.log("total general: " + totalGeneral)