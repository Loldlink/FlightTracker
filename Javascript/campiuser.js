function campiuser(){
    //questa funzione deve autocompilare i campi qualora fossero vuoti

    var nome=document.getElementById("casellanome");
    if(nome==""){
        document.getElementById('casellanome').innerHTML= admin;
    }
    else {
        document.getElementById('casellanome').innerHTML= "altorve";
    }
}