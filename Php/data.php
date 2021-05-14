<?php 
    $json = file_get_contents('https://data.vatsim.net/v3/vatsim-data.json');   //richiesta e acquisizione dei contenuti di vatsim

    echo $json;
    
?>