$(document).ready(function() {
    var urls = ["Immagini/Aereo.png", 'Immagini/kingair.png', 'Immagini/a320 (6).png', 'Immagini/a320 (2).png'];
    var cout = 1;
    $('body').css('background-image', 'url("' + urls[0] + '")');
    $('body').css('width', "100%");
    $('body').css('height', "100%");
    $('body').css('background-repeat', "no-repeat");
    $('body').css('background-size', "cover");
    $('body').css("margin-top","auto");
    $('body').css("margin-left","auto");
    setInterval(function() {
        $('body').css('background-image', 'url("' + urls[cout] + '")');
        $('body').css('width', "100%");
        $('body').css('height', "100%");
        $('body').css('background-repeat', "no-repeat");
        $('body').css('background-size', "cover");
        $('body').css("margin-top","auto");
        $('body').css("margin-left","auto");
        cout == urls.length-1 ? cout = 0 : cout++;
    }, 50000);
});