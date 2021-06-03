function Playlist(cancion,autor,anio, nombreArchivo) {
    this.cancion = cancion
    this.autor = autor
    this.anio = anio
    this.nombreArchivo = nombreArchivo
}

var A = new Playlist("Brujula","Siddasrtha", 2021,"fantastico.mp3")
var B = new Playlist("Quedate","B&J", 2000,"mario-bros.mp3")
var C = new Playlist("Globos hola","TC", 2020,"Globos")
var D = new Playlist("Sin ti ","King", 1996,"SinTI")

var arrayPlayList  = [A,B,C,D]


// configuracion de la pagina. 
// Pintar elementos en el HTML

for ( var i= 0; i < arrayPlayList.length; i++) {
    
    var divPlaylist = document.createElement("span"); // <span> </span>
    var album = document.createTextNode(arrayPlayList[i].cancion); // Brujula
    divPlaylist.appendChild(album); // <p> Brujula </p>

    // separadaor 
    var br = document.createElement("br"); 

    // Agregar un boton 
    var botton = document.createElement("button");
    var titulo = document.createTextNode("mostrar cancion")
    botton.appendChild(titulo)
    botton.setAttribute("onClick", "showInfo(" + i + ")")
    botton.setAttribute("class","estiloBoton");

    document.getElementById("playList").appendChild(divPlaylist);
    document.getElementById("playList").appendChild(botton)
    document.getElementById("playList").appendChild(br)
}
function showInfo(track) {

        var div = document.createElement("div");
        div.setAttribute("id","info")
        document.getElementById("container").appendChild(div);
    
        var cancion = document.createElement("h2"); 
        var nombre = document.createTextNode(arrayPlayList[track].cancion);
        cancion.appendChild(nombre); 

        var autor = document.createElement("h4"); 
        var nombreAutor = document.createTextNode(arrayPlayList[track].autor); 
        autor.appendChild(nombreAutor); 

        var audio = document.createElement("audio");
        audio.setAttribute("src", arrayPlayList[track].nombreArchivo)
        //audio.setAttribute("autoplay", "autoplay")
        audio.setAttribute("controls", "controls")

        div.appendChild(cancion);
        div.appendChild(autor);
        div.appendChild(audio);

        clean()
}

function clean(){
    document.getElementById("info").remove()
}




