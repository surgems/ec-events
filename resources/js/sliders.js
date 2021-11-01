import 'owl.carousel';

if ($(".owl-carousel")[0]) {
    var carousels = $(".owl-carousel");

    // INITIALISE ALL CAROUSELS
    $(carousels).each(function() {
        const carouselClass = $(this).attr('class').split(' ');
        console.log(parseInt(carouselClass[carouselClass.length - 1]))
        $(this).owlCarousel({
            autoplay: false,
			margin: carouselClass.includes('margin') ? parseInt(carouselClass[carouselClass.length - 1]) : 0,
			loop: true,
            dots: $(this).attr('class').split(' ').includes('dots') ? true : false,
            responsive: {
                0: {
                    items: $(this).attr('data-slides-mobile')
                },
                500: {
                    items: $(this).attr('data-slides-tablet')
                },
                1024: {
                    items: $(this).attr('data-slides-laptop')
                },
                1600: {
                    items: $(this).attr('data-slides-desktop')
                }
            }
        });
    });

    $(".owl-nav-custom").on("click", function() {
        if ($(this).hasClass("prev")) {
            $(this).parent().parent().find('.owl-carousel button.owl-prev').trigger("click");
        } else if ($(this).hasClass("next")) {
            $(this).parent().parent().find('.owl-carousel button.owl-next').trigger("click");
        }
    });
}