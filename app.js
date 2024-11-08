// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Create a map instance and set the initial view coordinates and zoom level
    var map = L.map('map').setView([62.24, 25.77], 13);
  
  
    // Add a tile layer to the map from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  
    // Create a marker with popup and add it to the map
    var marker = L.marker([62.259, 25.698]).addTo(map);
    marker.bindPopup("<b>Laajavuoren kylpylä</b> <br /> Koko perheen uimapaikka<br />Ma–to klo 8.00–21.00<br>Pe–la klo 8.00–22.00<br>Su klo 8.00–20.00<br>Allasosasto sulkeutuu 30 min ennen kylpylän sulkemista.<br><a href=https://www.scandichotels.fi/hotellit/suomi/jyvaskyla/scandic-laajavuori/kylpyla>Laajavuoren kylpylä</a>");

    var marker2 = L.marker([62.25677227963676, 25.696428305644275]).addTo(map);
    marker2.bindPopup("<b>Laajis seikkailupuosto</b> <br /> Koko perheen seikkailumaa<br />09:45-18:00 ks. kotisivut <br><a href=https://laajis.fi/>Laajis</a>");


    var marker3 = L.marker([62.253328657379555, 25.830440248724543]).addTo(map);
    marker3.bindPopup("<b>Asmalammen uimaranta</b> <br /> Matala, nopeasti syvenevä ranta. Laituri. Parkkipaikka vieressä. Roskikset. Kaksi uimakoppia. WC-kopit, oma paperi mukaan. </br><br /> Ei tulentekomahdollisuutta. Useita koiranuittopaikkoja, kumiveneen laskupaikkoja ja onkipaikkoja. <br /><br />Hiekkaranta avautuu etelään-lounaaseen. Vierestä kulkee ulkoilupolku. Bussipysäkki heti Asmalammintiellä josta kulkee useita vuoroja keskustaan ja Vaajakoskelle, bussi nro 3.<br /><br />Vedenlaatu mitataan kesäisin ja ollut viime vuosina hyvä.");
  });