// Function to change menu style, from 3 lines to a cross
// And to toggle menu, open and close menu
// function alternate classes
function toggle_menu(menu_style) {

	menu_style.classList.toggle("mudar");
    var menu_type = document.getElementById("id_menu");
    var section_size = document.getElementsByClassName("section").length;

    document.getElementById("header").style.backgroundColor = "rgba(255,0,0,0.7)";


    if (window.innerWidth <= 768)
    {
    	if (window.innerWidth <= 580) 
	    {	
			if (menu_type.className === "menu") 
			{
			    menu_type.className += " responsive";
			    document.getElementById("header").style.height = "calc(100% - 35px)";
			     document.getElementById("header").style.overflowY = "auto";
			    document.getElementById("content").style.top = "100%";
			    document.getElementById("side_menu").style.display = "none";
			    for(var i = 0; i < section_size; i++)
			   	 	document.getElementsByClassName("section")[i].style.display = "none";
			} else 
			{
			    menu_type.className = "menu";
			    document.getElementById("header").style.height = "45px";
			    document.getElementById("header").style.backgroundColor = "rgba(255,0,0,0.5)";
			    document.getElementById("header").style.overflowY = "hidden";
			    document.getElementById("content").style.height = "calc(100% - 80px)";
			    document.getElementById("content").style.top = "45px";
			    document.getElementById("side_menu").style.display = "table";
			    for(var i = 0; i < section_size; i++)
			    	document.getElementsByClassName("section")[i].style.display = "block";
			}
		} 
		else
		{
			if (menu_type.className === "menu") 
			{
				menu_type.className += " responsive";
				document.getElementById("header").style.height = "calc(100% - 35px)";
				document.getElementById("header").style.overflowY = "auto";
				document.getElementById("content").style.top = "100%";
				document.getElementById("side_menu").style.display = "none";
				for(var i = 0; i < section_size; i++)
			   	 	document.getElementsByClassName("section")[i].style.display = "none";

			} else 
			{
		        menu_type.className = "menu";
		        document.getElementById("header").style.height = "55px";
		        document.getElementById("header").style.backgroundColor = "rgba(255,0,0,0.5)";
		        document.getElementById("header").style.overflowY = "hidden";
		        document.getElementById("content").style.height = "calc(100% - 90px)";
		        document.getElementById("content").style.top = "55px";
		        document.getElementById("side_menu").style.display = "table";
		         for(var i = 0; i < section_size; i++)
			    	document.getElementsByClassName("section")[i].style.display = "block";
			}
		}
    }
}

var ini_pos = 0;

function menuEffect()
{
	var curr_pos = document.getElementById('content').scrollTop;

	/* If scroll down */
	if(curr_pos > ini_pos)
	{
		document.getElementById("header").style.left = "-100%";
		document.getElementById("footer").style.right = "-100%";
	    document.getElementById("content").style.height = "100%";
	    document.getElementById("content").style.top = "0px";
	    document.getElementById("bar").style.height = "7px";
	}	
	else
	{
		document.getElementById("header").style.left = "0px";
		document.getElementById("footer").style.right = "0px";
		document.getElementById("bar").style.height = "0px";


		if (window.innerWidth <= 580) 
	    {		
		 	document.getElementById("content").style.top = "45px";
	    	document.getElementById("content").style.height = "calc(100% - 80px)";		
	    }
	    else
	    {
		 	document.getElementById("content").style.top = "55px";
	    	document.getElementById("content").style.height = "calc(100% - 90px)";
	    }
		
	}

	ini_pos = curr_pos;
}

/* ----------------------------------------------- HOME ---------------------------------------------------------*/
function homeEffects()
{
	document.getElementById('homePageTitle').style.fontSize = "80px";
	document.getElementById('intro').style.fontSize = "30px";
	
	if(window.innerWidth <= 768)
    {
    	if (window.innerWidth <= 580) 
	    {	
	    	document.getElementById('homePageTitle').style.fontSize = "60px";
			document.getElementById('intro').style.fontSize = "22px";
	    }
	    else
	    {
	    	document.getElementById('homePageTitle').style.fontSize = "80px";
	    	document.getElementById('intro').style.fontSize = "25px";
	    }
	}

	/* Skills section will appear after 1 second */
	setTimeout(function() {
	  document.getElementById('skills').style.display = "block";
	}, 1000);
}


function running() {

	var front = document.getElementById('front');
	var other = document.getElementById('other');
	var curr = document.getElementById('content');
	var front_dist = front.offsetTop;
	var other_dist = other.offsetTop;
	var curr_pos = curr.scrollTop;

	var html = document.getElementById('html');
	var css = document.getElementById('css');
	var js = document.getElementById('js');
	var angular = document.getElementById('angularJS');
	var jquery = document.getElementById('jquery');
	var java = document.getElementById('java');
	var c = document.getElementById('c');
	var cPlus = document.getElementById('cPlus');
	var sql = document.getElementById('sql');
	var php = document.getElementById('php');


	if(curr_pos === 0)
	{
		html.style.marginLeft = "0%";
		css.style.marginLeft = "0%";
		js.style.marginLeft = "0%";
		angular.style.marginLeft = "0%";
		jquery.style.marginLeft = "0%";
		java.style.marginLeft = "0%";
		c.style.marginLeft = "0%";
		cPlus.style.marginLeft = "0%";
		sql.style.marginLeft = "0%";
		php.style.marginLeft = "0%";
	}

	if((curr_pos+200) > front_dist)
	{
		html.style.marginLeft = "70%";
		css.style.marginLeft = "75%";
		js.style.marginLeft = "60%";
		angular.style.marginLeft = "50%";
		jquery.style.marginLeft = "50%";

		if (window.innerWidth <= 960) 
	    {
	    	java.style.marginLeft = "60%";
			c.style.marginLeft = "50%";
			cPlus.style.marginLeft = "50%";
			sql.style.marginLeft = "60%";
			php.style.marginLeft = "50%";
	    }
	}
	if((curr_pos+300) > other_dist)
	{
		java.style.marginLeft = "60%";
		c.style.marginLeft = "50%";
		cPlus.style.marginLeft = "50%";
		sql.style.marginLeft = "60%";
		php.style.marginLeft = "50%";
	}
}

/* -----------------------------------------------------------About me -------------------------------------------------------*/
function checkBrowser(){
    if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        document.getElementsByClassName("timeline")[0].style.backgroundAttachment = "scroll";
        document.getElementById("downloads").style.backgroundAttachment = "scroll";
        
    }
}

function show_hide(id_text)
{
	var text = document.getElementById(id_text);


	if(text.style.opacity == "1")
	{
		
		text.style.opacity = "0";
		text.style.display = "none";
	}
	else
	{
	
		text.style.opacity = "1";	
		text.style.display = "block";
	}
}

/* -------------------------------------------------------- Projects ----------------------------------------------------*/
function projectEffects()
{
	var contentId = document.getElementById("content");
	var progressBar = document.getElementById("bar");
	var resume = document.getElementById("resumeMod");
	var final = document.getElementById("finalMod");
	var prob = document.getElementById("probMod");
	var benfica = document.getElementById("benficaMod");
	var portugal = document.getElementById("portugalMod");
	var cg1 = document.getElementById("cg1Mod");
	var cg2 = document.getElementById("cg2Mod");

	var resume_dist = resume.offsetTop;
	var final_dist = final.offsetTop;
	var prob_dist = prob.offsetTop;
	var benfica_dist = benfica.offsetTop;
	var portugal_dist = portugal.offsetTop;
	var cg1_dist = cg1.offsetTop;
	var cg2_dist = cg2.offsetTop;

	resume.style.opacity = "1";
	final.style.opacity = "1";

	contentId.onscroll = function()
	{
		menuEffect();

		var curr_pos = document.getElementById('content').scrollTop+400;
		if(curr_pos > prob_dist)
			prob.style.opacity = "1";
		if(curr_pos > benfica_dist)
			benfica.style.opacity = "1";
		if(curr_pos > portugal_dist)
			portugal.style.opacity = "1";
		if(curr_pos > cg1_dist)
			cg1.style.opacity = "1";
		if(curr_pos > cg2_dist)
			cg2.style.opacity = "1";

		if(curr_pos == 400){
			prob.style.opacity = "0";
			benfica.style.opacity = "0";
			portugal.style.opacity = "0";
			cg1.style.opacity = "0";
			cg2.style.opacity = "0";
		}
		var contentHeight = contentId.scrollHeight;
		var windowHeight = window.innerHeight;
		var percentage = ((curr_pos-400) / (contentHeight - windowHeight))*100;
		progressBar.style.width = percentage + '%';
	}
}

function openBox(id)
{
	document.getElementById(id).style.width = "100%";
	document.getElementById(id).style.height = "100%";
	document.getElementById("header").style.left = "-100%";
	document.getElementById("footer").style.right = "-100%";
	document.getElementById("content").style.overflowY = "hidden";
	document.getElementById("bar").style.height = "0px";
}

function closeBox(id)
{
	document.getElementById(id).style.width = "0%";
	document.getElementById(id).style.height = "0%";
	document.getElementById("header").style.left = "0%";
	document.getElementById("footer").style.right = "0%";
	document.getElementById("content").style.overflowY = "scroll";
	if (window.innerWidth <= 580) 
    {		
	 	document.getElementById("content").style.top = "45px";
    	document.getElementById("content").style.height = "calc(100% - 80px)";		
    }
    else
    {
	 	document.getElementById("content").style.top = "55px";
    	document.getElementById("content").style.height = "calc(100% - 90px)";
    }
}

/* Open menu in mobile source code pages */
function openPages_menu(id){

	var section = document.getElementById(id);
	var span = section.getElementsByTagName('span');
	var menus = section.getElementsByTagName('ul');
	var menu = menus[0].id;
	var open = span[0].id;
	var close = span[1].id;

	document.getElementById(menu).style.maxHeight ="60%";
	document.getElementById(menu).style.overflow = "auto";
	document.getElementById(open).style.display = "none";
	document.getElementById(close).style.display = "inline";
}

/* Close menu in mobile source code pages */
function closePages_menu(id){

	var section = document.getElementById(id);
	var span = section.getElementsByTagName('span');
	var menus = section.getElementsByTagName('ul');
	var menu = menus[0].id;
	var open = span[0].id;
	var close = span[1].id;
	document.getElementById(menu).style.maxHeight = "0%";
	document.getElementById(menu).style.overflow = "hidden";
	document.getElementById(open).style.display = "inline";
	document.getElementById(close).style.display = "none";
}

// Open and Close source code
function openCode(id_section, code){

	var section = document.getElementById(id_section);
	var iframe = section.getElementsByTagName('iframe');
	var span = section.getElementsByTagName('span');
	var open = span[0].id;
	var close = span[1].id;
	var menus = section.getElementsByTagName('ul');
	var menu = menus[0].id;
	var list = section.getElementsByTagName('li');
	
	for(var i = 0; i < iframe.length; i++)
	{
		if(iframe[i].id != code)
		{
			document.getElementById(iframe[i].id).style.height = "0%";
			document.getElementById(list[i].id).style.borderBottom = "1px solid rgba(255,255,255,0.2)";
		}
		else {
			document.getElementById(list[i].id).style.borderBottom = "3px solid rgba(255,255,255,0.7)";
		}
	} 

	document.getElementById(code).style.height = "100%";
	document.getElementById(code).src = links[code];

	// Just for mobile version
	if(window.innerWidth <= 768)
	{
		document.getElementById(menu).style.maxHeight = "0px";
		document.getElementById(open).style.display = "inline";
		document.getElementById(close).style.display = "none";	
	}
}

// ---------------------------------------------------- Bachelor ------------------------------------------------------------

function moveRight(page)
{
	// First section
	if(page == "uab_section")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateY(90deg)";

		setTimeout(function() {
	  		document.getElementById("uab_text").style.transform = "perspective(1000px) rotateY(0deg) ";
		}, 700);	
	}

	if(page == "uab_text")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateX(90deg)";

		setTimeout(function() {
	  		document.getElementById("cs_section").style.transform = "perspective(1000px) rotateX(0deg) ";
		}, 700);
		document.getElementById("uni_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("cs_logo").style.backgroundColor = "rgba(255,0,0,0.5)";
		document.getElementById("grades_logo").style.backgroundColor = "rgba(0,0,0,0)";
	}

	// Second section
	if(page == "cs_section")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateY(90deg)";

		setTimeout(function() {
	  		document.getElementById("cs_text").style.transform = "perspective(1000px) rotateY(0deg) ";
		}, 700);	
	}

	// Third section
	if(page == "cs_text")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateX(90deg)";

		setTimeout(function() {
	  		document.getElementById("grades_section").style.transform = "perspective(1000px) rotateX(0deg) ";
		}, 700);
		document.getElementById("uni_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("cs_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("grades_logo").style.backgroundColor = "rgba(255,0,0,0.5)";
	}

	
}

function moveLeft(page)
{
	if(page == "uab_text")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateY(90deg)";

		setTimeout(function() {
	  		document.getElementById("uab_section").style.transform = "perspective(1000px) rotateY(0deg) ";
		}, 700);	
	}

	if(page == "cs_section")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateX(90deg)";

		setTimeout(function() {
	  		document.getElementById("uab_text").style.transform = "perspective(1000px) rotateX(0deg) ";
		}, 700);
		document.getElementById("cs_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("uni_logo").style.backgroundColor = "rgba(255,0,0,0.5)";
		document.getElementById("grades_logo").style.backgroundColor = "rgba(0,0,0,0)";
	}

	if(page == "cs_text")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateY(90deg)";

		setTimeout(function() {
	  		document.getElementById("cs_section").style.transform = "perspective(1000px) rotateY(0deg)";
		}, 700);	
	}

	if(page == "grades_section")
	{
		document.getElementById(page).style.transform = "perspective(1000px) rotateX(90deg)";

		setTimeout(function() {
	  		document.getElementById("cs_text").style.transform = "perspective(1000px) rotateX(0deg) ";
		}, 700);
		document.getElementById("cs_logo").style.backgroundColor = "rgba(255,0,0,0.5)";
		document.getElementById("uni_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("grades_logo").style.backgroundColor = "rgba(0,0,0,0)";
	}
}

function moveTo(page)
{

	if(page.id == "uni_logo")
	{
		document.getElementById("cs_section").style.transform = "perspective(1000px) rotateX(90deg)";
		document.getElementById("cs_text").style.transform = "perspective(1000px) rotateY(90deg)";
		document.getElementById("uab_text").style.transform = "perspective(1000px) rotateY(90deg)";
		document.getElementById("grades_section").style.transform = "perspective(1000px) rotateX(90deg)";

		setTimeout(function() {
	  		document.getElementById("uab_section").style.transform = "perspective(1000px) rotateY(0deg) ";
		}, 700);
	  	document.getElementById("uni_logo").style.backgroundColor = "rgba(255,0,0,0.5)";
		document.getElementById("cs_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("grades_logo").style.backgroundColor = "rgba(0,0,0,0)";
	}

	if(page.id == "cs_logo")
	{
		document.getElementById("uab_section").style.transform = "perspective(1000px) rotateX(90deg)";
		document.getElementById("uab_text").style.transform = "perspective(1000px) rotateY(90deg)";
		document.getElementById("cs_text").style.transform = "perspective(1000px) rotateY(90deg)";
		document.getElementById("grades_section").style.transform = "perspective(1000px) rotateX(90deg)";

		setTimeout(function() {
	  		document.getElementById("cs_section").style.transform = "perspective(1000px) rotateY(0deg) ";
		}, 700);
	  	document.getElementById("cs_logo").style.backgroundColor = "rgba(255,0,0,0.5)";
		document.getElementById("uni_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("grades_logo").style.backgroundColor = "rgba(0,0,0,0)";
	}


	if(page.id == "grades_logo")
	{
		document.getElementById("uab_section").style.transform = "perspective(1000px) rotateY(90deg)";
		document.getElementById("cs_section").style.transform = "perspective(1000px) rotateX(90deg)";
		document.getElementById("cs_text").style.transform = "perspective(1000px) rotateY(90deg)";
		document.getElementById("uab_text").style.transform = "perspective(1000px) rotateY(90deg)";

		setTimeout(function() {
	  		document.getElementById("grades_section").style.transform = "perspective(1000px) rotateY(0deg) ";
		}, 700);
	  	document.getElementById("uni_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("cs_logo").style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById("grades_logo").style.backgroundColor = "rgba(255,0,0,0.5)";
	}
}

// ********** AngularJS ****************

 angular.module('grades', []).controller('myGrades', function($scope) {
 	$scope.grades = [
 		{name: 'Linear Algebra', grade: 10},
 		{name: 'Computer Architecture', grade: 12},
 		{name: 'Calculus', grade: 18},
 		{name: 'Programming', grade: 13},
 		{name: 'Multimedia Systems', grade: 14},
 		{name: 'Systems Analysis', grade: 13},
 		{name: 'Probability and Statistical Elements', grade: 10},
 		{name: 'Discrete Math', grade: 10},
 		{name: 'Object-oriented programming', grade: 16},
 		{name: 'Operating Systems', grade: 13},
 		{name: 'General Physics', grade: 14},
 		{name: 'Programming Languages', grade: 13},
 		{name: 'Basics of Database', grade: 12},
 		{name: 'Languages and Computation', grade: 14},
 		{name: 'Networking Systems', grade: 14},
 		{name: 'Software Development', grade: 15},
 		{name: 'Data Structures and Fundamental Algorithms', grade: 12},
 		{name: 'Introduction to Artificial Intelligence', grade: 11},
 		{name: 'Operational Investigation', grade: 16},
 		{name: 'Web Services and Systems', grade: 15},
 		{name: 'CG', grade: 16},
 		{name: 'Data Structures and Advanced Algorithms', grade: 16},
 		{name: 'Computer Project Management', grade: 18},
 		{name: 'Computer Numerical', grade: 18},
 		{name: 'Systems and Database Management', grade: 14},
 		{name: 'Administration of Computer Systems', grade: 15},
 		{name: 'Compilation', grade: 17},
 		{name: 'Reasoning and Representation of Knowledge', grade: 18},
 		{name: 'Distributed Systems', grade: 16},
 		{name: 'Final Project', grade: 19},
 	];

 	$scope.propertyName = 'grade';
 	$scope.reverse = true;
 	$scope.sortBy = function(propertyName) {
	    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	    $scope.propertyName = propertyName;
  };
});

 /* --------------------------------------------- CONTACT --------------------------------------------------------*/

function googleMaps() 
{
	var luzern = new google.maps.LatLng(47.047783,8.306617);
	var abrantes = new google.maps.LatLng(39.465884, -8.199745);
	var saasFee = new google.maps.LatLng(46.106443, 7.926258);
	var setMap = document.getElementById("googleMap");
	var mapOptions = {center: luzern, zoom: 14, mapTypeId:google.maps.MapTypeId.HYBRID};
	var map = new google.maps.Map(setMap, mapOptions);
	var marker = new google.maps.Marker({position: luzern });
	var marker2 = new google.maps.Marker({position: abrantes });
	var marker3 = new google.maps.Marker({position: saasFee });
	var infowindow = new google.maps.InfoWindow({content: "Hello World!" });
  	infowindow.open(map,marker);
  	// Zoom to 9 when clicking on marker
	google.maps.event.addListener(marker,'click',function() {
		map.setZoom(19);
		map.setCenter(marker.getPosition());
	});
	// Zoom to 9 when clicking on marker
	google.maps.event.addListener(marker2,'click',function() {
		map.setZoom(19);
		map.setCenter(marker2.getPosition());
	});
	// Zoom to 9 when clicking on marker
	google.maps.event.addListener(marker3,'click',function() {
		map.setZoom(19);
		map.setCenter(marker3.getPosition());
	});
	marker.setMap(map);
	marker2.setMap(map);
	marker3.setMap(map);
}







