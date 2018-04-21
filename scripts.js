$(document).ready(function() {
  // Carousel
  $(".main-carousel").flickity({
    cellAlign: "left",
    wrapAround: true,
    contain: true,
    fullscreen: true,
    lazyLoad: 1,
    prevNextButtons: false,
    autoPlay: true
  });

  // Form submit
  $(".sub-button").on("click", function() {
    // Code to run when button clicked...
    var inputVal = $(".form-input").val();

    if ($(".form-input").val() == "") {
      alert("You missed the field.");
    } else {
      alert("Thanks for subscribing: " + inputVal);
    }
  });

  // Smooth scrolling as seen on https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      var headerNav = $(".head").height();
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - headerNav
            },
            1000,
            function() {}
          );
        }
      }
    });

  console.log("this better work");
});
