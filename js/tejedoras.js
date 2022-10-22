let imagenDiegoPistola = document.querySelector("#imagen-diego-pistola");
let luisinaFantasma = document.querySelector("#luisina-fantasma");
let caraFantasma = document.querySelector("#cara-fantasma");
let etiqueta = document.querySelectorAll(".etiqueta");



function muestraFantasmas(){
  imagenDiegoPistola.style.opacity = 0.3;
  luisinaFantasma.style.opacity = 0.2;
  caraFantasma.style.opacity = 0.3;

  giraOvillo()
}

setTimeout(muestraFantasmas, 500);

function activaFantasmas(){ imagenDiegoPistola.style.opacity = 0;
luisinaFantasma.style.opacity = 0;
caraFantasma.style.opacity = 0;
setTimeout(muestraFantasmas, 1000)

}

etiqueta.forEach((item) => {item.addEventListener("click", activaFantasmas)

});

let ovillo = document.querySelector("#ovillo7");
let ovillo2 = document.querySelector("#ovillo8");
let etiquetaHistoria = document.querySelector(".etiqueta-historia");
let etiquetaElenco = document.querySelector(".etiqueta-elenco");

function giraOvillo(){ovillo.classList.toggle("girar");
  ovillo2.classList.toggle("girar2")};
