// ==UserScript==
// @name         Check_MK - WATO Shortcut to services
// @namespace    http://openuserjs.org/users/ardiman
// @description  Generates icon which opens the host's services configuration.
// @description:de-DE Erstellt ein Icon, mit dem man schnell zur Service-Konfiguration des Hosts gelangt.
// @grant        none
// @homepage     https://github.com/ardiman/userscripts/tree/master/checkmkwatoshortcuttoservices
// @include      *check_mk/view.py?*
// @version      1.0.2
// @date         2014-11-09
// ==/UserScript==

(function() {
	var nodes = document.evaluate(
		"//td[@class='icons']/a[contains(@href,'&mode=edithost')]|//td[@class='tr icons']/a[contains(@href,'&mode=edithost')]",
		document,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);

	for(var i=0; i<nodes.snapshotLength; i++) {
		var thisNode = nodes.snapshotItem(i);
		var oAnchor = document.createElement("a");
		var oImg = oAnchor.appendChild(document.createElement("img"));
		oImg.setAttribute('class','icon');
		oImg.title = 'Open services of this host in WATO - the Check_MK Web Administration Tool';
		oImg.setAttribute('src', 'images/icon_services.png');
		oAnchor.href = thisNode.href.replace('&mode=edithost','&mode=inventory');
		thisNode.parentNode.insertBefore(oAnchor, thisNode);
	}

	var oWatoDiv = document.getElementById("wato");
	if (oWatoDiv !== null) {
		var oServDiv = oWatoDiv.cloneNode(true);
		oServDiv.id='cb_watoserv';
		oServDiv.setAttribute('style','display:none');
		oServDiv.firstChild.href = oWatoDiv.firstChild.href.replace('mode=edithost','mode=inventory');
		oServDiv.firstChild.firstChild.src = 'images/icon_services.png';
		oServDiv.firstChild.firstChild.nextSibling.nodeValue='Services';
		oWatoDiv.parentNode.insertBefore(oServDiv, oWatoDiv.nextSibling);
	}

})();
