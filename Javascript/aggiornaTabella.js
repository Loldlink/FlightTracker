//Questa qui potrebbe essere la funzione che controlla l'aggiornamento della tabella con le stats nella HOMEPAGE
//ancora non funziona vanno riviste delle cose

//qui il link da dove si prendono i dati :  https://stats.vatsim.net/user_count_json

(function($){	
	
	$.get('https://stats.vatsim.net/user_count_json.php', function(data) {
		fields = ['pilots','controllers','supervisors','atis','observers','total','twentyfour'];
		$.each(fields, function(key, val) {
             $('#vatsimStats-' + val + ', .vatsimStats-' + val).text(data[val]);
		});
	}).error(function() {
		$('#vatsimStats').html('<tr><td>Failed to load stats</td></tr>');
        $('.vatsimStats').hide();
	});

})(jQuery);
;