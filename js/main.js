/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
 (function($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
   Drupal.behaviors.exampleBehavior = {
    attach: function(context, settings) {
      //Left off canvas sub menu toggle
      $('.menu.dropdown .is-dropdown-submenu-parent').unbind().click(function(e) {
        $(this).toggleClass("sub-dropdown-is-open");
        $(this).siblings('li').removeClass("sub-dropdown-is-open");
        $(this).siblings('li').children('ul').slideUp(350);
        $(this).children('ul').slideToggle(350);
      });

    }
  };

// Scroll to top Effect
$(window).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 80) {
    $("#back-to-top").addClass("show");
  } else {
    $("#back-to-top").removeClass("show");
  }
});

$('#back-to-top').click(function() {
 $("html, body").animate({ scrollTop: 0 }, "slow");
 return false;
});

// Search Reveal on Click
(function() {
  $('.agweb-search-reveal-button').on('click', function(e) {
    $(' #search_modal, .agweb-search-close').addClass('completely-visible');
    $('#header-search-input').focus();
    $('body').addClass('body-scroll');
    $('.header-advt').addClass('hide-header-ads');
  });

  $('.agweb-search-close').on('click', function(e) {
    $('#search_modal, .agweb-search-close').removeClass('completely-visible');
    $('body').removeClass('body-scroll');
    $('.header-advt').removeClass('hide-header-ads');
  });

  $("#block-mainmenu").show(500);

})();

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

$(document).ready(function () {
  setTimeout(function() {
    var page = GetURLParameter('page');

    if(page == 'matrix') {
      $('a[id="Matrix_link"]').addClass('active');
    }

    if(page == 'option') {
      $("#Options_link").addClass('active');
    }

    if(page == 'profile') {
      $('a[id="Profile_link"]').addClass('active');
    }

    if(page == 'chart') {
      $('a[id="Chart_link"]').addClass('active');
    }

    if(page == 'technical') {
      $('a[id="Technicals_link"]').addClass('active');
    }
  }, 100);
});

$('.field-name-field-careers .paragraph--type--agweb-careers .field-name-field-job-attachments a, .field-name-field-careers .field-name-field-attachment-link a').attr('target', '_blank');

})(jQuery, Drupal);
