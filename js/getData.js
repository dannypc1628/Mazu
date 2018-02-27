
var dataTable;
function getData() {
    console.log("gogog");
    $.get('data.json', function (json) {
        
        var  y = jQuery.parseJSON(JSON.stringify(json));
                
        console.log(y.table);
        // y.table.sort( function(a, b){   
        //     return parseInt(a.regularYear) > parseInt(b.regularYear) ? 1 : parseInt(a.regularYear) == parseInt(b.regularYear) ? 0 : -1;
        // }); 
        dataTable = y.table;
        
        buildSubtitle(dataTable);
        buildMarkerList(dataTable);

        
       });
}




