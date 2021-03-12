const producto1 = {
    precio: 20,
    nombre: 'Telefono A1',
    codigo: 'A1',
    marca: 'Xmarca',
    categoria: 'Tecnologia',
    color: 'rojo'
};

const producto2 = {
    precio: 40,
    nombre: 'Telefono M5',
    codigo: 'M5',
    marca: 'Ymarca',
    categoria: 'Tecnologia',
    color: 'Blanco'
}

const producto3 = {
    precio: 150,
    nombre: 'Telefono XN',
    codigo: 'A1',
    marca: 'Xmarca',
    categoria: 'Tecnologia',
    color: 'rojo'
};

const producto4 = {
    precio: 180,
    nombre: 'Telefono MG',
    codigo: 'M5',
    marca: 'Ymarca',
    categoria: 'Tecnologia',
    color: 'Blanco'
}


// se asigna la funcion
function registrarCompra(productoA, productoB){
    console.log(productoA);
    console.log(productoB);

    // proceso
    const precioA = productoA.precio;
    const precioB = productoB.precio;
    const suma = precioA + precioB;
    return suma;
}

// Se ejecuta la funcion
const totalDeCompra  = registrarCompra(producto1, producto2);
const totalDeCompra2  = registrarCompra(producto3, producto1);

console.log("el total de compra es:" + totalDeCompra);
console.log("el total de compra es:" + totalDeCompra2);

