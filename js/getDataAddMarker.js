
var dataTable;
function getData(map) {
    console.log("gogog");
    $.get('data3SortSort.json', function (json) {
        
        var  y = jQuery.parseJSON(JSON.stringify(json));
                
            console.log(y.table);
            // y.table.sort( function(a, b){   
            //     return parseInt(a.regularYear) > parseInt(b.regularYear) ? 1 : parseInt(a.regularYear) == parseInt(b.regularYear) ? 0 : -1;
            // }); 
            dataTable = y.table;
            console.log(y.table);   
        // for (var i = 1; i < y.table.length; i++) {
        //     var temple = y.table[i];

        //     makeMarker(map,temple);
     
        //   }
        //   time++;
        buildSubtitle();
          
       });
}

function addMarker(map,temple){
    var latLng = new google.maps.LatLng(temple.gps.lat,temple.gps.lng);
    
    var color;
    var year30 = slider.value-temple.regularYear;
    if(year30>30){
         color = "rgb(0,255,0)";
    }
    else {
        colorValue = parseInt(year30*255/30);
        console.log("year30= "+year30)
        console.log("colorValue= "+colorValue)
        color = "rgb("+(255-colorValue)+","+colorValue+",0)";
        console.log(color);
    }

    var iconStyle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color,
        fillOpacity: 1,
        scale: Math.pow(2, 4) / 2,
        strokeColor: 'white',
        strokeWeight: 0.1
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



