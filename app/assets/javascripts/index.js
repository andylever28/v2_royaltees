$( document ).ready(function() {
	$(window).on('scroll',function(){
		if ($(window).scrollTop() >= 100) {
			$('#mainNav').css("background-color", "#343a40"); 
			$("#bounce-arrow").hide();
	 	} else { 
	   	$('#mainNav').css("background-color", "transparent"); 
	   	$("#bounce-arrow").show();
		}
	});
	$('#bounce-arrow').css('width', '100%');
	$("#bounce-arrow").show();
	$('.nav-link').on('click', function(e) {
    e.preventDefault();
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

