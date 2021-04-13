<?php
$json = file_get_contents('https://data.vatsim.net/v3/vatsim-data.json');
$obj = json_decode($json,true);
echo "<pre>";
print_r($obj["pilots"][0]["cid"]);
echo "</pre>";
?>