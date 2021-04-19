<!DOCTYPE html>
<html>
    
<!-- l'estensione è in php già, non so che dire -->

<!-- il php prende il json e lo mette in obj come dizionario-->

<?php 
$json = file_get_contents('https://data.vatsim.net/v3/vatsim-data.json');
$obj = json_decode($json,true);
?>


<body>
    <p id="m"></p>

    <!-- Non so come si chiami ma puoi mettere php in mezzo al javascript in questa maniera per riprendere
        il valore $obj che ho fatto nel php sopra, menomale aggiungerei-->

    <script type="text/javascript"> 
        var c = <?php echo json_encode($obj['pilots'][0]['cid']);?> 
        document.getElementById('m').innerHTML = c ;
    </script>
</body>
</html>