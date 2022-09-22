$(document).ready(function() {
  // let currScroll = $(window).scrollTop();
  // let sidebar = $('.sidebar-inner').offset();
  //
  // if (currScroll >= sidebar || currScroll >= 103.14999389648438) { // 103.14999389648438
  //   console.log('DEBUG: Current scroll: ' + currScroll + ' >= ' + sidebar.top);
  //
  // //   $('.sidebar-inner').addClass('fixed');
  // //   $('.legal-side').removeClass('not-fixed');
  // //   $('.legal-side').css('marginLeft', '-15.7px');
  // // } else {
  // //   $('.sidebar-inner').removeClass('fixed');
  // //   $('.legal-side').addClass('not-fixed');
  // //   $('.legal-side').css('marginLeft', '-15.7px');
  //
  //
  // }
  $('.category h3').click(function() {
    $(this).parent().find('.category-links').slideToggle();
  });
});
