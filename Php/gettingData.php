<?php 
    $json = file_get_contents('https://data.vatsim.net/v3/vatsim-data.json');
    $obj = json_decode($json,true);
    $json1 = file_get_contents('https://stats.vatsim.net/user_count_json');
    $obj1 = json_decode($json1,true);
?>