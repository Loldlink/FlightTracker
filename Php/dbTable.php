<?php

session_start();

$connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection)); /*connessione all'host di phpadmin*/
mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); /*selezione del db*/

$data = intval($_POST['send']);

$query = "SELECT * from flights";
$result = $connection->query($query);

$counter = 0;
while ($row = mysqli_fetch_row($result)) {
    if($counter==$data){
        $temp = $row;
    }
    $counter++;
  }

echo json_encode($temp);

mysqli_close($connection);