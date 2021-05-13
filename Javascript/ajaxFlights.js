$.ajax({url: "../Php/dbFlights.php",
        success: function(n) {
            for (i=0; i < n; i++ ){
                var div = document.getElementById('div');
                var tag = document.createElement('a');
                tag.setAttribute('class','volo_btn')
                tag.setAttribute('href','#')
                tag.setAttribute('onclick','ajax('+i+')');
                tag.setAttribute('id','volo '+(i+1));
                var br = document.createElement('br');
                tag.innerHTML = 'Volo N°'+(i+1);
                div.appendChild(tag);
                div.appendChild(br);
            }
            }
});