var map;
function initMap() {
    var uluru = {lat: 23.630785, lng: 120.575576};
     map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
     getData(map);
  }

