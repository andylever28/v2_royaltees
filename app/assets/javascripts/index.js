$( document ).ready(function() {
	$(window).on('scroll',function(){
		if ($(window).scrollTop() >= 100) {
	     $('#mainNav').css("background-color", "#343a40"); 
	 	} else { 
	   	$('#mainNav').css("background-color", "transparent"); 
		}
	});

	$("#bounce-arrow").show();
});

