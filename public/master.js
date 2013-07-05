(function($) {
  $("form.js-delete-form").on("submit", function() {
    return confirm("Are you sure you want to delete this gem?");
  });

  $setup = $("#setup-instructions");
  $setup.hide();
  $(window).on("hashchange", function() {
    if (window.location.hash.match(/setup/i)) {
      $setup.slideDown();
    } else {
      $setup.slideUp();
    }
  });
})(jQuery);
