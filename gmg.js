window.onload = function() {
	var divs = document.getElementsByTagName("div");
	
	
	//Hey div y u no have class? fvck u
	for(var i = 0; i < divs.length; i++){
	   
	   //I will find u n fvck u
	   if(divs[i].style.backgroundImage == "url(https://www.google.com.ph/images/srpr/logo11w.png)"){
			//fvck u div
			divs[i].style.backgroundImage = "url('http://s28.postimg.org/i2fmultvh/gmg.png')";
	   }
	   
	   //The PILIPINAS I can't find you. NINJA MOVES
	   if(divs[i].style.color != ""){		
		divs[i].style.left = "100px";
		
	   }

	   
	}
		
	//I thought there was only 1 span?	
	document.getElementsByClassName("gb_Sa")[3].style.backgroundImage = "url(http://s9.postimg.org/bll7yvkfv/lolz.png)";
	document.getElementsByClassName("gb_Sa")[3].style.backgroundSize = "88px";
		
}