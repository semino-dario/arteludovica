/////ABRE Y CIERRA GALERIA PRINCIPAL DE LAS OBRAS//////////

///////FUNCIONES DE LAS ETIQUETAS////////
let seccionGaleria = document.querySelector("#galeria-principal");
let seccionesDesplegadas = document.querySelectorAll(".secciones-desplegadas");
let botonCierre = document.querySelectorAll(".boton-cierra-seccion");
let secciones = document.querySelectorAll(".etiqueta");
let index;

secciones.forEach((item) => {
  item.addEventListener("click", function () {
    index = this.getAttribute("id");

    if (this.classList.contains("seleccionada")) {
      cierraSecciones();
      cierraseccionesDesplegadas();
    } else {
      cierraSecciones();
      cierraseccionesDesplegadas();
      this.classList.add("seleccionada");

      seccionGaleria.style.opacity = 0;

      function bloqueaGaleria() {
        seccionGaleria.style.display = "none";
        seccionesDesplegadas[index].style.display = "block";
      }

      setTimeout(bloqueaGaleria, 600);

      function muestraSeccion() {
        for (i = 0; i < seccionesDesplegadas.length; i++) {
          seccionesDesplegadas[index].style.opacity = 1;
        }
      }
      setTimeout(muestraSeccion, 650);
    }
  });
});

function cierraSecciones() {
  secciones.forEach((item) => {
    item.classList.remove("seleccionada");
  });
}

function cierraseccionesDesplegadas() {
  seccionesDesplegadas.forEach((item) => {
    item.style.opacity = 0;
  });

  function bloqueaSeccion() {
    seccionesDesplegadas.forEach((item) => {
      item.style.display = "none";
      seccionGaleria.style.display = "block";
    });
  }

  setTimeout(bloqueaSeccion, 500);

  function muestraGaleria() {
    seccionGaleria.style.opacity = 1;
  }

  setTimeout(muestraGaleria, 800);

  cierraSecciones();
}

botonCierre.forEach((item) => {
  item.addEventListener("click", cierraseccionesDesplegadas);
});
