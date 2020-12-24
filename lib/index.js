
	window.onscroll = function() { 
		if (document.body.scrollTop > 120|| 
				document.documentElement.scrollTop > 120) { 
			// document.getElementById("navlist").style.opacity= 1; 
			document.getElementById("navlist").style.display= 'flex'; 
		} 	
		else { 
            document.getElementById("navlist").style.display='none'; 
		} 
	} 


// var aboutContainer = document.getElementsByClassName("about-container");
var aboutCard = document.getElementsByClassName("about-card");
var aboutCardImage = document.getElementsByClassName("about-card-img");
var aboutCarddetails = document.getElementsByClassName("about-card-details");

// aboutCard[0].addEventListener("mousemove",(e) => {
// 	let xAxis = (window.innerWidth/2- e.pageX)/40;
// 	let yAxis = (window.innerHeight/2- e.pageY)/40; 
// 	aboutCard[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// 	aboutCardImage[0].style.transform = "translateZ(100px)";
// 	aboutCarddetails[0].style.transform = "translatez(75px)";
// });
// aboutCard[0].addEventListener("mouseenter", (e)=>{
// 	aboutCard[0].style.transition="none";
// });
// aboutCard[0].addEventListener("mouseleave", (e)=>{
// 	// aboutCard.style.transition = "all 0.5s ease";
// 	aboutCard[0].style.transform = `rotateY(0deg) rotateX(0deg)` ;
// 	aboutCardImage[0].style.transform = "translateZ(0px)";
// 	aboutCarddetails[0].style.transform = "translatez(0px)";
// });