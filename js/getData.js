
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
   
        buildSubtitle();
          
       });
}



