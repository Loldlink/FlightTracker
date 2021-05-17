//stesso esatto script del cambiaSfondi solo con foto diverse (volevo mezzo diversificare tra le varie pagine)
var url2= ["https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/188633978_4027798193965049_8500525180061094805_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=XUszYFLWwAAAX9b0JTZ&_nc_ht=scontent.ffco3-1.fna&oh=d35bee7894a8bc6bb225f51a25225379&oe=60C7DE24",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/187383035_4027798217298380_9083967472754771394_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=WejWbbZ9Xc4AX_Q6rwE&_nc_ht=scontent.ffco3-1.fna&oh=ae8f4f2912725358a8554754f6369a50&oe=60C6C5FC",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/186530833_4027798083965060_5504351512266481766_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=VYoXGbsmDiwAX_yab6o&_nc_ht=scontent.ffco3-1.fna&oh=07e62456563b9cb930dd62a9193e00b4&oe=60C67D7F",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/187090292_4027798207298381_5222227356614864759_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=4zpd5GkVcAgAX8jNpkN&_nc_ht=scontent.ffco3-1.fna&oh=087b03ef01097d38aef028e8df2394ce&oe=60C60FDD",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/186957610_4027798117298390_6402413150813070104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=jyySmnu4-RgAX-h2age&_nc_ht=scontent.ffco3-1.fna&oh=e28d39d133be4391b485b8412c2bc472&oe=60C64133"];

$('body').css('background-image', 'url("' + url2[Math.floor(Math.random() * ((url2.length-1) + 1))] + '")'); //funzione che prende un indice random dell'array urls
$('body').css('width', "100%");
$('body').css('height', "100%");
$('body').css('background-repeat', "no-repeat");
$('body').css('background-size', "cover");
$('body').css("margin-top","auto");
$('body').css("margin-left","auto");

setInterval(function() {
    $('body').css('background-image', 'url("' + url2[Math.floor(Math.random() * ((url2.length-1) + 1))] + '")');
    $('body').css('width', "100%");
    $('body').css('height', "100%");
    $('body').css('background-repeat', "no-repeat");
    $('body').css('background-size', "cover");
    $('body').css("margin-top","auto");
    $('body').css("margin-left","auto");
}, 60000);