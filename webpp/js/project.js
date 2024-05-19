$(document).ready(function() {
  var $animated = $('.show-animation');
  var $button = $('a.button');
  var $menu = $(".toggler");
  
  $menu.on('click', function() {
      $(this).toggleClass('active');
      $('body').toggleClass('overflow');
  });

  $button.on('click', function() {
      event.preventDefault();
      $animated.removeClass('is-view');
      setTimeout(function() {
          window.location.href = $button.attr('href');
      }, 800);
  });
});
