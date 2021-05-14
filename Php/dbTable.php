<?php

  session_start();  //Inizializza la sessione

  $connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection));    //connessione all'host di phpadmin

  mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); //selezione del db

  //acquisizione dati

  $data = intval($_GET['data']);

  //query che restituisce le informazioni scelte nella tabella flights in $result

  $query = "SELECT * from flights";
  $result = $connection->query($query);

  //restituzione riga desiderata in $temp
  
  $counter = 0;
  while ($row = mysqli_fetch_row($result)) {
      if($counter==$data){
          $temp = $row;
      }
      $counter++;
    }

  echo json_encode($temp);

  mysqli_close($connection);  //chiusura connessione con l'host

?>