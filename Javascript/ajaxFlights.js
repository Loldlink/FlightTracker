$.ajax({url: "../Php/dbFlights.php",
        success: function(data) {
            for (i=0; i < data; i++ ){
                var div = document.getElementById('div');
                var tag = document.createElement('a');
                var br = document.createElement('br');
                tag.textContent = 'Volo N°'+(i+1);
                div.appendChild(tag);
                div.appendChild(br);
            }
            }
});