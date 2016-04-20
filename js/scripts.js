$(document).ready(function(){

/*---NAV---*/
$(function() {
			var pull 		= $('#menu');
				menu 		= $('nav ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});
			
			$("#bfa_type").height($(window).height());

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
        		var pjs = Processing.getInstanceById('bfa2015');
				pjs.size($(window).width(), $(window).height());
				$("#bfa_type").height($(window).height());
				pjs.restart();
				//new Processing ($("#bfa2015")[0], bfa2015);
    		});
});


/*---GALLERY---*/
$('.bxslider').bxSlider({
  	mode: 'fade',
  	captions: true
});

smoothScroll.init({
	speed: 900,
	easing: 'easeInOutCubic',
	offset: 0,
	updateURL: true,
	callbackBefore: function ( toggle, anchor ) {},
	callbackAfter: function ( toggle, anchor ) {}
});









});
