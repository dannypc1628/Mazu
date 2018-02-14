function initMap() {
    var uluru = {lat: 25.1558154, lng: 121.766576};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
     getData(map);
  }

