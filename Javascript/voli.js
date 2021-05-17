$.ajax({url: "../Php/data.php",
        success: function(data) {
          var aereoicona = L.icon({
              iconUrl: "../Immagini/airplane-mode.png",
              iconSize:     [15, 15], //dimensione dell'iconcina 
              iconAnchor:   [2, 2], // punto dell'icona che corrisponde a dove effettivamente si trova il marker
            });

          var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati
        
          var markers = []; //array per permettere la creazione di multivariabili

          for (var i = 0; i < 100; ++i) { //ciclo nell'array di variabili N volte

              console.log("Numero aereo: " + i);

              var latitudine = voli['pilots'][i]['latitude'];
              var longitudine = voli['pilots'][i]['longitude'];
              var nomepilota = voli['pilots'][i]['name'];

              /*
              console.log("Dati Aereo")
              console.log("Latitudine" + latitudine);
              console.log("Longitudine" + longitudine);
              console.log("Nome Pilota:" + nomepilota);
              console.log("FINE Dati Aereo \n");
              */

              //Riga per aggiungere aereo alla mappa
              markers[i] = L.marker([latitudine, longitudine], {icon: aereoicona}).addTo(map).bindPopup(nomepilota);

            } 
        }
});

//funzione che fa l'update, l'avevi scritta male

setInterval(function() {
  $.ajax({url: "../Php/data.php",
  success: function(data) {
    var aereoicona = L.icon({
        iconUrl: "../Immagini/airplane-mode.png",
        iconSize:     [15, 15], //dimensione dell'iconcina 
        iconAnchor:   [2, 2], // punto dell'icona che corrisponde a dove effettivamente si trova il marker
      });

    var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati
  
    var markers = []; //array per permettere la creazione di multivariabili

    console.log("Update aerei");

    for (var i = 0; i < 100; ++i) { //ciclo nell'array di variabili N volte



        var latitudine = voli['pilots'][i]['latitude'];
        var longitudine = voli['pilots'][i]['longitude'];
        var nomepilota = voli['pilots'][i]['name'];

        /*
        console.log("Dati Aereo")
        console.log("Latitudine" + latitudine);
        console.log("Longitudine" + longitudine);
        console.log("Nome Pilota:" + nomepilota);
        console.log("FINE Dati Aereo \n");
        */

        //Riga per aggiungere aereo alla mappa
        markers[i] = L.marker([latitudine, longitudine], {icon: aereoicona}).addTo(map).bindPopup(nomepilota);

      } 
  }
});
}, 60000);