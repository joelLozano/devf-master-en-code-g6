//  CICLO FOR

// i        i<5     autos[i]            i++
// 0        SI      autos[0] = Audi     1
// 1        SI      autos[1] = tesla    2
// 2        SI      autos[2] = ford     3

let autos = ["Audi","tesla","ford","Kia", "Nissan"];

for(var i = 0; i < autos.length; i++ ) {
    console.log('Este auto es de la marca: ' + autos[i]);
}
