
//PRELODER

let preloder = document.querySelector("#preloder");

window.addEventListener("load", function() {
  preloder.style.display = "none"
})

//TARJETAS

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", function() {
    this.classList.toggle("descubierta");
  });
});


//MÚSICA

let imagenDisco = document.querySelector(".imagen-disco");
let musica = document.querySelector(".div-musica");
let musicaContenido = document.querySelector(".musica-contenido");
let cierraMusica = document.querySelector("#cierra-musica");

function activarMusica (){
  imagenDisco.classList.add("girar")
  musicaContenido.style.opacity = 0;

  function abrirYoutube(){
  musicaContenido.style.display = "none";
  musica.style.display = "inline-block";

}

  setTimeout(abrirYoutube, 1000)
}

function cierraDivMusica(){
  musicaContenido.style.display = "flex";
  musicaContenido.style.opacity = 1;
  musica.style.display = "none";
  imagenDisco.classList.remove("girar")

}

musicaContenido.addEventListener("click", activarMusica);
cierraMusica.addEventListener("click", cierraDivMusica);

//DESCARGA DE TEXTOS

let botonDescarga = document.querySelector("#boton-descarga");
let botonCierraDescarga = document.querySelector("#boton-cierra-descarga");
let pdf = document.querySelectorAll(".pdf");
let botonesDescarga = document.querySelector(".div-boton-descarga");
let textosDescarga = document.querySelector(".textos-descarga");


pdf.forEach(function(item) {

  item.addEventListener("click", function() {
//Función para seleccionar texto a descargar

    if(this.classList.contains("selected")){
        cierraDescarga()
    }
    else{
      cierraDescarga()
      this.classList.add("selected");
      botonesDescarga.style.display = "block";
      botonesDescarga.style.opacity = 1;
      textosDescarga.style.borderWidth = 0;
    }

//Función para descargar el pdf
function descarga(){

let documento = document.createElement("a");
documento.target = "_blank";

if(pdf[0].classList.contains("selected")){
documento.href = "pdf/guerre.pdf";
}

else if (pdf[1].classList.contains("selected"))
{
  documento.href = "pdf/guignols.pdf"}

else if(pdf[2].classList.contains("selected"))

{documento.href = "pdf/subsidios.pdf"}

document.body.appendChild(documento);
documento.click();
document.body.removeChild(documento);
  }

//Función para cerrar tablero de descarga
function cierraDescarga(){
botonesDescarga.style.opacity = 0;
textosDescarga.style.borderBottomWidth = "1px";
pdf.forEach(function(item) {
item.classList.remove("selected")})

}
botonDescarga.addEventListener("click", descarga);
botonCierraDescarga.addEventListener("click", cierraDescarga)
})
})

///MUESTA TÍTULO Y SUBTÍTULOS AL CARGAR PÁGINA PRINCIPAL

let subtitulo = document.querySelector("#subtit");
let tituloPrincipal = document.querySelector("#titulo-principal");

function muestraTituloPrincipal (){tituloPrincipal.style.opacity = 1};

muestraTituloPrincipal()

function pintaSubtitulo (){subtitulo.style.fillOpacity = 1};
setTimeout(pintaSubtitulo, 4500);
