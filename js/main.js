$(document).ready(function(){
	
	// Mobile Menu
	$('.logo').on('click', function() {
		$('.site-nav').slideToggle();
	});

	// Smooth Scroll
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
		  'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
		  window.location.hash = target;
		});
  });

	// Show Backtop icon after 100px scroll
	$('#js-backtop').hide();
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('#js-backtop').fadeIn("slow");
		}
		else {
			$('#js-backtop').fadeOut("fast");
		}
	});

	// Scroll Reveal Class
	window.sr = ScrollReveal();
	sr.reveal('.foo', { duration: 1500 });

	
});