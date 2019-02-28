function clickInicio() {
    //Mostrar la pagina correspondiente
    document.getElementById("inicio").style.display = "grid";
    document.getElementById("bio").style.display = "none";
    document.getElementById("canciones").style.display = "none";
    //Resaltar el boton del menu activo
    document.getElementById("btnInicio").style.backgroundColor = "rgba(190, 119, 119, 0.9)";
    document.getElementById("btnBio").style.backgroundColor = "black";
    document.getElementById("btnCanciones").style.backgroundColor = "black";
}
function clickBio() {
    //Mostrar la pagina correspondiente
    document.getElementById("bio").style.display = "grid";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("canciones").style.display = "none";
    //Resaltar el boton del menu activo
    document.getElementById("btnBio").style.backgroundColor = "rgba(190, 119, 119, 0.9)";
    document.getElementById("btnInicio").style.backgroundColor = "black";
    document.getElementById("btnCanciones").style.backgroundColor = "black";
}
function clickCanciones() {
    //Mostrar la pagina correspondiente
    document.getElementById("canciones").style.display = "grid";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("bio").style.display = "none";
    //Resaltar el boton del menu activo
    document.getElementById("btnCanciones").style.backgroundColor = "rgba(190, 119, 119, 0.9)";
    document.getElementById("btnBio").style.backgroundColor = "black";
    document.getElementById("btnInicio").style.backgroundColor = "black";
}
