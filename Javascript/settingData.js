$.ajax({url: "../Php/data.php",
        success: function(data) {
            var obj = JSON.parse(data);
            document.getElementById('connected').innerHTML = obj['general']['connected_clients'];
            document.getElementById('fly').innerHTML = obj['general']['unique_users'];
            }
});
$.ajax({url: "../Php/data1.php",
        success: function(data) {
            var obj1 = JSON.parse(data);
            document.getElementById('unique').innerHTML = obj1['pilots'];
            document.getElementById('controllers').innerHTML = obj1['controllers'];
            document.getElementById('supervisors').innerHTML = obj1['supervisors'];
            document.getElementById('atis').innerHTML = obj1['atis'];
            document.getElementById('observers').innerHTML = obj1['observers'];
            document.getElementById('twentyfour').innerHTML = obj1['twentyfour'];
        }   
});

setInterval(function() {
    $.ajax({url: "../Php/data.php",
            success: function(data) {
                    var obj = JSON.parse(data);
                    document.getElementById('connected').innerHTML = obj['general']['connected_clients'];
                    document.getElementById('fly').innerHTML = obj['general']['unique_users'];
                    }
                });
    $.ajax({url: "../Php/data1.php",
            success: function(data) {
                    var obj1 = JSON.parse(data);
                    document.getElementById('unique').innerHTML = obj1['pilots'];
                    document.getElementById('controllers').innerHTML = obj1['controllers'];
                    document.getElementById('supervisors').innerHTML = obj1['supervisors'];
                    document.getElementById('atis').innerHTML = obj1['atis'];
                    document.getElementById('observers').innerHTML = obj1['observers'];
                    document.getElementById('twentyfour').innerHTML = obj1['twentyfour'];
                    }
                });
}, 60000);