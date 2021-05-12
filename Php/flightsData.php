<?php

session_start();
/*Si attiva quando il bottone del form viene premuto*/
if (isset($_POST['send'])) {
	$connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection)); /*connessione all'host di phpadmin*/
	mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); /*selezione del db*/
    
  $aeroportopartenza = $_POST['aeroportopartenza'];
	$aeroportodestinazione = $_POST['aeroportodestinazione'];
  $orariopartenza = $_POST['orariopartenza'];
	$tempovolo = $_POST['tempovolo'];
  $carburantevolo = $_POST['carburantevolo'];
	$quota = $_POST['quota'];

    $sql = "INSERT INTO flights (aeroportopartenza,aeroportodestinazione,orariopartenza,tempovolo,carburantevolo,quota) 
    VALUES ('$aeroportopartenza','$aeroportodestinazione','$orariopartenza','$tempovolo','$carburantevolo','$quota')";
    if ($connection->query($sql) === TRUE) {
		header("location: ../html/flightplan.html");
      }
    mysqli_close($connection);
}
?>  