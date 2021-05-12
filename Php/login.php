<?php

session_start();
/*Si attiva quando il bottone del form viene premuto*/
if (isset($_POST['send'])) {
	$connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection)); /*connessione all'host di phpadmin*/
	mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); /*selezione del db*/

	$username = $_POST['username'];
	$password = $_POST['password'];
	
	/*salvataggio delle credenziali*/
	
	$query = "SELECT * from user WHERE username = '$username' and password = '$password'";
	$result = mysqli_query($connection, $query);
	
	/*inizializzazione della query per prendere la colonna corrispondente*/
	
	$row = mysqli_num_rows($result);
	/*controllo del risultato esatto*/
	
	if ($row == 1) {
		header("location: ../html/homepage.html");
		$_SESSION['userLogin'] = 'loggato';
		
	/*se il controllo è andato a buon fine si viene rimandati nella homepage*/
	
	} else {
		header("location: ../html/loginErrato.html");
	/*altrimenti errore*/
	}
	mysqli_close($connection);
}

?>