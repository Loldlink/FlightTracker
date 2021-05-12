<?php

session_start();
/*Si attiva quando il bottone del form viene premuto*/
if (isset($_POST['send'])) {
	$connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection)); /*connessione all'host di phpadmin*/
	mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); /*selezione del db*/
    
  $aeroportopartenza = $_POST['aeroportopartenza'];
	$aeroportodestinazione = $_POST['aeroportodestinazione'];
  $orariopartenza = $_POST['orariopartenza'];
  $tipovolo = $_POST['tipovolo'];
	$tempovolo = $_POST['tempovolo'];
  $carburantevolo = $_POST['carburantevolo'];
	$quota = $_POST['quota'];

  if(!(str_contains($orariopartenza,':'))){
    echo '<script>
            alert("Orario di Partenza non corretto !");
            window.location.replace("../html/flightplan.html");
          </script>';
  }

  elseif(!(is_numeric(explode(':',$orariopartenza)[0])) or !(is_numeric(explode(':',$orariopartenza)[1]))){
    echo '<script>
            alert("Orario di Partenza non corretto !");
            window.location.replace("../html/flightplan.html");
          </script>';
  }

  elseif(strcmp($tipovolo,'VFR')!==0 and strcmp($tipovolo,'IFR')!==0){
    echo '<script>
            alert("Tipo di Volo non corretto !");
            window.location.replace("../html/flightplan.html");
          </script>';
  }

  elseif(!(is_numeric($tempovolo))){
    echo '<script>
            alert("Tempo di Volo non corretto !");
            window.location.replace("../html/flightplan.html");
          </script>';
  }

  elseif(!(is_numeric($quota))){
    echo '<script>
            alert("Quota non corretta !");
            window.location.replace("../html/flightplan.html");
          </script>';
  }

  else {$sql = "INSERT INTO flights (aeroportopartenza,aeroportodestinazione,orariopartenza,tipovolo,tempovolo,carburantevolo,quota) 
  VALUES ('$aeroportopartenza','$aeroportodestinazione','$orariopartenza','$tipovolo','$tempovolo','$carburantevolo','$quota')";
  if ($connection->query($sql) === TRUE) {
    header("location: ../html/flightplan.html");
    }}
  mysqli_close($connection);
}
?>  