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