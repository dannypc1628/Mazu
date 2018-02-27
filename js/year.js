


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





function autoAddYear(){
    slider.value = parseFloat(slider.value) + 1;
    thisYear.innerHTML =  slider.value+"年";
    var isJump = true;
    showTime(slider.value, isJump);
    previousYearUpdata();

    if(previousYear==1895)
        stop();
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



