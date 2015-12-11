// ==UserScript==
// @name         Addviews List
// @namespace    http://www.aglensmith.com/
// @version      1.0.1
// @description  Adds Additional views section to Zendesk Sidebar
// @author       A. Glen Smith
// @updateURL    https://raw.githubusercontent.com/aglensmith/UserScripts/master/addviews.js
// @match        https://americommerce.zendesk.com/agent/filters/*
// @grant        none
// @License      GNU General Public License
// ==/UserScript==
/* jshint -W097 */
'use strict';

//Add Views here
var viewsToAdd = [
    
    //View Text            //View Url
    ["Support Questions", "/agent/#/filters/70176788"],
    ["Questions I Answered", "/agent/#/filters/70176818"],
    ["My Questions", "/agent/filters/70176878"],

];

function AddSingleView(name, url) {

     //Get the UL that the view LIs are in
    var ul = document.getElementsByClassName("ember-view filters")[3];

    //Create necessary elements
    var li = document.createElement("li");
    var a = document.createElement("a");

    //Add content
    a.setAttribute("href", url);
    a.appendChild(document.createTextNode(name));

    //Append to DOM
    ul.appendChild(li);
    li.appendChild(a);  
}

function AddViews(views) {
    
    //Get the UL that the view LIs are in
    var ul = document.getElementsByClassName("ember-view filters")[3];

    //Add Header
    var header = document.createElement("div");
    header.appendChild(document.createTextNode("Additional Views"));
    header.setAttribute("class", "filter-group-heading");
    ul.appendChild(header);
    
    for (var i = 0; i < views.length; i++) {
        console.log(views[i][0]);
        AddSingleView(views[i][0], views[i][1]);
    }
}


//Wait for damn page to load
window.setTimeout(function() { AddViews(viewsToAdd); }, 8000 );
