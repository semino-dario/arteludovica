/////////////////////MUSICA DE OFICINAS////////////////////////////

///SLIDE - MUSICA DE OFICINAS/////////

let criticas = document.querySelectorAll(".critica");
let botonSiguiente = document.querySelector(".critica-siguiente");
let botonAnterior = document.querySelector(".critica-anterior");
let acumuladora = 0;
let intervalo


function opacidad(div) {div.style.opacity = 1}

function pasaCritica(texto){ //PASA A LA CRÍTICA SIGUIENTE

  if(acumuladora > texto.length - 1){
    acumuladora = 0;
  }

  for(let i=0;i<texto.length;i++){
      texto[i].style.opacity = 0;
      texto[i].style.display = "none";

    }
      texto[acumuladora].style.display = "block";
      let ab = texto[acumuladora]

      function quitarOpacidadCritica(){ab.style.opacity = 1;}
      setTimeout(quitarOpacidadCritica, 20);

      acumuladora++;
    }

function criticaSiguiente(){ //PASA A LA CRÍTICA SIGUIENTE Y RESETEA INTERVALO
  pasaCritica(criticas);
  fijaIntervalo();
}


function retrocedeCritica(texto2){
 if (acumuladora < 2){
  acumuladora = texto2.length + 1;
}

 for(let i=0;i<texto2.length;i++){
    texto2[i].style.opacity = 0;
    texto2[i].style.display = "none";
  }
    acumuladora = acumuladora - 1
    texto2[acumuladora - 1].style.display = "block";
    let ad = texto2[acumuladora - 1]

    function quitarOpacidadCritica(){ad.style.opacity = 1;}
    setTimeout(quitarOpacidadCritica, 20);

}

function criticaAnterior() { // PASA A LA CRÍTICA ANTERIOR Y RESETEA INTERVALO
    retrocedeCritica(criticas)
    fijaIntervalo();
}

setTimeout(criticaSiguiente, 5);// inicializa slide en la primera crítica cuando se carga la página

function intervaloCritica() {pasaCritica(criticas)}

function fijaIntervalo(){
  detenerSlide();
  intervalo = setInterval(intervaloCritica, 8000);
}

function detenerSlide(){
  clearInterval(intervalo);
  }

botonSiguiente.addEventListener("mouseover", detenerSlide);
botonSiguiente.addEventListener("mouseout", fijaIntervalo);
botonSiguiente.addEventListener("click", criticaSiguiente);
botonAnterior.addEventListener("mouseover", detenerSlide);
botonAnterior.addEventListener("mouseout", fijaIntervalo);
botonAnterior.addEventListener("click", criticaAnterior);

////////ABRE TEXTO COMPLETO DE LAS CRÍTICAS////////

let verTextoCompleto = document.querySelectorAll(".ver-texto-completo");
let textoCriticaCompleta = document.querySelectorAll(".texto-critica-completa");
let contenedorCriticasCompletas = document.querySelector(".criticas-completas");
let botonCierraCriticas = document.querySelector("#boton-cierra-criticas");
let indice

function quitarOpacidadContenedor(){opacidad(contenedorCriticasCompletas)}

function quitarOpacidadCriticas(){opacidad(criticas)}

verTextoCompleto.forEach((item) => {item.addEventListener("click", function (){

  indice = this.getAttribute("id");

  for (i=0;i<textoCriticaCompleta.length;i++){
    contenedorCriticasCompletas.style.display = "block";
    textoCriticaCompleta[i].style.display = "none";
    textoCriticaCompleta[indice].style.display = "block";
    setTimeout(quitarOpacidadContenedor, 20);
    detenerSlide();
  }
  } )
});

botonCierraCriticas.addEventListener("click", function (){contenedorCriticasCompletas.style.opacity = 0; contenedorCriticasCompletas.style.display = "none";
textoCriticaCompleta[indice].style.display = "none";})
