//funzione per invertire partenza/arrivo nella pagina flightplan.html

function invertiCasellaTesto() { 
    var partenza = document.getElementById("aeroportopartenza");
    var arrivo = document.getElementById("aeroportodestinazione");
    var temp;
    temp=arrivo.value;
    arrivo.value = partenza.value;  
    partenza.value = temp;
}