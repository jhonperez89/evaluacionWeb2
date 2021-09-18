let uri="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";
//TOKET PETICION
let token=" Bearer BQDP73pey5NCaQrYZzf_oJDP3lEtvHWZnZQTmcxKwX5aLjaWe5ixduQLiBm1GIv21ROWuI1NTycWkiO4qVQqXJnX79004j0Dkk2yWpKh40zOrDeOIPYgavcQOa1lpPiyo9jdG5Igx4c3wlyXmoZRzceFOoylR84";
//CADA LLAVE SON CABESERAS GET => METODO
let PrarametrosPeticion={
method:"GET", 

//Crear Otro Objeto 
    headers: {
        Authorization: token
    }
}
//fetch es un metodo y esta es una funsion de como hacer una promesa es para buscar 
    fetch(uri,PrarametrosPeticion)
    .then(function(respuesta){
        return(respuesta.json());
    })
    .then(function(respuesta){
        console.log(respuesta);
        pintarDatos(respuesta.tracks);
      
    })
    .catch(function(error){
        console.log(error)
    })

    function pintarDatos(datos){
        let fila= document.getElementById("fila");
        datos.forEach(function(cancion){
            let columna=document.createElement("profile-main-proyects");
            columna.classList.add("col");

            let tarjeta =document.createElement("profile-main-proyects");
            tarjeta.classList.add("profile-main-proyects");
            tarjeta.classList.add("profile-main-proyects");

            let imagen = document.createElement("img");
            imagen.classList.add("profile-main-proyects");
            imagen.src=cancion.album.images[0].url;

            let titulo = document.createElement("h3");
            titulo.textContent=cancion.name;




            //CREO AUDIO

            let audio=document.createElement("audio");
            audio.classList.add("w-100");
            audio.setAttribute("controls","controls");
            audio.src=cancion.preview_url;

            // padres e hijos 
            
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(audio);
            tarjeta.appendChild(titulo);
            columna.appendChild(tarjeta);
            fila.appendChild(columna);

        })
            
           
    }