<?php

session_start();

$connection = mysqli_connect("localhost", "root", "") or die(mysqli_error($connection)); /*connessione all'host di phpadmin*/
mysqli_select_db($connection, "tracker") or die(mysqli_error($connection)); /*selezione del db*/


$query = "SELECT * from flights";
$result = $connection->query($query);

$row = mysqli_fetch_row($result);

echo json_encode($row);

mysqli_close($connection);