<?php
	session_start(); /*Inizializza la sessione*/
	session_unset(); /*Libera tutte le sessioni in corso*/
	session_destroy(); /*Distrugge la sessione*/
	
	header('location: ../Html/login.html'); /*Redirect alla login*/
	exit();
?>