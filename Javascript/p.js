var theUrl = 'https://data.vatsim.net/v3/vatsim-data.json';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    var info = xmlHttp.responseText;
    const j = JSON.parse(info);
    var pippo = parseInt(j.pilots[0].cid);
    console.log(pippo)
}

httpGet();
