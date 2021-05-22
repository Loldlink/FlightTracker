//i link sono del mio facebook personale e sono accessibili a tutti

function sfondo() {
    var urls= ["https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/188745757_4038080419603493_7129253532541067755_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=YszKNK_wu4UAX8WpRM8&_nc_ht=scontent.ffco3-1.fna&oh=1eeb83b23082c9aa0d5594487c0ad4ba&oe=60CB1911",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/188826511_4038080406270161_4531373592401115788_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=FYFEEAlB_5AAX-14mIw&_nc_ht=scontent.ffco3-1.fna&oh=d0dfc9943fae286ea87fb40b594caeaa&oe=60CACF55",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/187735002_4038080402936828_940062446066398320_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=LkvYA5O5MA0AX_B0NyL&_nc_ht=scontent.ffco3-1.fna&oh=8dcddafacb985769cab5a39ffb43034c&oe=60CA818C",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/186957610_4027798117298390_6402413150813070104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Fg1s0I-pNYgAX941O77&_nc_ht=scontent.ffco3-1.fna&oh=49651b4109cc460d4920a295c187af97&oe=60CA35B3",
    "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.6435-9/188074502_4027798147298387_6981127181761857889_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=K2BcklKCB6sAX_zoGtf&_nc_ht=scontent.ffco3-1.fna&oh=1978389c8259026847979a68870fbe28&oe=60C8361B",
    ];

    $('body').css('background-image', 'url("' + urls[Math.floor(Math.random() * ((urls.length-1) + 1))] + '")'); //funzione che prende un indice random dell'array urls
    $('body').css('width', "100%");
    $('body').css('height', "100%");
    $('body').css('background-repeat', "no-repeat");
    $('body').css('background-size', "cover");
    $('body').css("margin-top","auto");
    $('body').css("margin-left","auto");
}

sfondo();
setInterval(sfondo(), 60000);