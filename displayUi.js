window.onload=function(){
    initialLoad();
    loadTopContainer();
    loadBodyContainer();
  }

//   window.checkURL=function(){
//           $.ajax({
//             type: "GET",
//             url: "database.json", 
//             success: function(result) {
//                 for (var i in result) {
//                     if(currUrl.includes(result[i].domain.mainurl)){
//                         console.log("TRUE");
//                         loadTopBar();
//                         setBadge("ON","GREEN");
//                         console.log("IF: "+result[i].domain.mainurl);
//                         return;
//                     }
//                     else{
//                         console.log("FALSE");
                        
//                         setBadge("N/A","RED");
//                         console.log("ELSE: "+result[i].domain.mainurl);
//                     }
                    
//                 }        
//             }
//           });
//   }

//   window.setBadge=function(printValue,colorCode){
//     chrome.browserAction.setBadgeText({text: printValue});
//     chrome.browserAction.setBadgeBackgroundColor({color: colorCode});
//   }



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

window.loadTopContainer=function(){
    var topContainer=createDiv();
    topContainer.classList.add("top-container");
    document.getElementsByClassName("inner-container")[0].appendChild(topContainer);
    loadTopBar();
}


window.loadTopBar=function(){
    // var bg = chrome.extension.getBackgroundPage().
    // alert(bg.domainID);
    // domainID=bg.domainID;

    var titleBar=createDiv();
    titleBar.classList.add("titleDiv");
    var titleBarText=createSpan();
    var titleBarTextContent=document.createTextNode("GDPR Compliance Check");
    var titleURL=createDiv();
    titleURL.classList.add("titleURL");
    var titleURLText=createSpan();
    var titleURLTextContent=document.createTextNode(domainName);
    titleURLText.appendChild(titleURLTextContent);
    titleURL.appendChild(titleURLText);
    titleBarText.appendChild(titleBarTextContent);
    titleBar.appendChild(titleBarText);
    document.getElementsByClassName("top-container")[0].appendChild(titleBar);
    document.getElementsByClassName("top-container")[0].appendChild(titleURL);
}

window.loadBodyContainer=function(){
    var bodyContainer=createDiv();
    bodyContainer.classList.add("body-container");
    var chartContainer=createDiv();
    chartContainer.classList.add("chart-container");
    var infoContainer=createDiv();
    infoContainer.classList.add("info-container");
    bodyContainer.appendChild(chartContainer);
    bodyContainer.appendChild(infoContainer);
    document.getElementsByClassName("inner-container")[0].appendChild(bodyContainer);
    loadChart();
    loadInfo();
}

window.loadChart=function(){
    var chartInnerContainer=createDiv();
    chartInnerContainer.classList.add("chart-inner-container");
    var chartSection1=createDiv();
    chartSection1.classList.add("chart","chart1");
    var chartSection2=createDiv();
    chartSection2.classList.add("chart","chart2");
    var chartSection3=createDiv();
    chartSection3.classList.add("chart","chart3");


    var circle1=createCircle();
    circle1.classList.add("circle1");
    var circle2=createCircle();
    circle2.classList.add("circle2");
    var circle3=createCircle();
    circle3.classList.add("circle3");

    var circleInnerText1=createSpan();
    circleInnerText1.classList.add("circle-text");
    var circleInnerTextMessage1=document.createTextNode(" ");
    circleInnerText1.appendChild(circleInnerTextMessage1);
    circle1.appendChild(circleInnerText1);

    var circleInnerText2=createSpan();
    circleInnerText2.classList.add("circle-text");
    var circleInnerTextMessage2=document.createTextNode(" ");
    circleInnerText2.appendChild(circleInnerTextMessage2);
    circle2.appendChild(circleInnerText2);

    var circleInnerText3=createSpan();
    circleInnerText3.classList.add("circle-text");
    var circleInnerTextMessage3=document.createTextNode(" ");
    circleInnerText3.appendChild(circleInnerTextMessage3);
    circle3.appendChild(circleInnerText3);

    chartSection1.appendChild(circle1);
    chartSection2.appendChild(circle2);
    chartSection3.appendChild(circle3);

    chartInnerContainer.appendChild(chartSection1);
    chartInnerContainer.appendChild(chartSection2);
    chartInnerContainer.appendChild(chartSection3);
    document.getElementsByClassName("chart-container")[0].appendChild(chartInnerContainer);
}

window.loadInfo=function(){
    var infoInnerContainer=createDiv();
    infoInnerContainer.classList.add("info-inner-container");

    var infoSection1=createDiv();
    infoSection1.classList.add("info","info-section-1");
    var infoTitle1=createSpan();
    infoTitle1.classList.add("info-title");
    var infoTitleName1=document.createTextNode("Data Collection");
    infoTitle1.appendChild(infoTitleName1);
    infoSection1.appendChild(infoTitle1);

    var infoContentBlock1=createDiv();
    infoContentBlock1.classList.add("info-block");

    
    var infoContent1=createSpan();
    infoContent1.classList.add("info-content");
    var infoContentName1=document.createTextNode("This site doesn't collect any of your personal information");
    infoContent1.appendChild(infoContentName1);


    infoContentBlock1.appendChild(infoContent1);
    infoSection1.appendChild(infoContentBlock1);
    

    infoInnerContainer.appendChild(infoSection1);

    document.getElementsByClassName("info-container")[0].appendChild(infoInnerContainer);

}

window.fillChart=function(){
    
}