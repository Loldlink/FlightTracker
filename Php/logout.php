<?php
	session_start(); /*Inizializza la sessione*/
	session_unset(); /*Libera tutte le sessioni in corso*/
	session_destroy(); /*Distrugge la sessione*/
	
	header('location: ../html/login.html'); /*Redirect alla login*/
	exit();
?>