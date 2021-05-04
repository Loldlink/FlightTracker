<?php 
	session_start();
	if($_SESSION['userLogin'] != 'loggato'){
		header("Location: login.html");
	}
?>