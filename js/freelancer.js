/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('body').on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Floating label headings for the contact form
$(function() {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

(function() {
  var canvas = document.getElementById('canvas'),
    circlesCreated = false;

  function onScroll() {
    if (!circlesCreated && elementInViewport(canvas)) {
      circlesCreated = true;
      createCircles();
    }
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function createCircles() {
    var colors = [
        ['#EAE8FF', '#2c3e50'],
        ['#EAE8FF', '#2c3e50'],
        ['#EAE8FF', '#2c3e50'],
        ['#EAE8FF', '#2c3e50'],
        ['#EAE8FF', '#2c3e50'],
        ['#EAE8FF', '#2c3e50'],
        ['#EAE8FF', '#2c3e50'],
        ['#EAE8FF', '#2c3e50']
      ],
      percents = [
        90, 85, 85, 70,
        40, 30
      ],
      circles = [];
    for (var i = 1; i <= colors.length; i++) {
      var child = document.getElementById('circles-' + i),
        percentage = percents[i - 1],
        circle = Circles.create({
          id: child.id,
          value: percentage,
          radius: 30,
          width: 5,
          colors: colors[i - 1]
        });
      circles.push(circle);
    }
  }
  window.onscroll = onScroll;
})();
