window.onload=function(){
    initialLoad();
   // checkURL();
  }

  window.checkURL=function(){
          $.ajax({
            type: "GET",
            url: "database.json", 
            success: function(result) {
                for (var i in result) {
                    if(currUrl.includes(result[i].domain.mainurl)){
                        console.log("TRUE");
                        loadTopBar();
                        setBadge("ON","GREEN");
                        console.log("IF: "+result[i].domain.mainurl);
                        return;
                    }
                    else{
                        console.log("FALSE");
                        
                        setBadge("N/A","RED");
                        console.log("ELSE: "+result[i].domain.mainurl);
                    }
                    
                }        
            }
          });
  }

  window.setBadge=function(printValue,colorCode){
    chrome.browserAction.setBadgeText({text: printValue});
    chrome.browserAction.setBadgeBackgroundColor({color: colorCode});
  }

  window.loadError=function(){
      var errorMessage=createDiv();
      var errorText=createSpan();
      errorText.classList.add("error-text");
      var errorTextMessage=document.createTextNode("Error");
      errorText.appendChild(errorTextMessage);
      errorMessage.appendChild(errorText);
      document.getElementsByClassName("inner-container")[0].appendChild(errorMessage);
  }

window.initialLoad=function(){
    var container = createDiv();
    container.classList.add("container");
    var innercontainer = createDiv();
    innercontainer.classList.add("inner-container");
    var content=createDiv();
    container.appendChild(innercontainer);
    document.body.appendChild(container);
}

window.loadTopBar=function(){
    var titleBar=createDiv();
    titleBar.classList.add("titleDiv");
    var titleBarText=createSpan();
    var titleBarTextContent=document.createTextNode("GDPR Compliance Check");
    var titleURL=createDiv();
    titleURL.classList.add("titleURL");
    var titleURLText=createSpan();
    var titleURLTextContent=document.createTextNode(currUrl);
    titleURLText.appendChild(titleURLTextContent);
    titleURL.appendChild(titleURLText);
    titleBarText.appendChild(titleBarTextContent);
    titleBar.appendChild(titleBarText);
    document.getElementsByClassName("inner-container")[0].appendChild(titleBar);
    document.getElementsByClassName("inner-container")[0].appendChild(titleURL);
}

