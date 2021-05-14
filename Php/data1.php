<?php 
    $json = file_get_contents('https://stats.vatsim.net/user_count_json');  //richiesta e acquisizione dei contenuti di vatsim

    echo $json;
    
?>