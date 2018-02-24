
function buildSubtitle(){
    var subtitleShow = document.getElementById("subtitleShow");
    
    for(var i = 0 ;i<dataTable.length;i++){
        var aSpan = document.createElement("span");
        aSpan.innerHTML = dataTable[i].county+dataTable[i].name+" "+dataTable[i].year;
        aSpan.dataset.regularYear = dataTable[i].regularYear;
        aSpan.dataset.id = i;
        aSpan.style.display="none";

        subtitleShow.appendChild(aSpan);
    }
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