window.onload = function() {
	var date = new Date();
	var day = date.getDate();
	var year = date.getFullYear();
	var monthList = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec');
	var month = date.getMonth();
    
    
	var classList = document.getElementsByClassName("date_num");
	
	for (var i = 0; i < classList.length; i++) {
		classList[i].innerHTML = day + ' ' + monthList[month] + ' ' + year;
	}

   // document.getElementsByClassName('date_num').innerHTML = day + ' ' + monthList[month] + ' ' + year;
}

