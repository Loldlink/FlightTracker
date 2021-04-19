<?php

session_start();
/*Si attiva quando il bottone del form viene premuto*/
if (isset($_POST['send'])) {
    $username = $_POST['username'];
	$password = $_POST['password']; 

    /*Salvo le credenziali*/

    if($username == 'ltw' && $password == 'ltw'){
        $_SESSION['userLogin'] = 'loggato';
        header("location: ../html/homepage.html");
        /*redirect alla homepage e setto la sessione*/
    }
    else {
		header("location: ../html/loginErrato.html");
        /*redirect all'errore*/
	}
}
?>