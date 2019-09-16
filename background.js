// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


// chrome.runtime.onInstalled.addListener(function() {
//   // Replace all rules ...
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     // With a new rule ...
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         // That fires when a page's URL contains a 'g' ...
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { urlContains: 'deakin' },
//           })
//         ],
//         // And shows the extension's page action.
//         actions: [ new chrome.declarativeContent.ShowPageAction() ]
//       }
//     ]);
//   });
// });

//Checks if the plugin is usable based on address

// chrome.runtime.onMessage.addListener(function(req, sender) {
//   chrome.storage.local.set({'address': req.address})
//   chrome.pageAction.show(sender.tab.id);
//   chrome.pageAction.setTitle({tabId: sender.tab.id, title: req.address});
// });
var currUrl="about:blank";
var allUrls;
var data;
var headerFlag=0;
var status=0;
var domainID,domainName,entireBlockResult;
console.log("Pre-Change Status is: "+status);
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      document.write('<scr'+'ipt type="text/javascript" src="newDatabase.json" ></scr'+'ipt>');
      document.write('<scr'+'ipt type="text/javascript" src="popup.js" ></scr'+'ipt>');
      document.write('<scr'+'ipt type="text/javascript" src="jquery.js" ></scr'+'ipt>');
  });
  });

window.loadHeader=function(){
    if(headerFlag==0){
        document.write('<scr'+'ipt type="text/javascript" src="newDatabase.json" ></scr'+'ipt>');
        // document.write('<scr'+'ipt type="text/javascript" src="displayUi.js" ></scr'+'ipt>');
        document.write('<scr'+'ipt type="text/javascript" src="jquery.js" ></scr'+'ipt>');
        headerFlag=1;
    }

}

window.checkURL=function(currUrl){
    $.ajax({
      type: "GET",
      url: "newDatabase.json", 
      success: function(result) {
          for (var i in result) {
              if(currUrl.includes(result[i].domain.mainurl)){
                  entireBlockResult=result[i];
                  if(result[i].complianceStatus>=60){
                    // chrome.browserAction.setBadgeText({text: " "}); 
                    // chrome.browserAction.setBadgeBackgroundColor({ color: "GREEN" });
                    chrome.browserAction.setTitle({title :"This site is SAFE"});
                    chrome.browserAction.setIcon({path: "images/safelogo16.png"});

                  }
                  else if((result[i].complianceStatus<60)&(result[i].complianceStatus>=40)){
                    // chrome.browserAction.setBadgeText({text: " "}); 
                    // chrome.browserAction.setBadgeBackgroundColor({ color: "ORANGE" });
                    chrome.browserAction.setTitle({title :"This site has WARNINGS. Please click to view possible warnings"});
                    chrome.browserAction.setIcon({path: "images/warninglogo16.png"});

                  }
                  else if((result[i].complianceStatus<40)&(result[i].complianceStatus>=0)){
                    // chrome.browserAction.setBadgeText({text: " "}); 
                    // chrome.browserAction.setBadgeBackgroundColor({ color: "RED" });
                    chrome.browserAction.setTitle({title :"Be CAUTIOUS! This site's GDPR is misleading."});
                    chrome.browserAction.setIcon({path: "images/cautionlogo16.png"});

                  }
                //   chrome.browserAction.setBadgeText({text: "ON"}); 
                //   chrome.browserAction.setBadgeBackgroundColor({ color: "GREEN" });
                  status=1;
                  domainID=result[i].id;
                  domainName=result[i].domain.name;
                  console.log(entireBlockResult);
                //   console.log("Post-Change Status is: "+status);
                //   loadTopBar();
                  return;
              }
              else{
                //   chrome.browserAction.setBadgeText({text: "OFF"}); 
                  chrome.browserAction.setBadgeBackgroundColor({ color: "GRAY" });
                  chrome.browserAction.setIcon({path: "images/logo16.png"});
                  chrome.browserAction.setTitle({title :"We haven't processed Privacy policy of this website!"});


                  status=0;
                  domainID=0;
                  domainName="N/A";
                  console.log("Post-Change Status is: "+status);

              }
              
          }        
      }
    });
}
  
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   loadHeader();
    if (changeInfo.url) {
        currUrl=changeInfo.url;
        checkURL(currUrl);
      }

});


    // currUrl = tabs[0].url;
   // console.log("Current Link: "+currUrl);
    


    // loadJSON('database.json',
    //      function(data) {
    //         console.log(data); 
    //         // console.log(String(data.domain.mainurl));
    //         console.log(String(currUrl));
    //         // if(String(currUrl).includes(String(data.domain.mainurl))){
    //         //   console.log("True");
    //         //   chrome.browserAction.setBadgeText({text: 'ON'});
    //         //   chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    //         // }
    //         // else{
    //         //   console.log("False");
    //         //   chrome.browserAction.setBadgeText({text: 'OFF'});
    //         //   chrome.browserAction.setBadgeBackgroundColor({color: 'RED'});
    //         // }
    //       },
    //      function(xhr) { console.error(xhr); }
    // );
  
      // console.log( "JSON Data received, name is " + json.id);
 

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}