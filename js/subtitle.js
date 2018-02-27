
function buildSubtitle(dataList){
    var subtitleShow = document.getElementById("subtitleShow");
    
    for(var i = 0 ;i<dataList.length;i++){
        var aSpan = document.createElement("span");
        aSpan.innerHTML = dataList[i].county+dataList[i].name+" "+dataList[i].year;
        aSpan.dataset.regularYear = dataList[i].regularYear;
        aSpan.dataset.id = i;
        aSpan.style.display="none";

        subtitleShow.appendChild(aSpan);
    }
}

function showSubtitle(point,second){
    //var initalShowYear = slider.value;
    //var initalShowYear = parseInt(slider.value)+15;
    for(var i = 0 ;i<=point;i++){
        var aSpan = document.querySelector("[data-id=\""+i+"\"]"); 
        //aSpan.classList.remove('showDataInitial');
        var position = (10-(parseInt(slider.value)-parseInt(aSpan.dataset.regularYear)))/10*100;
        aSpan.style.left = position + "%";
        aSpan.style.transition = "all "+ second +"s linear";
        if(position>-100){
            aSpan.style.display="block";
        }
        else{
            aSpan.style.display="none";
        }
        
    }

}