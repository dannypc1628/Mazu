var timer;

const deafultIntervalMilliseconds = 1000;
var previousYear ;

$(document).ready(function() {
    var slider = document.getElementById("slider");

    var thisYear = document.getElementById("thisYear"); 
    showThisYear(parseInt(slider.value));

   
    previousYear = parseInt(slider.value);


    slider.oninput = function(){
        showThisYear(parseInt(slider.value));
        var isJump = false;
        showTime(slider.value, previousYear);
        previousYearUpdata();
    }


    //getData執行時機改於map initMap()中
    

});
var goChecked = false;
function go(){
    stop();
    timer = setInterval(autoAddYear,setIntervalMilliseconds);
    goChecked = true;
}

function stop(){
    clearInterval(timer);
    goChecked = false;
}

function speed(value){
    let setIntervalMilliseconds = deafultIntervalMilliseconds;
    if(value>0)
      setIntervalMilliseconds = setIntervalMilliseconds / value;
    
    if(goChecked){
        clearInterval(timer);
        timer = setInterval(autoAddYear,setIntervalMilliseconds); 
    }
    console.log(value)
    
}


var time=0;
var oldPoint=0;
function showTime(newYear,previousYear){
    newYear = parseInt(newYear);
    console.log(newYear);
    time=0;
    var point = yearSearch(newYear,Math.ceil(dataTable.length/2),dataTable.length);
    var oldYearPoint = yearSearch(newYear-1,Math.ceil(dataTable.length/2),dataTable.length);
    var old30YearPoint ;
    if((newYear-previousYear)>30)
        old30YearPoint = yearSearch(previousYear-30,Math.ceil(dataTable.length/2),dataTable.length);
    else
        old30YearPoint= yearSearch(newYear-30,Math.ceil(dataTable.length/2),dataTable.length);
        // console.log(time);
        // console.log("point= "+point);
        // console.log(dataTable[point].location+" "+dataTable[point].name+" "+dataTable[point].year);

    showMarker(point,oldYearPoint);

    for(var i = old30YearPoint ;i<=  point ;i++ ){
        changeMarkerStyle(i,newYear);
    }
    twCounty(newYear);
    oldPoint = point;
  //  showSubtitle(point,setIntervalMilliseconds/1000);
}
