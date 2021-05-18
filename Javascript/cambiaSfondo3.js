//i link sono del mio facebook personale e sono accessibili a tutti

function sfondo() {
    var urls= ["https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/186511931_4027798077298394_8687160041061994482_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=YCZFWkOudTgAX-QXi6a&_nc_ht=scontent.ffco3-1.fna&oh=35fdfda2a7720ac81c78099c811202fa&oe=60C8401A",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/186513774_4027798010631734_5040818546402806452_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=75VYlkwbGboAX-9hTkM&_nc_ht=scontent.ffco3-1.fna&oh=4e3bde9a8c78ca83e3cbe6139ae2ea7e&oe=60C6F00B",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/186544552_4027798413965027_5824534003111505708_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=3Azlt2IuFRgAX_HIk36&_nc_ht=scontent.ffco3-1.fna&oh=7e8cfad5cb90b11c9c2b1785f3eafeed&oe=60C878BD",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/187172669_4027798380631697_1192086749001485309_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_ohc=5vOPCD7tYX4AX8Oh19c&_nc_ht=scontent.ffco3-1.fna&oh=bc6d210614923c2ffffbf3a733f55b8b&oe=60C6C5FC",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/187414939_4027797917298410_7754313945169935309_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=CzChBGl04aoAX-ejEus&_nc_ht=scontent.ffco3-1.fna&oh=562bc7f792955a0333806b5ba720673f&oe=60C6923A",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/188074502_4027798147298387_6981127181761857889_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=K2BcklKCB6sAX_zoGtf&_nc_ht=scontent.ffco3-1.fna&oh=1978389c8259026847979a68870fbe28&oe=60C8361B",
    ];

    $('body').css('background-image', 'url("' + urls[Math.floor(Math.random() * ((urls.length-1) + 1))] + '")'); //funzione che prende un indice random dell'array urls
    $('body').css('width', "100%");
    $('body').css('height', "100%");
    $('body').css('background-repeat', "no-repeat");
    $('body').css('background-size', "cover");
    $('body').css("margin-top","auto");
    $('body').css("margin-left","auto");
    console.log('pippo');
}

sfondo();
setInterval(sfondo(), 60000);