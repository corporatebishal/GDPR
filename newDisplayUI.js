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
  
    var overallCompliance=createDiv();
    overallCompliance.classList.add("compliance-container");
   var overallComplianceValue=fetchFromDB('overallComplianceValue');

   var complianceText1=createSpan();
   var complianceTextContent=document.createTextNode(entireResult.complianceStatus);
//    addFormatting('color',complianceText1,entireResult.complianceStatus);
   var topContainerAgain=document.getElementsByClassName("top-container")[0];
   complianceText1.appendChild(complianceTextContent);
   overallCompliance.appendChild(complianceText1);


   var complianceText2=createSpan();
   var complianceTextContent=document.createTextNode("% Compliant");
//    addFormatting('color',complianceText2,entireResult.complianceStatus);
   addFormatting('bgColor',topContainerAgain,entireResult.complianceStatus);

   complianceText2.appendChild(complianceTextContent);
   overallCompliance.appendChild(complianceText2);
   

    document.getElementsByClassName("top-container")[0].appendChild(titleBar);
    document.getElementsByClassName("top-container")[0].appendChild(titleURL);
    document.getElementsByClassName("top-container")[0].appendChild(overallCompliance);
}


window.loadBodyContainer=function(){
    var bodyContainer=createDiv();
    bodyContainer.classList.add("body-container");
    var chartContainer=createDiv();
    chartContainer.classList.add("chart-container");
    var infoContainer=createDiv();
    infoContainer.classList.add("info-container");
    //bodyContainer.appendChild(chartContainer);
    bodyContainer.appendChild(infoContainer);
    document.getElementsByClassName("inner-container")[0].appendChild(bodyContainer);
    //loadChart();
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

   // chartSection1.appendChild(circle1);
    // chartSection2.appendChild(circle2);
    // chartSection3.appendChild(circle3);

    //chartInnerContainer.appendChild(chartSection1);
    //chartInnerContainer.appendChild(chartSection2);
    //chartInnerContainer.appendChild(chartSection3);
   // document.getElementsByClassName("chart-container")[0].appendChild(chartInnerContainer);
}

window.loadInfo=function(){
    var infoInnerContainer=createDiv();
    infoInnerContainer.classList.add("info-inner-container");



    var infoSection1=createDiv();
    infoSection1.classList.add("info","info-section-1");
    var info1=entireResult.complianceDetails.identificationDetails;
    var icon1=createIMG("images/safeIcon.png");
    var info1Status=applyInfoStatus(icon1,info1);
    icon1.classList.add('statusIcon');
    var infoTitle1=createDiv();
    infoTitle1.classList.add("info-title");
    var infoTitle1Text=createSpan();
    infoTitle1Text.classList.add("info-title-text");
    var infoTitleName1=document.createTextNode("Identification Details");
    infoTitle1Text.appendChild(infoTitleName1);
    infoTitle1.appendChild(icon1);
    infoTitle1.appendChild(infoTitle1Text);
    infoSection1.appendChild(infoTitle1);


    var infoSection2=createDiv();
    infoSection2.classList.add("info","info-section-2");
    var info2=entireResult.complianceDetails.personalDataObtainedFromOtherSource;
    var icon2=createIMG("images/safeIcon.png");
    var info2Status=applyInfoStatus(icon2,info2);
    icon2.classList.add('statusIcon');
    var infoTitle2=createDiv();
    infoTitle2.classList.add("info-title");
    var infoTitle2Text=createSpan();
    infoTitle2Text.classList.add("info-title-text");
    var infoTitleName2=document.createTextNode("Personal Data Obtained from Other Source");
    infoTitle2Text.appendChild(infoTitleName2);
    infoTitle2.appendChild(icon2);
    infoTitle2.appendChild(infoTitle2Text);
    infoSection2.appendChild(infoTitle2);

    var infoSection3=createDiv();
    infoSection3.classList.add("info","info-section-3");
    var info3=entireResult.complianceDetails.personalDataProcessing;
    var icon3=createIMG("images/safeIcon.png");
    var info3Status=applyInfoStatus(icon3,info3);
    icon3.classList.add('statusIcon');
    var infoTitle3=createDiv();
    infoTitle3.classList.add("info-title");
    var infoTitle3Text=createSpan();
    infoTitle3Text.classList.add("info-title-text");
    var infoTitleName3=document.createTextNode("Personal Data Processing");
    infoTitle3Text.appendChild(infoTitleName3);
    infoTitle3.appendChild(icon3);
    infoTitle3.appendChild(infoTitle3Text);
    infoSection3.appendChild(infoTitle3);

    var infoSection4=createDiv();
    infoSection4.classList.add("info","info-section-4");
    var info4=entireResult.complianceDetails.dataTransfers;
    var icon4=createIMG("images/safeIcon.png");
    var info4Status=applyInfoStatus(icon4,info4);
    icon4.classList.add('statusIcon');
    var infoTitle4=createDiv();
    infoTitle4.classList.add("info-title");
    var infoTitle4Text=createSpan();
    infoTitle4Text.classList.add("info-title-text");
    var infoTitleName4=document.createTextNode("Data Transfers");
    infoTitle4Text.appendChild(infoTitleName4);
    infoTitle4.appendChild(icon4);
    infoTitle4.appendChild(infoTitle4Text);
    infoSection4.appendChild(infoTitle4);

    var infoSection5=createDiv();
    infoSection5.classList.add("info","info-section-5");
    var info5=entireResult.complianceDetails.rightsAndConsents;
    var icon5=createIMG("images/safeIcon.png");
    var info5Status=applyInfoStatus(icon5,info5);
    icon5.classList.add('statusIcon');
    var infoTitle5=createDiv();
    infoTitle5.classList.add("info-title");
    var infoTitle5Text=createSpan();
    infoTitle5Text.classList.add("info-title-text");
    var infoTitleName5=document.createTextNode("Rights and Consents");
    infoTitle5Text.appendChild(infoTitleName5);
    infoTitle5.appendChild(icon5);
    infoTitle5.appendChild(infoTitle5Text);
    infoSection5.appendChild(infoTitle5);


    var infoContentBlock1=createDiv();
    infoContentBlock1.classList.add("info-block");
     var infoContent1=createSpan();
     infoContent1.classList.add("info-content");
     var infoContentName1=document.createTextNode("This website is "+info1+"% compliant with regards to obtaining the Identification Details.");
     infoContent1.appendChild(infoContentName1);

     var infoContentBlock2=createDiv();
    infoContentBlock2.classList.add("info-block");
     var infoContent2=createSpan();
     infoContent2.classList.add("info-content");
     var infoContentName2=document.createTextNode("This website is "+info2+"% compliant with regards to obtaining Personal Data from Other Source.");
     infoContent2.appendChild(infoContentName2);

     var infoContentBlock3=createDiv();
    infoContentBlock3.classList.add("info-block");
     var infoContent3=createSpan();
     infoContent3.classList.add("info-content");
     var infoContentName3=document.createTextNode("This website is "+info3+"% compliant with regards to Processing Personal Data.");
     infoContent3.appendChild(infoContentName3);

     var infoContentBlock4=createDiv();
    infoContentBlock4.classList.add("info-block");
     var infoContent4=createSpan();
     infoContent4.classList.add("info-content");
     var infoContentName4=document.createTextNode("This website is "+info4+"% compliant with regards to Data Transfers.");
     infoContent4.appendChild(infoContentName4);

     var infoContentBlock5=createDiv();
    infoContentBlock5.classList.add("info-block");
     var infoContent5=createSpan();
     infoContent5.classList.add("info-content");
     var infoContentName5=document.createTextNode("This website is "+info5+"% compliant with regards to Rights and Consents.");
     infoContent5.appendChild(infoContentName5);


    infoContentBlock1.appendChild(infoContent1);
    infoSection1.appendChild(infoContentBlock1);
    infoContentBlock2.appendChild(infoContent2);
    infoSection2.appendChild(infoContentBlock2);
    infoContentBlock3.appendChild(infoContent3);
    infoSection3.appendChild(infoContentBlock3);
    infoContentBlock4.appendChild(infoContent4);
    infoSection4.appendChild(infoContentBlock4);
    infoContentBlock5.appendChild(infoContent5);
    infoSection5.appendChild(infoContentBlock5);
    infoInnerContainer.appendChild(infoSection1);
    infoInnerContainer.appendChild(infoSection2);
    infoInnerContainer.appendChild(infoSection3);
    infoInnerContainer.appendChild(infoSection4);
    infoInnerContainer.appendChild(infoSection5);

    document.getElementsByClassName("info-container")[0].appendChild(infoInnerContainer);


}

window.fillChart=function(){
    
}