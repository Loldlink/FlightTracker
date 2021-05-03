<!DOCTYPE html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- il css di questa pagina contentente anche la posizione relativa della mappa-->
    <link rel="stylesheet" href="CSS/VistaAerei.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <!-- gli script servono per jquery-->

    <!-- la referenziazione a LEAFLET, ci stà il css e il javascript di leaflet-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

    <title id="TitoloRadar">Flight Tracker- Map</title>  <!-- titolo-->

    <link rel="icon" href="Immagini/favicon.png">  <!-- questa è l'iconcina che compare sulla scheda del browser-->

</head>

<body>
    <div id="titolo">
        <a class="pulsanteHomepage" href="homepage1.php">Homepage</a>
    </div>

    <!-- elemento div che prende la mappa dal sito   https://cloud.maptiler.com/maps/   -->
    <!-- poi crea una variabile map e ci mette dentro la mappa scaricata dai due link ref sotto-->
    <div id="map"></div>

    <script>
        var map = L.map('map').setView([0, 0], 1); 
        L.tileLayer('https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=9SAhLgukQT30FwYja7II', {
          attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
        }).addTo(map);
    </script>
<!-- qui finisce lo script di creazione della mappa-->

<!-- qui è per "aggiungere aerei sulla mappa" in teoria vai a prendere il file json e aggiungi un marcatore sulla mappa
estrapolando i dati da i campi [dati.pilots.latitude]-->


<!-- ho provato a seguire questa guida qui:  https://www.geeksread.com/how-to-extract-data-from-json-in-javascript/-->
    
    <script>
        var dati= require("https://data.vatsim.net/v3/vatsim-data.json");


   var contatore = L.marker([LATITUDINE, LONGITUDINE]).addTo(map); 
        contatore.bindPopup(NOME);

    </script>

</body>
</html>