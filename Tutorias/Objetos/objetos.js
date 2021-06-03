// primera forma 

// var coche = {
//     marca : "Acura",
//     modelo : "ILX",
//     puertas : 4,
// }

// var relojCitizen = {
//     marca: "Citizen",
//     modelo: "Eco-drive",
//     color: "azul"
// }
// var relojInvicta = {
//     marca: "Invicta",
//     modelo: "Aviator",
//     color: "Dorado"
// }

// console.log(relojCitizen.color)
// console.log(relojInvicta.modelo)


// var arrayReloj = [relojCitizen, relojInvicta]


// console.log(arrayReloj[0].color)
// console.log(arrayReloj[1].modelo)

// for (var i =0; i< arrayReloj.length; i++) {
//     console.log(arrayReloj[i].color)
// }

// console.log(coche) // imprime todo el objeto
// console.log(coche.modelo) // imprime ACURA 




// 2 Segunda forma :

function Auto(marca,modelo,color,cilindros,pasajeros){
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.cilindros = cilindros
    this.pasajeros = pasajeros

    this.mostrarDatos = function() {
        return "Este es un auto modelo:"+ this.marca + "modelo : "+ this.modelo
    }
}

var acura = new Auto("acura,","ILX","rojo",4,5)
var golf = new Auto("vw,","golf","verde",4,5)
var tesla = new Auto("tesla,","sp500","azul",4,5)

console.log(acura.modelo) // Acura
console.log(acura.mostrarDatos()) //  "Este es un auto modelo: acura modelo : ILX

var auto = {
    marca: "tesla",
    modelo: "sp100",
    pila: {
        tipo: {
            marca: "alcalina",
            modelo : "sdfdsfsf"
        },
        volts: 120,
        kw: 1234
    }
}
console.log(auto.pila.tipo.marca)