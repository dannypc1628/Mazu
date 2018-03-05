
var map;

var markerList = [];

function initMap() {
    var uluru = {lat: 23.630785, lng: 120.575576};
     map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
    getData();
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
        fillOpacity: 1,
        scale: Math.pow(2, 4) / 3,
        trokeColor: 'white',
        strokeWeight: 0.4,
    };

    var marker = new google.maps.Marker({
        dataYear:temple.regularYear,
        position: latLng,
        //label:temple.name,
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

function showMarker(point,oldPoint){
    if(point!=0){
        // if(oldPoint==0){
        //     markerList[1].setVisible(true);
        // }
        // else{
        //     for(var i = oldPoint ; i<=point ; i++)
        //         markerList[i].setVisible(true);
        // }
        for(var i = 1 ; i<=point ; i++)
          markerList[i].setVisible(true);
    }
    for(var i = point+1 ; i<markerList.length ; i++)
        markerList[i].setVisible(false);
    
}

function changeMarkerStyle(point,thisYear){
    var year = parseInt(markerList[point].dataYear);
    
    var yearOld = thisYear - year;
    var colorValue = parseInt( yearOld *255/ 30);
    var color = "rgb("+(255-colorValue)+","+parseInt(colorValue*5/7)+",0)";
console.log("colorValue "+colorValue);
console.log("yearOld "+yearOld);
console.log("color "+color);
    var Opacity = 1;
    if(yearOld > 30){
       // Opacity=0.1;
        color = "rgb(0,188,0)";
    }
 
    var iconStyle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color,
        fillOpacity: Opacity,
        scale: Math.pow(2, 4) / 3,
        strokeColor: 'white',
        strokeWeight: 0.4
    };

    markerList[point].setIcon(iconStyle);
   
    // if(yearOld > 10){
    //     markerList[point].setLabel("");
    // }
}


