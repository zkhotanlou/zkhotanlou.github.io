/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Publish the measured masthead height for CSS. The masthead grows when the
  // nav wraps to a second row, and both the body offset and the fixed sidebar
  // have to track it. The sidebar now derives its `top` and `height` from this
  // variable in _sidebar.scss, so this no longer sets padding on .sidebar:
  // doing both produced the masthead offset twice and pushed the bottom links
  // off the screen.
  var mastheadHeight = $('.masthead').height();
  document.documentElement.style.setProperty('--masthead-height', mastheadHeight + 'px');
  $('body').css('padding-top', mastheadHeight + 'px');

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
// Guarded: screen.orientation is missing on older iOS/Safari. This file is
// concatenated ahead of _main.js in main.min.js, so an unguarded throw here
// also took out the theme toggle and the sidebar "Follow" menu.
if (screen.orientation && screen.orientation.addEventListener) {
  screen.orientation.addEventListener("change", function () {
    updateNav();
  });
} else {
  $(window).on("orientationchange", function () {
    updateNav();
  });
}

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();