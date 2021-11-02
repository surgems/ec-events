// BURGER MENU TOGGLE

$(".burger").on("click", function() {
  $(this).children().first().toggleClass("open");
  $("#mob-menu").toggleClass("active");
  $("body").toggleClass("no-scroll");
});

// NAV DROPDOWN 

// $(".nav-link").on("click", function() {
//   const isOpened = $(this).find(".is-opened")[0]
//   $(this).toggleClass("active");
//   if ($(this).hasClass('active')) {
//     isOpened.innerHTML = '-';
//   } else {
//     isOpened.innerHTML = '+';
//   };
// });