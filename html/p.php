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
    
    /*faccio una funzione encode che mette il json in formato leggibile in $obj, da li come si accede normalmente come nei dizionari
    mettendo la chiave di interesse e prendendo i dati*/

        var c = <?php echo json_encode($obj['pilots'][0]['cid']);?> 
        document.getElementById('m').innerHTML = c ;
    </script>

    <!-- forse tutto questo codice (da riga 7 a 26) va nel file "vistaaerei.html" ?, si ma queste sono delle prove quindi 
    ancora non lo metto li dentro.-->
</body>
</html>