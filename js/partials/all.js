jQuery(document).ready(function($){

  // lazy-load in the background images:
  $('.js-lazyload-bg').each(function(){
    var datasrc = $(this).data('bg-image');
    $(this).css('backgroundImage', 'url(img/' + datasrc + ')');
  });


  // clicking the intro links or down-chevron icon scrolls user down to appropriate section of page:
  $('.intro a, .scroll-down a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      { scrollTop: $(target).offset().top },
      400,
      'swing'
    );
  });


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
      }
    );
  });

  // animate open the intro speech bubble
  setTimeout(function(){
    $('.speech').removeClass('unspoken');
  }, 400);

}); // end document ready
