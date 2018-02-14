
function getData(map) {
    console.log("gogog");
    $.get('data2.json', function (json) {
        
        var  y = jQuery.parseJSON(JSON.stringify(json));
        //marker.setMap(null);
        for (var i = 1; i < y.table.length; i++) {
            var temple = y.table[i];

            makeMarker(map,temple);
     
          }
          
       });
}

function makeMarker(map,temple){
    var latLng = new google.maps.LatLng(temple.gps.lat,temple.gps.lng);

    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    var infoWindow =new google.maps.InfoWindow({
        content:"<p>名稱："+temple.county+temple.name+"</p>",
        position:latLng
    });
    google.maps.event.addListener(marker, 'click' , function(){
        infoWindow.open(map,marker);
    });
}




