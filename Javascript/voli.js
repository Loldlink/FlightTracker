var markers = []; //array per salvarsi tutti i marker
var nomepartenza;
var nomearrivo;

//script che inizializza le icone e relative informazioni


$.ajax({url: "../Php/data.php",
        success: function(data) {

            var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati
          

            for (var i = 0; i < 75; ++i) { 

                var pianovolo = voli['pilots'][i]['flight_plan'];

                if(pianovolo!=null){    //controllo sul piano di volo esistente
                    
                    var latitudine = voli['pilots'][i]['latitude'];
                    var longitudine = voli['pilots'][i]['longitude'];
                    var nomepilota = voli['pilots'][i]['name'];
                    var direzione = voli['pilots'][i]['heading'];
                    var altitudine = voli['pilots'][i]['altitude'];
                    var iatapartenza = voli['pilots'][i]['flight_plan']['departure'];
                    var iataarrivo = voli['pilots'][i]['flight_plan']['arrival'];
                    var aereoicona = L.icon({
                        iconUrl: "../Immagini/airplane-mode.png",
                        iconSize:     [15, 15], //dimensione dell'iconcina 
                        iconAnchor:   [2, 2], // punto dell'icona che corrisponde a dove effettivamente si trova il marker
                        className: i+1, //nome della classe per accedere all'icona
                    });

        
                    //Riga per aggiungere aereo alla mappa

                    markers[i] = L.marker([latitudine, longitudine], {icon: aereoicona}).addTo(map);

                    $(document.getElementsByClassName(i+1)[0]).bind('click',
                    {nomepilota:nomepilota,partenza:iatapartenza,arrivo:iataarrivo,altitudine:altitudine,direzione:direzione},
                    function(event){click(event.data.nomepilota,event.data.partenza,event.data.arrivo,event.data.altitudine,event.data.direzione)});

                    //prendo nel dom lo stile transform che ha come classe l'inidice i+1 aggiungendo la rotazione e lo salvo in css
                    var css = document.getElementsByClassName(i+1)[0].style.transform+' rotate('+direzione+'deg)'; 
                    //sovrascrivo lo stile transform con css per avere tutto senza perdere informazioni
                    document.getElementsByClassName(i+1)[0].style.transform = css;
                }
            } 
        }
});


//funzione che fa l'update della posizione delle icone

setInterval(function() {
    $.ajax({url: "../Php/data.php",
            success: function(data) {
                var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati

                for (var i = 0; i < 75; ++i) { 

                    var pianovolo = voli['pilots'][i]['flight_plan'];

                    if(pianovolo!=null){    //controllo sul piano di volo esistente

                        var latitudine = voli['pilots'][i]['latitude'];
                        var longitudine = voli['pilots'][i]['longitude'];
                        var nomepilota = voli['pilots'][i]['name'];
                        var direzione = voli['pilots'][i]['heading'];
                        var altitudine = voli['pilots'][i]['altitude'];
                        var partenza = voli['pilots'][i]['flight_plan']['departure'];
                        var arrivo = voli['pilots'][i]['flight_plan']['arrival'];
            
                        //Riga per fare l'update dell'icona
                        var newLatLng = [latitudine, longitudine];
                        markers[i].setLatLng(newLatLng); //setta lat e lng 
                        
                        $(document.getElementsByClassName(i+1)[0]).bind('click',
                        {nomepilota:nomepilota,partenza:partenza,arrivo:arrivo,altitudine:altitudine,direzione:direzione},
                        function(event){click(event.data.nomepilota,event.data.partenza,event.data.arrivo,event.data.altitudine,event.data.direzione)});
                    }
                } 
            }
    });
}, 60000); 


//funzione che fa l'update della rotazione delle icone

setInterval(function() {
    $.ajax({url: "../Php/data.php",
            success: function(data) {
                var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati

                for (var i = 0; i < 75; ++i) { 

                    var pianovolo = voli['pilots'][i]['flight_plan'];

                    if(pianovolo!=null){    //controllo sul piano di volo esistente

                        var direzione = voli['pilots'][i]['heading'];

                        //prendo nel dom lo stile transform che ha come classe l'inidice i+1 aggiungendo la rotazione e lo salvo in css
                        var css = document.getElementsByClassName(i+1)[0].style.transform.split(')')[0]+')'+' rotate('+direzione+'deg)'; 
                        //sovrascrivo lo stile transform con css per avere tutto senza perdere informazioni
                        document.getElementsByClassName(i+1)[0].style.transform = css;
                    }
                } 
            }
    });
}, 2000); 


//funzione che setta il popup delle informazioni

function click(pilota,partenza,arrivo,altitudine,direzione) {
    //nomeAereoporto(partenza,arrivo);
    document.getElementById('partenza').innerHTML = partenza ; 
    document.getElementById('arrivo').innerHTML = arrivo ;
    document.getElementById('direzione').innerHTML = direzione+'°' ;
    document.getElementById('pilota').innerHTML = pilota.split(' ')[0]+' '+pilota.split(' ')[1] ;
    document.getElementById('altitudine').innerHTML = altitudine+" ft" ;
    document.getElementById("overlay").style.display = "block";
  }