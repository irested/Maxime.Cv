var main = function(){

$(window).scroll(function(){

    if ($(this).scrollTop()>350)
     {
        $('.bg').fadeOut(0);
     }
    else
     {
      $('.bg').fadeIn(0);
     }
 });
};


$(document).ready(main);

$(document).ready(function() {
        $('.js-scrollTo').on('click', function() {
            var page = $(this).attr('href');
            var speed = 750;
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });
    });

$(function () {
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
                $('.navbar-toggle:visible').click();
        });
});