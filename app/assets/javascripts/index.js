$( document ).ready(function() {

	$(window).on('scroll',function(){
		if ($(window).scrollTop() >= 100 || $(".navbar-toggler").hasClass("collapsed") === false) {
			$('#mainNav').css("background-color", "#343a40"); 
			$("#bounce-arrow").hide();
	 	} else { 
			$('#mainNav').css("background-color", "transparent"); 
			$("#bounce-arrow").show();
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

	var navFirstTimeOpened = true
	$(".navbar-toggler").on("click", function() {
		if ($(this).hasClass("collapsed") || navFirstTimeOpened) {
			$('#mainNav').css("background-color", "#343a40"); 
			navFirstTimeOpened = false;
		} else { 
			$('#mainNav').css("background-color", "transparent"); 
		} 
	})
});

