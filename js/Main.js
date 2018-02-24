

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
    
    var sliderWidth = document.getElementById("slider").offsetWidth;
    var htmlWidth = document.getElementsByTagName("html") .offsetWidth;
    
    console.log("sli W= "+ sliderWidth);
    console.log("htm W= "+ htmlWidth);

    var previousYear ;
    previousYear = parseInt(slider.value);


});

var timer;

function go(){
    stop();
    timer = setInterval(autoAddYear,150);
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

    if(isJump){
        if(parseFloat(slider.value)-parseFloat(newYear)==0){
            for(var i = point30yearold ; i<=point ; i++){
                var temple = dataTable[i];
                addMarker(map,temple);
            }
        }
    }
    else{
        for(var i = oldPoint+1 ; i<=point ; i++){
            var temple = dataTable[i];
            addMarker(map,temple);
        }
    }

    oldPoint = point;
    showSubtitle(point);
}
