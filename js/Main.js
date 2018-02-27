var timer;

var setIntervalMilliseconds = 500;


$(document).ready(function() {
    var slider = document.getElementById("slider");
    slider.oninput = function(){
            thisYear.innerHTML =  parseInt(slider.value)+"年";
            var isJump = false;
            showTime(slider.value, isJump);
            previousYearUpdata();
    }


    var thisYear = document.getElementById("thisYear"); 
    thisYear.innerHTML = parseInt(slider.value)+"年";

    var previousYear ;
    previousYear = parseInt(slider.value);

    //getData得到資料後會直接執行buildSubtitle
    getData();

});

function go(){
    stop();
    timer = setInterval(autoAddYear,setIntervalMilliseconds);
}

function stop(){
    clearInterval(timer);
}


var time=0;
var oldPoint=0;
function showTime(newYear,isJump){
    newYear = parseInt(newYear);
    console.log(newYear);
    time=0;
    var point = yearSearch(newYear,Math.ceil(dataTable.length/2),dataTable.length);
    var point30yearold = yearSearch(newYear-30,Math.ceil(dataTable.length/2),dataTable.length);
    console.log(time);
    console.log("point= "+point);
    console.log("point30yearold= "+point30yearold);
    console.log(dataTable[point].location+" "+dataTable[point].name+" "+dataTable[point].year);

    showMarker(point);
    // if(isJump){
    //     if(parseFloat(slider.value)-parseFloat(newYear)==0){
    //         for(var i = point30yearold ; i<=point ; i++){
    //             var temple = dataTable[i];
    //             addMarker(map,temple);
    //         }
    //     }
    // }
    // else{
    //     for(var i = oldPoint+1 ; i<=point ; i++){
    //         var temple = dataTable[i];
    //         addMarker(map,temple);
    //     }
    // }

    oldPoint = point;
  //  showSubtitle(point,setIntervalMilliseconds/1000);
}
