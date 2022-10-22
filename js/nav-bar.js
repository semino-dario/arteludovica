//BARRA DE NAVEGACIÓN

let botonBarra = document.querySelector(".nav-boton");
let elementosBarra = document.querySelector(".barra-elementos");
let itemsBarra = document.querySelectorAll(".items-barra");
let iconoBarra = document.querySelector(".icono-triangulo");

function activaBarra(){
elementosBarra.classList.toggle("desplegada");
iconoBarra.classList.toggle("girar-icono");

itemsBarra.forEach((item) => {

  if(elementosBarra.classList.contains("desplegada")){
  item.classList.remove("muestra-items-2");
  item.classList.add("muestra-items");
}
  else{
    item.classList.remove("muestra-item");
    item.classList.add("muestra-items-2")}
});

}

itemsBarra.forEach((item) => {
  item.addEventListener("click", activaBarra)
});


botonBarra.addEventListener("click", activaBarra)
