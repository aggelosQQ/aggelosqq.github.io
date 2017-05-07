// INSPINIA Landing Page Custom scripts
$(document).ready(function () {

    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 70
        }, 500);
        event.preventDefault();
    });

    $('#documentation .doc-title h2').click(function() {
        $(this).next().slideToggle('fast');
        $(this).toggleClass('active');
    });

});

// Activate WOW.js plugin for animation on scroll
new WOW().init();