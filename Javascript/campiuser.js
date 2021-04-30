function campiuser(){
    //questa funzione deve autocompilare i campi qualora fossero vuoti
    //quando lavori sugli input type devi usare il .value per accedere al campo testuale 

    var nome = document.getElementById("casellanome").value;
    if(nome.length==0){
        document.getElementById('casellanome').value= 'admin';
    }
    else {
        document.getElementById('casellanome').value= "altorve";
    }
}