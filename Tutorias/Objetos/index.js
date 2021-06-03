const archivoJSon = require("./Autos.json");

app.get("/autos", (req,res,)=> {
    var nuevoArreglo = []
    for (var i = 0 ; i==10; i++) {

        var modelo = archivoJSon.autos[i].make
        var price = archivoJSon.autos[i].listPrice
        var performance = archivoJSon.autos[i].cityPerformance

        var newObject =  {
            modelo: modelo,
            precio: price,
            rendimineto: performance
        }
        nuevoArreglo.push(newObject)
    }
})

//console.log(autos.autos)

