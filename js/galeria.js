// AMPLIA FOTOS

let fotos = document.querySelectorAll(".div-foto");
let botonCierraFoto = document.querySelector("#boton-cierra-foto");
let botonFotosAnterior = document.querySelector(".foto-anterior");
let botonFotosSiguiente = document.querySelector(".foto-siguiente");
let botonesFotos = document.querySelector(".botones-fotos");
let header = document.querySelectorAll(".header");

let fotoAmpliada


fotos.forEach((item) => {
item.addEventListener("click", function (){this.classList.add("ampliada");
botonesFotos.style.display = "block";

header.forEach((item) => {
  item.style.display = "none"
} )


fotoAmpliada = this.getAttribute("id");
for (var i = 0; i < fotos.length; i++) {



if ((fotos[i].classList.contains("ampliada") == false))
{fotos[i].style.display = "none";}

}
  })
    });



botonCierraFoto.addEventListener("click", function(){  fotos.forEach((item) => {
  item.style.display = "flex";
  item.classList.remove("ampliada");
  botonesFotos.style.display = "none";
  header.forEach((item) => {
    item.style.display = "block"
  } )

});
})

function fotoAnterior(){

  fotos[fotoAmpliada].classList.remove("ampliada");
  fotos[fotoAmpliada].style.display = "none";
  if(fotoAmpliada == 0){
    fotoAmpliada = fotos.length - 1;
  }
  fotos[fotoAmpliada - 1].style.display = "flex";
  fotos[fotoAmpliada - 1].classList.add("ampliada");

  fotoAmpliada--

}

function fotoSiguiente(){

  fotos[fotoAmpliada].classList.remove("ampliada");
  fotos[fotoAmpliada].style.display = "none";

  if (fotoAmpliada == fotos.length - 1){
    fotoAmpliada = - 1
  }

  fotos[fotoAmpliada - 1 + 2].style.display = "flex";
  fotos[fotoAmpliada -1 + 2].classList.add("ampliada");

  fotoAmpliada++



}

botonFotosAnterior.addEventListener("click", fotoAnterior);
botonFotosSiguiente.addEventListener("click", fotoSiguiente);
