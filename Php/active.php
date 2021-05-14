<?php 
	session_start();	//Inizializza la sessione

	if($_SESSION['userLogin'] != 'loggato'){	//controllo sessione attiva nel sistema
		header("Location: ../Html/login.html");
	}

?>