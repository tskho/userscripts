// ==UserScript==
// @name         vBulletin - Full ignore
// @namespace    http://openuserjs.org/users/ardiman
// @description  Stops display of truncated posts from users on your ignore list.
// @description:de-DE  Entfernt gekürzte Beiträge von Benutzern auf der Ignorierliste komplett.
// @grant        GM_addStyle
// @homepage     https://github.com/ardiman/userscripts/tree/master/vbulletinfullignore
// @include      */showthread.php*
// @version      1.0.4
// @date         2014-11-09
// ==/UserScript==
 
(function (){
var filterkey = "?userlist=ignore&amp;do=removelist&amp;u=";
 
var allElements, thisElement;
allElements = document.getElementsByTagName('tr');
for (var i = 0; i < allElements.length; i++) {
  thisElement = allElements[i];
  if(thisElement.innerHTML.indexOf(filterkey)!=-1)
    {
    thisElement.parentNode.style.display = 'none';
    }
  }
 
// for new vBulletin 4.x try this:
GM_addStyle('li.postbitignored {display: none !important;}');
}());