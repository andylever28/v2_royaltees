$(document).ready(function() {
	var navEverOpened = false;
	var navOpened = false;

	$(window).on('scroll',function(){
		if ($(window).scrollTop() >= 100 || navOpened) {
			$('#mainNav').css("background-color", "#343a40"); 
			$("#bounce-arrow").hide();
	 	} else { 
			$('#mainNav').css("background-color", "transparent"); 
			$("#bounce-arrow").show();
		}
	});

	$(".navbar-toggler").on("click", function() {
		if ($(this).hasClass("collapsed") || !navEverOpened) {
			$('#mainNav').css("background-color", "#343a40"); 
			navEverOpened = true;
			navOpened = true;
		} else { 
			$('#mainNav').css("background-color", "transparent"); 
			navOpened = false;
		} 
	});

	$('#bounce-arrow').css('width', '100%');
	$("#bounce-arrow").show();

	$('.scroll-link').on('click', function(e) {
    	e.preventDefault();
		$('#navbarNav').removeClass('show');
		$('#mainNav').css("background-color", "#343a40"); 

		var target = this.hash; 
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop':  parseInt($target.offset().top,10)
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	})
});

