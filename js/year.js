var slider = document.getElementById("slider");
var thisYear = document.getElementById("thisYear");
thisYear.innerHTML = parseInt(slider.value)+"年";
var sliderWidth = document.getElementById("slider").offsetWidth;
var htmlWidth = document.getElementsByTagName("html") .offsetWidth;
console.log("sli W= "+ sliderWidth);
console.log("htm W= "+ htmlWidth);

var subtitleShow = document.getElementById("subtitleShow");

var previousYear ;
previousYear = parseInt(slider.value);




function moveThisYear(){
    var position = (slider.value-slider.min)/(slider.max-slider.min)*100;
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

function buildSubtitle(){
    for(var i = 0 ;i<dataTable.length;i++){
        var aSpan = document.createElement("span");
        aSpan.innerHTML = dataTable[i].county+dataTable[i].name+" "+dataTable[i].year;
        aSpan.dataset.regularYear = dataTable[i].regularYear;
        aSpan.dataset.id = i;
        aSpan.style.display="none";

        subtitleShow.appendChild(aSpan);
    }
}


function autoAddYear(){
    slider.value = parseFloat(slider.value) + 0.1;
    thisYear.innerHTML =  slider.value+"年";
    var isJump = false;
    showTime(slider.value, isJump);
    previousYearUpdata();

    if(previousYear==1895)
        clearInterval(timer);
}

 // var timer = setInterval(autoAddYear,150);


slider.oninput = function(){
    thisYear.innerHTML =  parseInt(slider.value)+"年";
    var isJump = false;
    showTime(slider.value, isJump);
    previousYearUpdata();
}



var time=0;
var oldPoint=0;
function showTime(newYear,isJump){
    newYear = parseInt(newYear);
    console.log(newYear);
    time=0;
    var point = yearSearch(newYear,Math.ceil(dataTable.length/2),dataTable.length);
    console.log(time);
    console.log(point);
    console.log(dataTable[point].location+" "+dataTable[point].name+" "+dataTable[point].year);

    if(isJump){
        maker.setup(null);
        for(var i = 0 ; i<=point ; i++){
            var temple = dataTable[i];
            addMarker(map,temple);
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

function showSubtitle(point){
    for(var i = 0 ;i<=point;i++){
        var aSpan = document.querySelector("[data-id=\""+i+"\"]"); 
        //aSpan.classList.remove('showDataInitial');
        var position = (15-(parseFloat(slider.value)-parseFloat(aSpan.dataset.regularYear)))/15*100;
        aSpan.style.left = position + "%";
        if(position>-100){
            aSpan.style.display="block";
        }
        else{
            aSpan.style.display="none";
        }
        
    }

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
                return pointA-1;
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



