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
  $(".sub-button").on("click", function(event) {
    // Code to run when button clicked...
    event.preventDefault();
    var inputVal = $(".form-input").val();

    // valadate email as seen on https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    function validateEmail(inputVal) {
      var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      return re.test(inputVal);
    }

    if (validateEmail(inputVal)) {
      alert("Thanks for subscribing: " + inputVal);
    } else {
      alert("Invalid Email. Please try again.");
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
