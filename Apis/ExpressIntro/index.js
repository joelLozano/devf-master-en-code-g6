const express = require("express");
const app = express()

app.use(express.json());

const pokemon1 = {
    name: "pikachu",
    poder: "Elextricidad",
    colo: "amarillo"
}
const pokemon2 = {
    name: "Bolbasor",
    poder: "Planta",
    color: "verde"
}
const pokemon3 = {
    name: "Ivisor",
    poder: "Planta",
    color: "verde"
}
const pokemon4 = {
    name: "Eve",
    poder: "Planta",
    color: "verde"
}

const arrayPokemon = [pokemon1, pokemon2,pokemon3, pokemon4]

app.get('/pokemon/:id',  (request, response) => {
    console.log(arrayPokemon[request.params.id])
    response.send(arrayPokemon[request.params.id])
});

app.get('/pokemones',  (request, response) => {
    response.send(arrayPokemon);
});

app.post('/addPokemon', function(request, response){
    var nuevoPokemon = request.body
    console.log(nuevoPokemon)
    arrayPokemon.push(nuevoPokemon)
})

app.delete('/borrarAuto', function(request, response){
    arrayPokemon.pop()
    response.send({"message":"Listo, Elemento borrado"})
})

app.delete('/deletePokemon/:id', function(request, response){
    var id = request.params.id
    arrayPokemon.splice(id,1)
    response.send(arrayPokemon)
})

app.put('/updatePokemon', (request, response) => {
    var nuevoObjeto = request.body
    for( var i in arrayPokemon) {
        if (arrayPokemon[i].name == nuevoObjeto.name) {
            arrayPokemon[i]  = nuevoObjeto
            response.send(arrayPokemon[i])
        }
    }
    console.log(arrayPokemon)
})

app.listen(3000, () => {
    console.log("Servidor conectado en el puerto 3000")
} )




// 1.. npm init 
// 2.. instalamos una libreria que se llama Express.  npm install express --save
// 3.- Inicializar la libreria
// 4.- Crear nuestro servidor
// 5.- Nodemon - mantiene mi servidor escuchando. npm run dev 


// 1.- CRear su proyecto  ini , express , nodemon
// 2.- CRUD -create , read , Delete 
// Endpoint obtenga el objeto completo
// endpoint obtenga un objeto en especifico
// Endpoint Eliminar un objeto en especifico -- REgresar un mensaje Operacion OK
// endpoint para agrefar un elemento. ---  REgresar un mensaje Operacion OK