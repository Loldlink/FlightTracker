<!DOCTYPE html>

<?php 
$json = file_get_contents('https://data.vatsim.net/v3/vatsim-data.json');
$obj = json_decode($json,true);
?>

<head>
    <title class=>FlightTracker</title>
    <meta charset = "utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="CSS/Homepage.css">
    <link rel="icon" href="Immagini/favicon.png"> <!-- questa è l'iconcina che compare sulla scheda del browser-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <div id="titolo">
        <a href="login.html" class="Login">Login</a>
        <h1 class="homepage">Homepage</h1> 
    </div>
    <div class="pannelloSinistro">
        <div class="creaPiano"> 
            <button class="pulsanteCreaPiano">Piano di volo</button>
            <h3 class="testo">
                Permette la creazione di un piano di volo
            </h3> <!-- animazione in css allegata-->
        </div>
    </div>
    <div class="pannelloCentrale">
        
        <table class="table">
            <tbody>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_atc.png" height="16" width="16"> Piloti conessi </th>
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
                    <th><img src="//stats.vatsim.net/images/connection_atis.png" height="16" width="16"> ? </th>
                    <th>65</th>
                </tr>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_sup.png" height="16" width="16"> ? </th>
                    <th>3</th>
                </tr>
                <tr>
                    <th><img src="//stats.vatsim.net/images/connection_obs.png" height="16" width="16"> ? </th>
                    <th>51</th>
                </tr>
                <tr>
                    <th> ? </th>
                    <th>6531</th>
                </tr>
                <tr>
                    <th><img src="//stats.vatsim.net/images/marker.png" height="16" width="16">View Map</th>
                    <th><a href="https://map.vatsim.net/" style="color: red;">map.vatsim.net</a></th>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="pannelloDestro">
        <div class="vistaAerei"> 
            <a href="vistaAerei.html">
                <button class="pulsanteVistaAerei">Mappa</button> 
            </a>  
            <h3 class="testo1">
                Visione degli aerei attualmente in volo
            </h3> <!-- animazione in css allegata-->
        </div>
    </div>

    <script src="../Javascript/cambiaSfondo.js"></script>

    <script type="text/javascript">
        var connected = <?php echo json_encode($obj['general']['connected_clients']);?> 
        var unique = <?php echo json_encode($obj['general']['unique_users']);?> 
        var fly = <?php echo json_encode($obj['pilots']);?>.length;
        document.getElementById('connected').innerHTML = connected ;
        document.getElementById('unique').innerHTML = unique ;
        document.getElementById('fly').innerHTML = fly ;
        setInterval(function() {
            var connected = <?php echo json_encode($obj['general']['connected_clients']);?> 
            var unique = <?php echo json_encode($obj['general']['unique_users']);?> 
            var fly = <?php echo json_encode($obj['pilots']);?>.length;
            document.getElementById('connected').innerHTML = connected ;
            document.getElementById('unique').innerHTML = unique ;
            document.getElementById('fly').innerHTML = fly ;
        }, 60000);
    </script>

    <!--termine del blocco di codice dello script-->
</body>
</html>