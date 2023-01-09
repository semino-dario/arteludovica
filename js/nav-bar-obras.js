let botonObras = document.querySelector(".boton-barra-obras");
let botonBarra2 = document.querySelector(".nav-boton");

function cambiaTexto(){
    botonObras.textContent = "X";
}

function cambiaTexto2(){
    botonObras.textContent = "+ obras";
}


function cambiaBoton(){

if (botonObras.textContent == "+ obras"){
    setTimeout(cambiaTexto, 50);
    }
    
    else{setTimeout(cambiaTexto2, 250);}
}

botonBarra2.addEventListener("click", cambiaBoton);