const express = require("express")
const port = 3000


const app = express()

app.use(express.json()); // reconocer los archivos que mandemos ( JSON )

var auto = {
    marca: "Ford",
    modelo: "Lobo"
}
var auto2 = {
    marca: "Ferrari",
    modelo: "F50"
}

var arregloAuto = [auto, auto2]

app.get("/saludo",(req, res) => {
    res.send("Hola, como estas?");
})

app.get("/obtenerAutos", (req, res) => {
    res.json(arregloAuto)
})

app.post("/agregarAuto", (req, res) => {
    const nuevoAuto = req.body
    arregloAuto.push(nuevoAuto)
    res.json({message: "Elemento Agregado"})
})

app.listen(port, () =>{
    console.log("Servidor corriendo en el puert " +port)
})