var slider = document.getElementById("slider");
var thisYear = document.getElementById("thisYear");
thisYear.innerHTML = slider.value;
var sliderWidth = document.getElementById('slider').offsetWidth;

var previousYear ;
previousYearUpdata();


function previousYearUpdata(){
    previousYear = parseInt(slider.value);
}


function addYear(){
    slider.value = previousYear + 1;
    showTime(previousYear, slider.value);
    previousYearUpdata();
    thisYear.innerHTML = "西元"+ slider.value;

    if(previousYear==1900)
        clearInterval(timer);
}


//var timer = setInterval(addYear,300);


slider.oninput = function(){
    thisYear.innerHTML = "西元"+slider.value;
    showTime(previousYear, slider.value);
    previousYearUpdata();
}
var time=0;
function showTime(oldYear,newYear){
    newYear = parseInt(newYear);
    console.log(newYear);
    time=0;
    var point = yearSearch(newYear,Math.ceil(dataTable.length/2),dataTable.length);
    console.log(time);
    console.log(point);
    console.log(dataTable[point].location+" "+dataTable[point].name+" "+dataTable[point].year);

    var temple = dataTable[point];

    makeMarker(map,temple);
}

function yearSearch(searchYear,pointA,pointB){
    time = time+1;
    pointYear = parseInt(dataTable[pointA].regularYear);

    if(pointYear > searchYear){
        if(pointA > 0){
            if(parseInt(dataTable[pointA-1].regularYear)<searchYear){
                return pointA;
            }
            else{
                return yearSearch(searchYear,Math.ceil((pointA+0)/2),pointA);
            }
        }
        else{
            return 0;
        }
    }
    if(pointYear < searchYear){
        if((pointA < pointB) && ((pointA+1)<pointB)){
                return yearSearch(searchYear,Math.ceil((pointA+pointB)/2),pointB);
        }
        else{
            return pointB;
        }
    }
    
    if(pointYear == searchYear){
        return pointA;
    }
}



