var slider = document.getElementById("slider");
var thisYear = document.getElementById("thisYear");
thisYear.innerHTML = slider.value+"年";
var sliderWidth = document.getElementById('slider').offsetWidth;

var previousYear ;
previousYear = parseInt(slider.value);


function moveThisYear(){
    position = (slider.value-slider.min)/(slider.max-slider.min)*100;
    if(position>=95){
        thisYear.style.left = "95%";
    }
    else{
        thisYear.style.left = position + "%";
    }
    
}

function previousYearUpdata(){
    previousYear = parseInt(slider.value);
    console.log("+1");
    moveThisYear();
}


function addYear(){
    slider.value = parseInt(previousYear) + 1;
    thisYear.innerHTML =  slider.value+"年";
    showTime(previousYear, slider.value);
    previousYearUpdata();

    if(previousYear==1900)
        clearInterval(timer);
}


var timer = setInterval(addYear,300);


slider.oninput = function(){
    thisYear.innerHTML =  slider.value+"年";
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
    console.log("time =  "+ time + "  searchYear="+searchYear+"  pintA="+pointA+"  pointB="+pointB);
    searchYear = parseInt(searchYear);
    pointYear = parseInt(dataTable[pointA].regularYear);

    if(pointYear > searchYear){
        if(pointA > 0){
            if(parseInt(dataTable[pointA-1].regularYear)<searchYear){
                console.log("return pointA "+ pointA + "   [pointA-1].regularYear)<searchYear");
                return pointA;
            }
            else{
                return yearSearch(searchYear,Math.ceil((pointA+0)/2),pointA);
            }
        }
        else{
            console.log("return 0");
            return 0;
        }
    }
    if(pointYear < searchYear){
        if((pointA < pointB) && ((pointA+1)<pointB)){
                return yearSearch(searchYear,Math.ceil((pointA+pointB)/2),pointB);
        }
        else{
            console.log("return pointB "+pointB);
            return pointB;
        }
    }
    
    if(pointYear == searchYear){
        console.log("return pointA "+ pointA);
        return pointA;
    }
}



