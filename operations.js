window.addFormatting=function(type,block,param1){
    if(type=='color'){
        if(param1>=60){
           block.classList.add('safe');
        }
        else if((param1<60)&&(param1>=40)){
            block.classList.add('warning');
        }
        else if((param1<40)&&(param1>=0)){
            block.classList.add('caution');
        }
    }
    if(type=='bgColor'){
        if(param1>=60){
           block.classList.add('bgSafe');
        }
        else if((param1<60)&&(param1>=40)){
            block.classList.add('bgWarning');
        }
        else if((param1<40)&&(param1>=0)){
            block.classList.add('bgCaution');
        }
    }
}

window.fetchFromDB=function(operation){
    var returnValue;
    if(operation=='overallComplianceValue'){
        returnValue="85%";
        return returnValue;
    }
}

window.applyInfoStatus=function(block,value){
    if(value>=60){
        block.src="images/safeIcon.png";
     }
     else if((value<60)&&(value>=40)){
        block.src="images/cautionIcon.png";
     }
     else if((value<40)&&(value>=0)){
        block.src="images/warningIcon.png";

     }
}