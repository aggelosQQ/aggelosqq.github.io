$(document).ready(function() {
$('#facebook-nav').hide();
$('#twitter-nav').hide();
	var navbar = $('.nav');
$(window).scroll(function() {
    var scroll = $(window).scrollTop(); // look at this

    if (scroll >= 300) {
        navbar.addClass('navbar-outside', 1000);
        $('#facebook-nav').fadeIn('fast');
        $('#twitter-nav').fadeIn('fast');
    } else {
        navbar.removeClass('navbar-outside', 1000);
        $('#facebook-nav').fadeOut('fast');
        $('#twitter-nav').fadeOut('fast');

    }
});



	new WOW().init();

});