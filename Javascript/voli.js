$.ajax({url: "../Php/data.php",
        success: function(voli) {

            voli = JSON.parse(voli); //faccio il parsing del file json con tutti i dati
            var contatore = 0; //contatore per decidere quanti markers vorrò
            var markers = []; //array per permettere la creazione di multivariabili
                for (var i = 0; i < 10; ++i) { //ciclo nell'array di variabili 10 volte

                    markers[i] = L.marker([10+i*2, 20+i*3], {icon: aereoicona}).addTo(map).bindPopup("NOMEPILOTA preso dal file json");
                    } //IMPORTANTE: l'unica cosa che manca è importare i dati dal JSON, mettendoli al posto di [10+i*2, 20+i*3]
                    //ad ogni ciclo sostanzialmente creo una variabile con seguente sintassi: NOMEVARIABILE = L.marker(longitudine, latitudine) icona e la aggiungo alla mappa
            }

            // la chiamata/struttura del JSON dovrebbe essere: pilots > numeroposizione array >latitudine/longitudine

            
            }, 10000); //timer di update per fare il testing ogni 10 secondi, ma tanto non funziona perchè ancora non c'è niente di dinamico SAD
            