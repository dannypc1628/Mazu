
var map;

var markerList = [];

function initMap() {
    var uluru = {lat: 23.630785, lng: 120.575576};
     map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
  }

function addMarker(map,temple){
    var latLng = new google.maps.LatLng(temple.gps.lat,temple.gps.lng);
    
    // var color;
    // var year30 = slider.value-temple.regularYear;
    // if(year30>30){
    //      color = "rgb(0,185,0)";
    // }
    // else {
    //     colorValue = parseInt(year30*255/30);
    //     console.log("year30= "+year30)
    //     console.log("colorValue= "+colorValue)
    //     color = "rgb("+(255-colorValue)+","+parseInt(colorValue*5/7)+",0)";
    //     console.log(color);
    // }

    var iconStyle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "rgb(255,0,0)",
        fillOpacity: 0.3,
        scale: Math.pow(2, 4) / 2,
        strokeColor: 'red',
        strokeWeight: 2
    };

    var marker = new google.maps.Marker({
        position: latLng,
        label: temple.name,
        icon: iconStyle,
        map: map
    });

    marker.setVisible(false);

    markerList.push(marker);

    var infoWindow = new google.maps.InfoWindow({
        content:"<p>"+temple.county+temple.location+temple.name+"</p>",
        position:latLng
    });

    var clicked ;
    google.maps.event.addListener(marker, 'mouseover' , function(){
        clicked = false;
        infoWindow.open(map,marker);
    });
    
    google.maps.event.addListener(marker, 'mouseout' , function(){
        if(clicked==false)
            infoWindow.close(map,marker);
    });
        google.maps.event.addListener(marker, 'click' , function(){
        clicked = true;
        infoWindow.open(map,marker);
    });
}


function buildMarkerList(templeList){
    for(var i = 0 ; i<templeList.length;i++){
        addMarker(map,templeList[i]);
    }
}

function showMarker(point){
    if(point!=0)
    markerList[point].setVisible(true);
}


