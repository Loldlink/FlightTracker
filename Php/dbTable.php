<?php

session_start();
/*Si attiva quando il bottone del form viene premuto*/
if (isset($_POST['send'])) {
	$connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection)); /*connessione all'host di phpadmin*/
	mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); /*selezione del db*/
}