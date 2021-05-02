<!DOCTYPE html>

<?php 
	session_start();
	if($_SESSION['userLogin'] != 'loggato'){
		header("Location: login.html");
	}
?>

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
        <a class="pulsanteHomepage" href="homepage.php">Homepage</a>
        <a class="pulsanteUser" href="userpage.php">User</a>
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

</body>
</html>