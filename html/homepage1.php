<!DOCTYPE html>

<?php require '../Php/gettingData.php'?>


<head>
    <title class=>FlightTracker</title>
    <meta charset = "utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="CSS/Homepage.css">
    <link rel="icon" href="Immagini/favicon.png"> <!-- questa è l'iconcina che compare sulla scheda del browser-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <meta name="descriptor" content="sito per progetto LTW di simulazione e gestione del traffico aereo virtuale">
</head>
<body>
    <div id="titolo">
        <a href="login.html" class="Login">Login</a>
        <h1 class="homepage">Homepage</h1> 
    </div>
    <div class="pannelloSinistro">
        <div class="creaPiano"> 
            <button class="pulsanteCreaPiano" onclick="logAlert()">Piano di volo</button>
            <h3 class="testo">
                Permette la creazione di un piano di volo
            </h3> <!-- animazione in css allegata-->
        </div>
    </div>
    <div class="pannelloCentrale">
        
    <table class="table">
            <tbody>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_atc.png" height="16" width="16"> Utenti Totali  </th>
                    <th id='connected'></th>
                </tr>
                <tr>
                    <th> Piloti unici </th>
                    <th id='unique'></th>
                </tr>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_pilot.png" height="16" width="16"> Piloti in volo </th>
                    <th id='fly'></th>
                </tr>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_atis.png" height="16" width="16"> Controllori </th>
                    <th id='controllers'></th>
                </tr>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_sup.png" height="16" width="16"> Supervisori </th>
                    <th id='supervisors'></th>
                </tr>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_obs.png" height="16" width="16"> Atis </th>
                    <th id='atis'></th>
                </tr>
                <tr>
                    <th> Osservatori </th>
                    <th id='observers'></th>
                </tr>
                <tr>
                    <th> Ultime 24 ore </th>
                    <th id='twentyfour'></th>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="pannelloDestro">
        <div class="vistaAerei"> 
            <a href="vistaAerei1.php">
                <button class="pulsanteVistaAerei">Mappa</button> 
            </a>  
            <h3 class="testo1">
                Visione degli aerei attualmente in volo
            </h3> <!-- animazione in css allegata-->
        </div>
    </div>

    <script src="../Javascript/cambiaSfondo.js"></script>
    <script src="../Javascript/logAlert.js"></script>


    <?php require '../Php/settingData.php'?>

    <!--termine del blocco di codice dello script-->
</body>
</html>