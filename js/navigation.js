$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $(".nav-bar").addClass("scrolling");
    } else {
        $(".nav-bar").removeClass("scrolling");
    }
});