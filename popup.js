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


console.log("Opened Popup JS");
var currUrl;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    currUrl = tabs[0].url;
    console.log("Current Link: "+currUrl);
    // $.getJSON( "database.json", function( json ) {
    //     console.log( "JSON Data received, name is " + json.domain.mainurl);
    //     if(currUrl.includes(json.domain.mainurl)){
    //         console.log("Enable it");
    //     }
    //     else{
    //         console.log("Disable it");
    //     }
    //   });
});
