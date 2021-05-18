$.ajax({url: "../Php/data.php",
        success: function(data) {
          var aereoicona = L.icon({
              iconUrl: "../Immagini/airplane-mode.png",
              iconSize:     [15, 15], //dimensione dell'iconcina 
              iconAnchor:   [2, 2], // punto dell'icona che corrisponde a dove effettivamente si trova il marker
            });

          var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati
          
          var markers = []; //array per permettere la creazione di multivariabili

          for (var i = 0; i < 100; ++i) { //ciclo nell'array di variabili N volte

              var latitudine = voli['pilots'][i]['latitude'];
              var longitudine = voli['pilots'][i]['longitude'];
              var nomepilota = voli['pilots'][i]['name'];
              var direzione = voli['pilots'][i]['heading'];
              var altitudine = voli['pilots'][i]['altitude'];

              /*
              console.log("Dati Aereo")
              console.log("Latitudine" + latitudine);
              console.log("Longitudine" + longitudine);
              console.log("Nome Pilota:" + nomepilota);
              console.log("FINE Dati Aereo \n");
              */

              //Riga per aggiungere aereo alla mappa
              markers[i] = L.marker([latitudine, longitudine], {icon: aereoicona}, {rotationAngle: direzione}).addTo(map).bindPopup(nomepilota + "   "+altitudine+"ft");

            } 
        }
});

//funzione che fa l'update, l'avevi scritta male
/*
setInterval(function() {
  $.ajax({url: "../Php/data.php",
  success: function(data) {
    var aereoicona = L.icon({
        iconUrl: "../Immagini/airplane-mode.png",
        iconSize:     [15, 15], //dimensione dell'iconcina 
        iconAnchor:   [2, 2], // punto dell'icona che corrisponde a dove effettivamente si trova il marker
      });

    var voli = JSON.parse(data); //faccio il parsing del file json con tutti i dati
  
    var markers = []; //array per permettere la creazione di multivariabili

    console.log("Update aerei");

    for (var i = 0; i < 100; ++i) { //ciclo nell'array di variabili N volte

        var latitudine = voli['pilots'][i]['latitude'];
        var longitudine = voli['pilots'][i]['longitude'];
        var nomepilota = voli['pilots'][i]['name'];

        /*
        console.log("Dati Aereo")
        console.log("Latitudine" + latitudine);
        console.log("Longitudine" + longitudine);
        console.log("Nome Pilota:" + nomepilota);
        console.log("FINE Dati Aereo \n");
        */
/*
        //Riga per aggiungere aereo alla mappa
        markers[i] = L.marker([latitudine, longitudine], {icon: aereoicona}).addTo(map).bindPopup(nomepilota);

      } 
  }
});
}, 60000); 
*/

//HO COMMENTATO TUTTA QUESTA SEZIONE PERCHè NON PENSO SI POSSA FARE L'UPDATE DINAMICO DEI VOLI
//LEAFLET NON HA UNA FUNZIONE PER CANCELLARE I MARKERS E QUINDI QUELLO CHE SUCCEDE è CHE LA MAPPA VIENE SBALLATA

//funzione IMPORTATA ma non riesco a farla andare:   https://github.com/bbecquet/Leaflet.RotatedMarker
(function() {
  // save these original methods before they are overwritten
  var proto_initIcon = L.Marker.prototype._initIcon;
  var proto_setPos = L.Marker.prototype._setPos;

  var oldIE = (L.DomUtil.TRANSFORM === 'msTransform');

  L.Marker.addInitHook(function () {
      var iconOptions = this.options.icon && this.options.icon.options;
      var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
      if (iconAnchor) {
          iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
      }
      this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom' ;
      this.options.rotationAngle = this.options.rotationAngle || 0;

      // Ensure marker keeps rotated during dragging
      this.on('drag', function(e) { e.target._applyRotation(); });
  });

  L.Marker.include({
      _initIcon: function() {
          proto_initIcon.call(this);
      },

      _setPos: function (pos) {
          proto_setPos.call(this, pos);
          this._applyRotation();
      },

      _applyRotation: function () {
          if(this.options.rotationAngle) {
              this._icon.style[L.DomUtil.TRANSFORM+'Origin'] = this.options.rotationOrigin;

              if(oldIE) {
                  // for IE 9, use the 2D rotation
                  this._icon.style[L.DomUtil.TRANSFORM] = 'rotate(' + this.options.rotationAngle + 'deg)';
              } else {
                  // for modern browsers, prefer the 3D accelerated version
                  this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
              }
          }
      },

      setRotationAngle: function(angle) {
          this.options.rotationAngle = angle;
          this.update();
          return this;
      },

      setRotationOrigin: function(origin) {
          this.options.rotationOrigin = origin;
          this.update();
          return this;
      }
  });
})();
