$.ajax({url: "../Php/dbFlights.php",
        success: function(n) {
            for (i=0; i < n; i++ ){
                var div = document.getElementById('div');
                var tag = document.createElement('button');
                tag.setAttribute('class','volo_btn')
                tag.setAttribute('type','submit');
                tag.setAttribute('name','send');
                tag.setAttribute('value',i);
                tag.setAttribute('id','volo '+(i+1));
                var br = document.createElement('br');
                tag.innerHTML = 'Volo N°'+(i+1);
                div.appendChild(tag);
                div.appendChild(br);
            }
            }
});