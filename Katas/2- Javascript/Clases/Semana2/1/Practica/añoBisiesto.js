// listar todos los años bisiestos del año 1 al 2021

// Desde un enfoque algorítmico, el año bisiesto:
// Es divisible entre 4


// 2021 % 4 == 0  (es bisiesto)


for(var i = 1 ; i<=2021 ; i++) {
    const añoBisiesto = (i % 4);
    const esBisiesto = añoBisiesto === 0;
    if(esBisiesto) {
        console.log("El año " + i + " es bisiesto");
    }
}