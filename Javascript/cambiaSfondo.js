//i link sono del mio facebook personale e sono accessibili a tutti
var urls = ["https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/180761060_3978459705565565_2400364785146805585_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=gbe8J5bo8WgAX9FIr7c&_nc_ht=scontent.ffco3-1.fna&oh=fd8ac15cfa3b370f4301ecc6a7ed05c6&oe=60B33695",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/180074962_3978459668898902_3718633132343724379_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Xs5PDyXvMq8AX8sP9UQ&_nc_ht=scontent.ffco3-1.fna&oh=82cc6f84e9a049d9f57c86bf0665d598&oe=60AFBA1B",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/180611553_3978459878898881_8476653576458065525_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_ohc=1QbFRbpeuWoAX9Gip-Q&_nc_ht=scontent.ffco3-1.fna&oh=0cda40ed99895c5ab0ea991c219ca290&oe=60B358EF",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/180593768_3978459898898879_1330276743207604754_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=ossI3VGP0ZoAX8MTUOh&_nc_ht=scontent.ffco3-1.fna&oh=26f087beceb7659eb0de8667b924e121&oe=60B28C1D",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/179083652_3978459865565549_3133063238286585298_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=xe13WFPyCowAX-1kS5w&_nc_ht=scontent.ffco3-1.fna&oh=37ae4b99941a385abb7387581edb1cbf&oe=60B2E5BF",
"https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/180269491_3978459765565559_7026819055658952044_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=j1Xa9YpVBlQAX_szykb&_nc_ht=scontent.ffco3-1.fna&oh=2f84fd4c584e4959c52d62c09587658b&oe=60B04EE1"
];

$('body').css('background-image', 'url("' + urls[Math.floor(Math.random() * ((urls.length-1) + 1))] + '")'); //funzione che prende un indice random dell'array urls
$('body').css('width', "100%");
$('body').css('height', "100%");
$('body').css('background-repeat', "no-repeat");
$('body').css('background-size', "cover");
$('body').css("margin-top","auto");
$('body').css("margin-left","auto");
setInterval(function() {
    $('body').css('background-image', 'url("' + urls[Math.floor(Math.random() * ((urls.length-1) + 1))] + '")');
    $('body').css('width', "100%");
    $('body').css('height', "100%");
    $('body').css('background-repeat', "no-repeat");
    $('body').css('background-size', "cover");
    $('body').css("margin-top","auto");
    $('body').css("margin-left","auto");
}, 60000);