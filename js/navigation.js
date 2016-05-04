$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $(".nav-bar").addClass("scrolling");
    } else {
        $(".nav-bar").removeClass("scrolling");
    }
});

$( ".cd-nav-trigger" ).click(function() {
	if ($('.nav-bar').hasClass('is-visible')) {
		$(".nav-bar").removeClass("is-visible");
		$('.cd-nav-trigger').html('Majors');
	} else {
		$(".nav-bar").addClass("is-visible");
		$('.cd-nav-trigger').html('Close');
	}
});