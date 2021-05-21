var markers = []; //array per permettere la creazione di multivariabili
var array = [];

$.ajax({url: "../Php/data.php",
        success: function(data) {

          var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati
          

          for (var i = 0; i < 100; ++i) { 

            var latitudine = voli['pilots'][i]['latitude'];
            var longitudine = voli['pilots'][i]['longitude'];
            var nomepilota = voli['pilots'][i]['name'];
            var direzione = voli['pilots'][i]['heading'];
            var altitudine = voli['pilots'][i]['altitude'];

            var aereoicona = L.icon({
                iconUrl: "../Immagini/airplane-mode.png",
                iconSize:     [15, 15], //dimensione dell'iconcina 
                iconAnchor:   [2, 2], // punto dell'icona che corrisponde a dove effettivamente si trova il marker
                className: i+1, //nome della classe per accedere all'icona
              });

            //Riga per aggiungere aereo alla mappa
            markers[i] = L.marker([latitudine, longitudine], {icon: aereoicona}).addTo(map).bindPopup(nomepilota + "   "+altitudine+"ft");
            
            //prendo nel dom lo stile transform che ha come classe l'inidice i+1 aggiungendo la rotazione e lo salvo in css
            var css = document.getElementsByClassName(i+1)[0].style.transform+' rotate('+direzione+'deg)'; 
            //sovrascrivo lo stile transform con css per avere tutto senza perdere informazioni
            document.getElementsByClassName(i+1)[0].style.transform = css;
        } 
        }
});

//funzione che fa l'update della posizione delle icone

setInterval(function() {
    $.ajax({url: "../Php/data.php",
    success: function(data) {
        var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati

        for (var i = 0; i < 100; ++i) { 

            var latitudine = voli['pilots'][i]['latitude'];
            var longitudine = voli['pilots'][i]['longitude'];
            var nomepilota = voli['pilots'][i]['name'];
            var altitudine = voli['pilots'][i]['altitude'];
            var direzione = voli['pilots'][i]['heading'];

            //Riga per fare l'update dell'icona
            var newLatLng = [latitudine, longitudine];
            markers[i].setLatLng(newLatLng); //setta lat e lng 
            markers[i].setPopupContent(nomepilota + "   "+altitudine+"ft"); //update del popup
        } 
    }
    });
}, 60000); 

//funzione che fa l'update della rotazione delle icone

setInterval(function() {
    $.ajax({url: "../Php/data.php",
    success: function(data) {
        var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati

        for (var i = 0; i < 100; ++i) { 

            var direzione = voli['pilots'][i]['heading'];

            //prendo nel dom lo stile transform che ha come classe l'inidice i+1 aggiungendo la rotazione e lo salvo in css
            var css = document.getElementsByClassName(i+1)[0].style.transform.split(')')[0]+')'+' rotate('+direzione+'deg)'; 
            //sovrascrivo lo stile transform con css per avere tutto senza perdere informazioni
            document.getElementsByClassName(i+1)[0].style.transform = css;
        } 
    }
    });
}, 800); 