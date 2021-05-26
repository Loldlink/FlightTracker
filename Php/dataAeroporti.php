<?php 
    $json = file_get_contents('https://datahub.io/core/airport-codes/r/airport-codes.json');   //per prendere la tabella degli aeroporti
    //ho visto che il json è un grosso array unico con ogni elemento rappresenta un aeroporto


    /* la struttura è:

    json principale [{aeroporto1}, {aeroporto2}...]
    a loro volta di aeroporto1 il campo che ci interessa è "iata_code"

    lo iata code può essere nullo

    */

    echo $json;
    
?>