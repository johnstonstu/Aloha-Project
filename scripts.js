$(document).ready(function() {
  // $(function() {
  //   // your jQuery code here...
  // });

  $(".main-carousel").flickity({
    // options

    wrapAround: true,
    contain: true,
    fullscreen: true,
    lazyLoad: 1
  });

  $(".sub-button").on("click", function() {
    // Code to run when button clicked...

    var inputVal = $(".form-input").val();

    if ($(".form-input").val() == "") {
      alert("You missed the field.");
    } else {
      alert(inputVal);
    }
    console.log(inputVal);
    // alert(inputVal);
    console.log(event);
    // console.log(input);
  });

  console.log("this better work");
});
