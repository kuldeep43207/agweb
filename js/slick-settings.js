/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
 (function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */

   Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {

      // Carousel on What a Day Pagesss
      var sliders = {
        1: {slider : '.slider-for-what-a-day', nav : '.slider-for-what-a-day-nav' },
        2: {slider : '.what-a-day-harvest-slider', nav : '.what-a-day-harvest-slider-nav' },
        3: {slider : '.photo-gallery-slider', nav : '.photo-gallery-slider-nav' }
      };

      $.each(sliders, function() {

        $(this.slider).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          dots: false,
          asNavFor: this.nav
        });

        $(this.nav).slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: this.slider,
          centerMode: true,
          focusOnSelect: true,
          infinte: true,
          dots: false,
          responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
            }
          }
          ]
        });
      });
// Maps Slider
      var mapSlider =  {
        1: { sliders: '.precipitation-map-slider' },
        2: { sliders: '.soil-map-slider' },
        3: { sliders: '.temperature-map-slider' },
        4: { sliders: '.growing-condition-map-slider' }
      }

      $.each(mapSlider, function() {
        $(this.sliders).slick({
          dots: true
        });
      });

    }
  };

})(jQuery, Drupal);
