(function($) {
    'use strict';
    
    $(document).ready(function() {
        $('.cover-slider').slick({
            slidesToShow:1,
            arrows:true,
            rows:0
        });

        $('.nav-list .nav-link').on('click', function(){
            $('.nav-list .nav-link').removeClass('active');
            $(this).addClass('active');
        });
    });

    $(window).on('scroll', function(event) {
        scroll_animate();
    });

    function scroll_animate() {
        let currentScrollTop = $(window).scrollTop();

        $('.animation').each(function(index, el) {
            let elementOffset = $(this).offset();
            let positionDelay = Math.min( $(this).height() / 3, $(window).height() / 2 );

            if( ( currentScrollTop + $(window).height() - positionDelay ) > elementOffset.top ) {
                $(this).addClass('animated');
            }
        });
    }

    
}(jQuery));