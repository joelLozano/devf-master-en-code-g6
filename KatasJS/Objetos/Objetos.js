// Objetos
// tipos de datos , number, String , booleans , Objetos

// Existen 3 formas de declarar un objeto 
// tiene la caracteristica de tener propiedades o argumentos

var nombreObjeto = new Object(); // primera forma

var planta = new Object(); // declaro el objeto
planta.nombre = "palmera"; // le doy un valor mediante el operador punto y su caracteristica
planta.tipo = "interiores / sombra";
planta.color = "verde" ; 
//console.log(planta.nombre);

// segunda forma de declarar un Objeto

var Audi = {
    nombre: "Audicito",
    marca: "Audi",
    modelo: 2020,
    color: "Rojo",
    cilindros: 4
}
// console.log(Auto.modelo)
// Tercera forma de declar un Objeto 

function Album(nombre, numTraks, autor, anio, cantante,letra) { // declaracion de Objeto
this.nombre = nombre
this.numTraks = numTraks
this.autor = autor
this.anio = anio
this.cantante = cantante
this.letra = letra

this.mostrarLetra = function () {
      return this.letra
}

this.mostrarDuracion = function () {
    return this.numTraks * 3
}

} // cierra el Objeto 

var blackAlbum = new Album("Black",2,"jj",2000,"sdfg","po po po po ")
var rosaPastel = new Album("Rosa Pastel",2,"jj",2000,"sdfg","po po po po ")
var discovery = new Album("Discovery", 13, "Daft Punk", 1980,"NA"," lalala lalala ")
var fuego = new Album("Fuego", 15, "Inspector", 1990,"DJ","xxxxx xxxxx xxx")
var agua = new Album("agua", 35, "Jarabe de palo", 1990,"Pau dones"," la lalaaaaa")

var paraTrabajar = [blackAlbum, rosaPastel,discovery,fuego] // playList
                    0 ,1,2,3,4  // las posiciones del arreglo empiezan desde 0 (cero)
    // variable inicializador ; limite / condicion; contador 
for (var i = 0; i < paraTrabajar.length; i++) {
    if (i === 2) {
        console.log(paraTrabajar[i].autor)
    }
}
console.log(paraTrabajar[2].autor)
paraTrabajar.push(agua) // Agrega un nuevo elemento al arreglo




// console.log(blackAlbum.nombre)
 //console.log(rosaPastel.mostrarLetra())
// console.log(discovery.mostrarLetra())
// console.log(discovery.mostrarDuracion())


