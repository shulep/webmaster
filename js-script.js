/*
Test task for AdCash
Created by Kirill Shulepov
*/


window.onload = function() {
	
	//Read the ?clickid=123 parameter from url
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const clickid = urlParams.get('clickid');
	console.log(clickid);
	
	// Add the offer link to all hrefs with classname "btn" and append clickid parameter
	var link = document.getElementsByClassName("btn");
	
	for(var i = 0; i < link.length; i++) {
		link[i].addEventListener('click', function(e) {
			for(var y = 0; y < link.length; y++) {
				//Setting the target attribute to open link in the same window
				link[y].setAttribute("target", "_self");
				// Changing the href attribute value to offer link with clickid patameter 
				link[y].setAttribute("href", "https://track.ultravpn.com/5d02892a4faea/click/" + clickid);
			}
		});
	}
}