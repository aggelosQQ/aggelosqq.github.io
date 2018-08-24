$(document).ready(function() {


  $('.hire-button').click(function() {
    let discord_invite = "4jvCAPJ"

    Swal({
      title: 'Join the Server:',
      html: '<iframe src="https://ptb.discordapp.com/widget?id=447320387408232448&theme=light" width="100%" height="350" allowtransparency="true" frameborder="0"></iframe><br>Or<br> <a href="https://discord.gg/https://discord.gg/4jvCAPJ">https://discord.gg/4jvCAPJ</a>',
      // type: 'warning',
      showCancelButton: false,
      confirmButtonText: 'Next Step...',
    }).then((result) => {
      if (result.value) {
        Swal({
          title: 'Read the Terms of Services',
					text: 'They can either be found on #information on the Discord server, or by click on the appropriate button below.',
					showCancelButton: true,
					confirmButtonText: 'Terms of Service',
					cancelButtonText: 'Next Step...'
        }).then((result) => {
					if (result.value) {
						var tos = window.open('https://aggelosqq.com/terms', '_blank');
						tos.focus();
					} else if (result.dismiss === Swal.DismissReason.cancel) {
						Swal({
							title: 'You\'re almost done!',
							html: 'Now simply, head over to <i>#general</i> and open up a ticket using <code>-new</code>',
							confirmButtonText: 'Done!'
						});
					}
				});
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

$("#work").click(function() {
  $('html, body').animate({
    scrollTop: $(".projects").offset().top
  }, 1000);
});

$("#testimonials").click(function() {
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
