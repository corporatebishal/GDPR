// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

// console.log("Opened Popup JS");
// var currUrl;
// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     currUrl = tabs[0].url;
//     console.log("Current Link: "+currUrl);
//     // $.getJSON( "database.json", function( json ) {
//     //     console.log( "JSON Data received, name is " + json.domain.mainurl);
//     //     if(currUrl.includes(json.domain.mainurl)){
//     //         console.log("Enable it");
//     //     }
//     //     else{
//     //         console.log("Disable it");
//     //     }
//     //   });
// });
var domainID,domainName,entireResult;

document.addEventListener('DOMContentLoaded', function () {
    var bg = chrome.extension.getBackgroundPage();
    domainID = bg.domainID;
    domainName=bg.domainName;
    entireResult=bg.entireBlockResult;
    //alert(domainName);
//    alert(domainID);
 });


//  var coll = document.getElementsByClassName("info-section-1");
//  var i;
 
//  for (i = 0; i < coll.length; i++) {
//    coll[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var content = this.nextElementSibling;
//      if (content.style.maxHeight){
//        content.style.maxHeight = null;
//      } else {
//        content.style.maxHeight = content.scrollHeight + "px";
//      } 
//    });
//  }

//  var classname = document.getElementsByClassName("info-title");
//  document.getElementsByClassName("info-title")[0].addEventListener("click", function(){
//     document.getElementsByClassName("info-block").style.display = "block";
//   });
