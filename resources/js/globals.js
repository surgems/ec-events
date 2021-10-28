$(document).ready(function () {

  // BURGER MENU TOGGLE
  $(".burger").on("click", function() {
    $(this).children().first().toggleClass("open");
    $("#mob-menu").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

});