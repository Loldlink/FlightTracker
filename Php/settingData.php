<?php require '../Php/gettingData.php'?>
echo 
<script type="text/javascript">
document.getElementById('connected').innerHTML = <?php echo json_encode($obj['general']['connected_clients']);?> ;
document.getElementById('fly').innerHTML = <?php echo json_encode($obj['general']['unique_users']);?>;
document.getElementById('unique').innerHTML = <?php echo json_encode($obj1['pilots']);?>;
document.getElementById('controllers').innerHTML = <?php echo json_encode($obj1['controllers']);?>;
document.getElementById('supervisors').innerHTML = <?php echo json_encode($obj1['supervisors']);?>;
document.getElementById('atis').innerHTML = <?php echo json_encode($obj1['atis']);?>;
document.getElementById('observers').innerHTML = <?php echo json_encode($obj1['observers']);?>;
document.getElementById('twentyfour').innerHTML = <?php echo json_encode($obj1['twentyfour']);?>;
setInterval(function() {
    document.getElementById('connected').innerHTML = <?php echo json_encode($obj['general']['connected_clients']);?> ;
    document.getElementById('fly').innerHTML = <?php echo json_encode($obj['general']['unique_users']);?>;
    document.getElementById('unique').innerHTML = <?php echo json_encode($obj1['pilots']);?>;
    document.getElementById('controllers').innerHTML = <?php echo json_encode($obj1['controllers']);?>;
    document.getElementById('supervisors').innerHTML = <?php echo json_encode($obj1['supervisors']);?>;
    document.getElementById('atis').innerHTML = <?php echo json_encode($obj1['atis']);?>;
    document.getElementById('observers').innerHTML = <?php echo json_encode($obj1['observers']);?>;
    document.getElementById('twentyfour').innerHTML = <?php echo json_encode($obj1['twentyfour']);?>;
}, 60000);
</script>