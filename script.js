let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

iniciarJuego()

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById("selectionarAtaque")
    sectionSeleccionarAtaque.style.display = "none"

    let bontMascotaJugador = document.getElementById("botonMascota");
    bontMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let sectionReset = document.getElementById("reiniciar")
    sectionReset.style.display = "none"

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("botonAgua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("botonTierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("botonReset")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById("selectionarAtaque")
    sectionSeleccionarAtaque.style.display = "block"

    let sectionSeleccionarMascota = document.getElementById("seleccionarMascotas")
    sectionSeleccionarMascota.style.display = "none"

    let spanMascotaJugador = document.getElementById("mascotaJugador")

    if (document.getElementById("hipodoge").checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if(document.getElementById("capipepo").checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if(document.getElementById("ratigueya").checked){
        spanMascotaJugador.innerHTML = "ratigueya"
    }else {
        alert("seleccionar mascota")
    }
    
    seleccionarMacotaEnemigo()
}

function seleccionarMacotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = ("Tu Mascota Ataco " + ataqueJugador + ", la mascota del enemigo ataco con "+ ataqueEnemigo+ "--" + resultado )

    sectionMensajes.appendChild(parrafo)
}

function combate(){
    let spanVidasJugador = document.getElementById("vidasJugador") 
    let spanVidasEnemigo = document.getElementById("vidasEnemigo")

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate")
    }else if((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {  
        crearMensaje(" Perdiste!")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("botonAgua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("botonTierra")
    botonTierra.disabled = true

    let sectionReset = document.getElementById("reiniciar")
    sectionReset.style.display = "block"
}


function revisarVidas(){
    

    if(vidasEnemigo == 0){
         crearMensajeFinal("felicitaciones Ganaste")
    }else if(vidasJugador == 0){
        crearMensajeFinal("perdiste paju")
}



}

function reiniciarJuego(){
    location.reload()
}

