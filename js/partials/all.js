jQuery(document).ready(function($){

  // create a parallax effect on the "about me" section's bg:
  $(window).on('scroll', function () {
    var scrollAmt = $(window).scrollTop() * 0.3;
    $('.about-me').css('backgroundPosition', '20% ' + scrollAmt + 'px');
  }); // end window scroll


  // clicking the down-chevron scrolls user down to next section of page:
  $('.scroll-down a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      { scrollTop: $(target).offset().top },
      400,
      'swing'
    ); // end animate
  }); // end scroll-down click


  // clicking "contact me" button scrolls user back to top of page,
  // and causes contact methods to "jump" for visibility:
  $('.cta-button').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      { scrollTop: $(target).offset().top },
      400,
      'swing',
      function () {
        $('.contact-info p:nth-of-type(1)').addClass('pulsing');
        setTimeout(function(){ $('.contact-info p:nth-of-type(2)').addClass('pulsing'); }, 150);
        setTimeout(function(){ $('.contact-info p:nth-of-type(3)').addClass('pulsing'); }, 300);
        setTimeout(function(){ $('.contact-info p:nth-of-type(4)').addClass('pulsing'); }, 450);
        setTimeout(function(){ $('.contact-info p').removeClass('pulsing'); }, 1000);
      } // end callback function
    ); // end animate
  }); // end cta-button click

}); // end document ready
