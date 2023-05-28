let botonHamburguesa = document.getElementById("check");
let menu = document.querySelector(".menuDesplegable");
let cerrar = document.getElementById("cerrar");
let fondo = document.querySelector(".fondo");
fondo.addEventListener("click", cerrarMenu);
botonHamburguesa.addEventListener("click", desplegarMenu);
function desplegarMenu() {
    menu.style.setProperty("display", "flex");
    fondo.style.setProperty("display", "flex");
    window.setTimeout(function() {
        menu.style.right = 0;
    }, 100);
    cerrar.addEventListener("click", cerrarMenu);
}
function cerrarMenu() {
    window.setTimeout(function() {
        menu.style.setProperty("display", "none");
    }, 100);
    fondo.style.setProperty("display", "none");
    menu.style.right = "-70%";
}

//# sourceMappingURL=index.41b17edc.js.map
