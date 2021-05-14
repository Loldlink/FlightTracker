<?php

    session_start();    //Inizializza la sessione

    $connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection));    //connessione all'host di phpadmin

    mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); //selezione del db

    $query = "SELECT * from flights";   
    $result = mysqli_query($connection, $query);    //query che restituisce tutte le informazioni nella tabella flights in $result

    $row = mysqli_num_rows($result);    //restituzione del numero di righe all'interno della tabella flights in $rows

    echo $row;  //stampa del risultato atteso

    mysqli_close($connection);  //chiusura connessione con l'host

?>