$.ajax({url: "../Php/data.php",
        success: function(voli) {

            
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                var voli = JSON.parse(this.responseText);
                //document.getElementById("voli").innerHTML = voli.name;
                console.log("si");
            }};

            xmlhttp.open("GET", "../vatsim-data.json", true); //quel JSON andrebbe referenziato ad http ma le politiche CORS lo prevengono
            xmlhttp.send();                             //la cosa migliore sarebbe scaricarlo e poi leggerlo in locale, e poi refreshare tutto
            console.log("sono arrivato fino a qui")

            console.log(voli[2]) //CI STANNO PROBLEMI CON IL PARSING PERCHE'IL LOG RIESCE A LEGGERE DAL FILE MA NON CAPISCE CHE è UN ARRAY

            var voli = JSON.parse(voli); //faccio il parsing del file json con tutti i dati
            var markers = []; //array per permettere la creazione di multivariabili

                for (var i = 0; i < 10; ++i) { //ciclo nell'array di variabili 10 volte
                   // console.log(voli[1].pilots[i].latitude);

                   // markers[i] = L.marker([voli[1].pilots[i].latitude, voli[1].pilots[i].latitude], {icon: aereoicona}).addTo(map).bindPopup(voli[1].pilots[i].name);
                    } //IMPORTANTE: l'unica cosa che manca è importare i dati dal JSON, mettendoli al posto di [10+i*2, 20+i*3]
                    //ad ogni ciclo sostanzialmente creo una variabile con seguente sintassi: NOMEVARIABILE = L.marker(longitudine, latitudine) icona e la aggiungo alla mappa
            }

            // la chiamata/struttura del JSON dovrebbe essere: pilots > numeroposizione array >latitudine/longitudine

            
            }, 10000); //timer di update per fare il testing ogni 10 secondi, ma tanto non funziona perchè ancora non c'è niente di dinamico SAD
           // 