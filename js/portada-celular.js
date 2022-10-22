//OCULTA Y MUESTRA GALERIA PRINCIPAL EN CELULAR

let galeriaCelular = document.querySelector("#galeria-principal-celular");

let etiquetasCelular = document.querySelectorAll(".etiqueta-celular");

etiquetasCelular.forEach((item) => {item.addEventListener("click", function(){

    if (this.classList.contains("seleccionada")) {
      galeriaCelular.style.display = "none"
    }

    else{galeriaCelular.style.display = "block"}

  })

});
