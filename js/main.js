$(document).ready(function() {


	$('.hire-button').click(function() {
		let discord_invite = "4jvCAPJ"
		swal({
			text: 'Use the following buttons depending on your case.',
			icon: 'info',
			imageAlt: 'Discord',
			buttons: ["I joined, then what?", "Join Server" ]
		})
		.then((joined) => {
			if (!joined) {
				swal({
					title: 'The next step is..',
					text: 'Look for a channel called "#how-to-order" and read it carefully! Everything you need to know is there.',
					icon: "info"
				});
			} else {
				window.location.replace("https://discord.gg/" + discord_invite);
			}
		});
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
