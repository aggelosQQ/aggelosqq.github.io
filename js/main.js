$(document).ready(function() {
	$('body').hide().fadeIn('slow');
	$('.page-brand').transition({
		x: '0',
	});
	$('.menu').click(function() {
		// $('.navbar').toggleClass('navbar-visible', 1000);
		// $('.navbar').toggleClass('hide-on-mobile', 1000);
		$('.navbar').slideToggle(1000);
	});

    $("#work").click(function (){
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 1000);
    });

    $("#testimonials").click(function (){
        $('html, body').animate({
            scrollTop: $(".testimonials").offset().top
        }, 1000);
    });

      $('.card-outer').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
      });


});
