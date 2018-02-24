
var map;

function initMap() {
    var uluru = {lat: 23.630785, lng: 120.575576};
     map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
     getData(map);
  }

  function addMarker(map,temple){
    var latLng = new google.maps.LatLng(temple.gps.lat,temple.gps.lng);
    
    var color;
    var year30 = slider.value-temple.regularYear;
    if(year30>30){
         color = "rgb(0,185,0)";
    }
    else {
        colorValue = parseInt(year30*255/30);
        console.log("year30= "+year30)
        console.log("colorValue= "+colorValue)
        color = "rgb("+(255-colorValue)+","+parseInt(colorValue*5/7)+",0)";
        console.log(color);
    }

    var iconStyle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color,
        fillOpacity: 1,
        scale: Math.pow(2, 4) / 2,
        strokeColor: 'white',
        strokeWeight: 0.2
    };

    var marker = new google.maps.Marker({
        position: latLng,
        //label: temple.regularYear,
        icon: iconStyle,
        map: map
    });
    var infoWindow = new google.maps.InfoWindow({
        content:"<p>名稱："+temple.county+temple.name+"</p>",
        position:latLng
    });
    google.maps.event.addListener(marker, 'mouseover' , function(){
        infoWindow.open(map,marker);
    });
    google.maps.event.addListener(marker, 'mouseout' , function(){
        infoWindow.close(map,marker);
    });
}


