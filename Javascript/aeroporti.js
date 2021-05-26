$.ajax({url: "../Php/dataAeroporti.php",
        success: function(data) {

            var aeroporti = JSON.parse(data); //faccio il parsing del file json con tutti i dati


                    for (var i = 0 < aeroporti.lenght(); i++) {


                        /*la logica di questa sezione è: quando l'utente submitta il piano di volo, nella pagina miei voli accanto al codice aeroporto di partenza
                        si dovrebbe vedere il NOME della'aeroporto
                        la funzione guarda il primo campo del json in dataAeroporti.php, se trova la corrispondenza con il campo allora aggiunge tra parentesi
                        il nome dell'aeroporto (nella variabile codice)
                        
                        stesso discorso su quello di arrivo

                        si potrebbero mettere controlli tipo che quello di partenza e destinazione non siano uguali
                        ALTRIMENTI il ciclo continua finchè non si scorre tutto il json con i dati

                        bisogna capire solo quanto ci vuole a fare tutta questa cosa
                        */

                        var codice =aeroporti [i]['iata_code'];
                        if (codice == document.getElementById("aeroportopartenza").value) {
                            //onestamente non so bene come linkare tutti i file tra di loro. 
                            //come mi riferisco al campo del ajaxTable.js?
                            document.getElementById('aeroportopartenza').value = "("+codice+")";
                            break;
                        }
                        else if (codice == document.getElementById("aeroportodestinazione").value) {
                            document.getElementById("aeroportodestinazione").value= "("+codice+")";
                            break;
                        }

                        else {
                            continue;
                        }
                    }
                    


                    //tecnicamente quando un utente va a vedere il volo che ha inserito nel piano di volo, accanto al codice dovrebbe comparire il nome dell'aeroporto


                    });
        
                }
            } 
        }
});
