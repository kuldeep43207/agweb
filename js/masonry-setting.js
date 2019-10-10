(function($) {
  var t;
  var count = 0;
  t = setInterval(function() {
    count = count + 1;
    $(".markets-data-cols-wrapper").masonry({
      itemSelector: ".markets-data-cols",
      columnWidth: '.markets-data-cols',
      percentPosition: true
    });
    if (count > 4) {
      clearInterval(t);
    }
  }, 2000);
})(jQuery);
