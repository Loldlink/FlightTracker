var map = L.map('map').setView([41, 12],1); 
L.tileLayer('https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=9SAhLgukQT30FwYja7II', {
attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map);
map.setZoom(3);

//qui finisce lo script di creazione della mappa


//script per SETTARE i "confini" della mappa, l'utente non può trascinare la mappa oltre
// reference:   https://leafletjs.com/reference-1.7.1.html#latlngbounds

var angoloSUDEST = L.latLng(-89.5, 179.5),
angoloNORDOVEST = L.latLng(89.5, -179.5), 
bounds = L.latLngBounds(angoloSUDEST, angoloNORDOVEST);

map.fitBounds([
    [179.5, -89.5],
    [-179.5, 89.5]
]);

map.setMaxBounds(bounds);