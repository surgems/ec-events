import 'owl.carousel';

if ($(".owl-carousel")[0]) {
    var carousels = $(".owl-carousel");

    // INITIALISE ALL CAROUSELS
    $(carousels).each(function() {
        const carouselClass = $(this).attr('class').split(' ');
        
        $(this).owlCarousel({
            autoplay: false,
			margin: parseInt($(this).attr('data-has-margin')),
			loop: $(this).attr('class').split(' ').includes('no-loop') ? false : true,
            dots: $(this).attr('class').split(' ').includes('dots') ? true : false,
            responsive: {
                0: {
                    items: $(this).attr('data-slides-mobile')
                },
                500: {
                    items: $(this).attr('data-slides-portrait-tablet')
                },
                769: {
                    items: $(this).attr('data-slides-landscape-tablet')
                },
                1025: {
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