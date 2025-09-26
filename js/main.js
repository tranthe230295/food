$(function() {

    $('.navbar-toggler').click(function() {
        $('.navbar-collapse.mobile').addClass('active');
        $('.overlay-mobile').addClass('show');
    });

    $('.overlay-mobile').click(function() {
        $('.navbar-collapse.mobile').removeClass('active');
        $('.overlay-mobile').removeClass('show');
    });



    $('.counter').each(function() {
        var count = $(this),
            countTo = count.attr('data-count');

        $({ countNum: count.text() }).animate({
                countNum: countTo
            },

            {
                duration: 3000,
                easing: 'linear',
                step: function() {
                    count.text(Math.floor(this.countNum));
                },
                complete: function() {
                    count.text(this.countNum);
                    //alert('finished');
                }
            });

    });


    $('.main-menu li').click(function(e) {
        e.preventDefault();
        $('.main-menu li').removeClass('active');
        $(this).addClass('active');
    });

    $('.dropdown').click(function() {
        $('#mega-menu').fadeToggle(600);
        $('.overlay-mobile').toggleClass('active');
    });

    $('.overlay-mobile').click(function() {
        $('.overlay-mobile').removeClass('active');
        $('#mega-menu').fadeOut();
    });

    $('.btn-close-menu').click(function() {
        $('.navbar-collapse.mobile').removeClass('active');
        $('.overlay-mobile').removeClass('show');
    });

    $('.navbar-toggler').click(function() {
        $('.navbar.mobile').addClass('active');
        $('.overlay-mobile').addClass('show');
    });

    $('.overlay-mobile').click(function() {
        $('.navbar.mobile').removeClass('active');
        $('.overlay-mobile').removeClass('show');
    });


    $(window).scroll(function() {
        var position = $(this).scrollTop();
        if (position > 50) {
            $('.header-main').addClass('fixed');
        } else {
            $('.header-main').removeClass('fixed');
        }
    });


    //menu mobile
    $('.btn-dropmenu').click(function(event) {
        event.preventDefault();
        $(this).siblings('.sub-menu').slideToggle();
        $(this).find('i').toggleClass('rotate');
    });

    $('.featured-video .video').hide();
    $('.video-link').click(function(e) {
        e.preventDefault();
        $('.video-link').hide();
        $('.featured-video .video').fadeIn();
        $(".featured-video .video iframe")[0].src += "?&autoplay=1";
    });


    $('.btn-more-filter').click(function(e) {
        e.preventDefault();
        $(this).siblings('.filter-wrapper').toggleClass('show');
    });



    // Slider home
    var swiper = new Swiper(".slide-home", {
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".slide-home-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
    });


    //Slide dự án home
    var swiper = new Swiper(".project-slide", {

        slidesPerView: 3.5,
        spaceBetween: 20,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".pj-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: ".pj-next",
            prevEl: ".pj-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
        },
    });


    // Slide prduct gallery
    var swiper = new Swiper(".gallery-2", {
        speed: 1000,
        spaceBetween: 10,
        slidesPerView: 5,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        },
        navigation: {
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
        },
    });
    var swiper2 = new Swiper(".gallery-1", {
        loop: true,
        speed: 1000,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
        },
    });



    //Slide logo đối tác
    var swiper = new Swiper(".partner-slide", {

        slidesPerView: 6,
        spaceBetween: 60,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".partner-slide-next",
            prevEl: ".partner-slide-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
        },
    });


    //Slide sản phẩm liên quan
    var swiper = new Swiper(".related-pr-slide", {

        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".related-pr-next",
            prevEl: ".related-pr-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        },
    });


    //Slide bài viết liên quan
    var swiper = new Swiper(".related-slide", {

        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".related-next",
            prevEl: ".related-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
    });





});