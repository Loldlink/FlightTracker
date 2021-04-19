<!DOCTYPE html>
<html>

<?php 
$json = file_get_contents('https://data.vatsim.net/v3/vatsim-data.json');
$obj = json_decode($json,true);
?>

<body>
    <p id="m"></p>

    <script type="text/javascript"> 
        var c = <?php echo json_encode($obj['pilots'][0]['cid']);?> 
        document.getElementById('m').innerHTML = c ;
    </script>
</body>
</html>