$(document).ready(function() {


	$('.hire-button').click(function() {
		swal({
			titleText: 'Add me on Discord!',
			text: 'aggelosQQ#7499',
			imageUrl: 'https://discordapp.com/assets/41484d92c876f76b20c7f746221e8151.svg',
			imageWidth: 100,
			imageAlt: 'Discord'
		})
	});

	$('body').hide().fadeIn('slow');
	$('.page-brand').transition({
		x: '0',
	});
	$('.menu').click(function() {
		$('.navbar').toggleClass('navbar-visible');
		$('.navbar').toggleClass('hide-on-mobile');
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
