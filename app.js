
// Wait for the document to be ready

document.addEventListener('DOMContentLoaded', function () {
    // Create a map instance and set the initial view coordinates and zoom level
    var map = L.map('map').setView([62.24, 25.77], 13);
  

    // Add a tile layer to the map from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


var indeksi = document.getElementById("indeksi");

function createindeksiElement(layer, otsikko){
	var elm = "<div class='indeksi-elmentti' data-marker='"+layer._leaflet_id+"'>" + otsikko +"</div>";  
  var temp = document.createElement('div');
  temp.innerHTML = elm.trim();
  var htmlElementti = temp.firstChild  
  L.DomEvent.on(htmlElementti,'click',zoomaaMarkkeriin);
  indeksi.append(htmlElementti);
}

function zoomaaMarkkeriin(e){
  map.setZoom(16);

  var clickedElm = e.target;
  var markerId = clickedElm.getAttribute('data-marker');
  
  var marker = featuremappi.getLayer(markerId);
  map.panTo(marker.getLatLng());
}

var featuremappi = L.featureGroup().addTo(map);

for (let i = 0; i < paikatdata.length; i++) {  
  rivi = paikatdata[i];
	var marker = L.marker([rivi[0], rivi[1]]).addTo(featuremappi);
  if (rivi.length == 4) {
    marker.bindPopup("<b>"+[rivi[2]+"</b>",rivi[3]].join("<br><br>"));
  }    
  if (rivi.length == 5) {
    marker.bindPopup("<b>"+[rivi[2]+"</b>",rivi[3],rivi[4]].join("<br><br>"));
  }  
  if (rivi.length == 6) {
    marker.bindPopup("<b>"+[rivi[2]+"</b>",rivi[3],rivi[4],rivi[5]].join("<br><br>"));
  }
  if (rivi.length == 7) {
    marker.bindPopup("<b>"+[rivi[2]+"</b>",rivi[3],rivi[4],rivi[5],rivi[6]].join("<br><br>"));
  }
  if (rivi.length == 8) {
    marker.bindPopup("<b>"+[rivi[2]+"</b>",rivi[3],rivi[4],rivi[5],rivi[6],rivi[7]].join("<br><br>"));
  }  
  if (rivi.length == 9) {
    marker.bindPopup("<b>"+[rivi[2]+"</b>",rivi[3],rivi[4],rivi[5],rivi[6],rivi[7],rivi[8]].join("<br><br>"));
  }    
  createindeksiElement(marker, rivi[2]);
}


map.fitBounds(featuremappi.getBounds())

});