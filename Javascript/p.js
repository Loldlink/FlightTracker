var theUrl = 'https://data.vatsim.net/v3/vatsim-data.json';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    var info = xmlHttp.responseText;    //all'interno di info hai il json con tutti i dati di vatsim
    const j = JSON.parse(info);         //in j hai un dizionario chiave/valore 
    var pippo = j.pilots[0].cid;
    document.getElementById("m").innerHTML = pippo;
}
    
httpGet();


