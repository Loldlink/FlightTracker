<?php

session_start();	//Inizializza la sessione

if (isset($_POST['send'])) { //Si attiva quando il bottone del form viene premuto

	$connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection)); /*connessione all'host di phpadmin*/

	mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); /*selezione del db*/

	//acquisizione di tutti i dati del form

	$username = $_POST['username'];
	$password = $_POST['password'];

	//query che restituisce le informazioni scelte nella tabella user in $result

	$query = "SELECT * from user WHERE username = '$username' and password = '$password'"; 
	$result = $connection->query($query);
	
	//restituzione del numero di righe all'interno di $result

	$row = mysqli_num_rows($result);
	
	//controllo risultato esatto

	if ($row == 1) {
		header("location: ../Html/homepage.html");
		$_SESSION['userLogin'] = 'loggato';	
	} 
	else {
		header("location: ../Html/loginErrato.html");
	}

	mysqli_close($connection);	//chiusura connessione con l'host
}

?>