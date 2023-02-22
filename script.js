let menuVisible = false;
//Funcion que oculta el menú

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocultar el menú cada vez que seleccione un elemento de la nav
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
