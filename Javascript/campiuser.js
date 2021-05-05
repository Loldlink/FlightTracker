function campiuser(){
    //questa funzione deve autocompilare i campi qualora fossero vuoti
    //quando lavori sugli input type devi usare il .value per accedere al campo testuale 

    var nome = document.getElementById("casellanome").value;
        if(nome.length==0){
            //se il campo è vuoto allora la funzione lo deve compilare con dei dati (idealmente quelli dell'utente)
            document.getElementById('casellanome').value= 'admin';
        }
        else {
            //se il campo non è vuoto, allora la funzione deve rimettere il valore che già c'era
            document.getElementById('casellanome').value= getElementById("casellanome");
        }

//COGNOME
    var cognome = document.getElementById("casellacognome").value;
        if(cognome.lenght==0){
            document.getElementById("casellacognome").value = "cognomeadmin";
        }
        else {
            document.getElementById("casellacognome").value = getElementById("casellacognome");
            }
//TELEFONO
    var telefono = document.getElementById("casellatelefono").value;
        if(telefono.lenght== 0) {
                document.getElementById("casellatelefono").value = "3479803219";
            }
            //else if(telefono.lenght > 0) and (telefono.lenght <10){
              //  alert("Inserisci un numero di telefono valido!");
            else {
                document.getElementById("casellatelefono").value = getElementById("casellatelefono");
            }       
 
//INDIRIZZO
    var indirizzo = document.getElementById("casellaindirizzo").value;
        if(cognome.lenght==0){
          document.getElementById("casellaindirizzo").value = "Via Linguaggi e tecnologie per il webbe 30";
        }
        else {
          document.getElementById("casellaindirizzo").value = getElementById("casellaindirizzo");
        }
    

//CAP
    var cap = document.getElementById("casellacap").value;
        if(cognome.lenght==0){
            document.getElementById("casellacap").value = "00181";
        }
        else {
            document.getElementById("casellacap").value = getElementById("casellacap");
            }

//CITTA'
     var citta = document.getElementById("casellacitta").value;
        if(cognome.lenght==0){
           document.getElementById("casellacitta").value = "Roma";
            }
        else {
           document.getElementById("casellacitta").value = getElementById("casellacitta");
            }
    

//REGIONE
    var regione = document.getElementById("casellaregione").value;
        if(cognome.lenght==0){
            document.getElementById("casellaregione").value = "Lazio";
            }
        else {
            document.getElementById("casellaregione").value = getElementById("casellaregione");
             }
    


//PAESE
    var paese = document.getElementById("casellapaese").value;
        if(cognome.lenght==0){
            document.getElementById("casellapaese").value = "Italia";
         }
         else {
        document.getElementById("casellapaese").value = getElementById("casellapaese");
                 }



//ORE DI VOLO LOGGATE
    var ore = document.getElementById("casellaore").value;
        if(cognome.lenght==0){
            document.getElementById("casellaore").value = "0";
            }
        else {
            document.getElementById("casellaore").value = getElementById("casellaore");
            }

        
}

//NON E' ANCORA FINITA, LA FUNZIONE VA TESTATA E RITOCCATA UN PO'