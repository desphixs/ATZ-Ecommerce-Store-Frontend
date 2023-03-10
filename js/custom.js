/*=========================================================
Author       : Bestwebcreator.
Template Name: ATZ Shop - Online Shopping Store HTML Template
Version      : 1.3
==============================================================*/

(function($) {
    'use strict';

    /*===================================*
    01. LOADING JS
    /*===================================*/
    $(window).on('load', function() {
        var preLoder = $("#preloader");
        preLoder.delay(700).fadeOut(500).addClass('loaded');
    });

    /*===================================*
    02. POPUP JS
    *===================================*/
    $(window).on('load', function() {
        setTimeout(function() {
            $("#exampleModal").modal('show', {}, 500)
        }, 3000);
    });

    /*===================================*
    03. DATA IMAGE SRC JS
    *===================================*/
    $(".background_bg").each(function() {
        var attr = $(this).attr('data-img-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background', 'url(' + attr + ') center center/cover');
        }
    });

    /*===================================*
    04. LOGIN POPUP JS
    *===================================*/
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });

    /*===================================*
    05. MENU JS
    *===================================*/
    //Main navigation scroll spy for shadow
    if ($(window).width() >= 992) {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 160) {
                $('header').addClass('nav-fixed');
            } else {
                $('header').removeClass('nav-fixed');
            }

        });
    }
    //Show Hide dropdown-menu Main navigation 
    $(document).ready(function() {
        $('.dropdown-menu a.dropdown-toggler').on('click', function(e) {
            var $el = $(this);
            var $parent = $(this).offsetParent(".dropdown-menu");
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parent("li").toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-menu .show').removeClass("show");
            });

            return false;
        });
    });

    /*===================================*
    06. SEARCH JS
    *===================================*/

    $(document).ready(function() {
        $('#search').on("click", (function(e) {
            $(".header-form").toggleClass("search-open");
            e.stopPropagation()
        }));
    })


    /*===================================*
    07. PRODUCT + SALLER SLIDER JS
    *===================================*/
    $(document).ready(function() {
        $('.products-slider3').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            dots: false,
            thumbs: false,
            responsiveClass: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 3,
                }
            }
        })
    });
    $('.products-slider4').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            dots: $carousel.data("dots"),
            autoHeight: true,
            rewind: $carousel.data("rewind"),
            autoplay: $carousel.data("autoplay"),
            nav: $carousel.data("nav"),
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 4,
                }
            }
        });
    });
    $('.testimonial_slider').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            dots: $carousel.data("dots"),
            autoHeight: true,
            rewind: $carousel.data("rewind"),
            autoplay: $carousel.data("autoplay"),
            nav: $carousel.data("nav"),
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 2,
                }
            }
        });
    });
    /*===================================*
    08. SLIDER JS
    *===================================*/
    $(window).on('load', function() {
        $('.carousel_slide1').each(function() {
            var $carousel = $(this);
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                margin: $carousel.data("margin"),
                loop: $carousel.data("loop"),
                items: 1,
                autoHeight: $carousel.data("autoHeight"),
                nav: $carousel.data("nav"),
                navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
                autoplay: $carousel.data("autoplay"),
                animateIn: $carousel.data("animate-in"),
                animateOut: $carousel.data("animate-out"),
                autoplayTimeout: $carousel.data("autoplay-timeout"),
            });
        });

        $('.carousel_slide2').each(function() {
            var $carousel = $(this);
            $carousel.owlCarousel({
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                dots: $carousel.data("dots"),
                autoHeight: true,
                rewind: $carousel.data("rewind"),
                autoplay: $carousel.data("autoplay"),
                nav: $carousel.data("nav"),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                responsive: {
                    0: {
                        items: 1,
                    },
                    380: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    1000: {
                        items: 2,
                    },
                    1199: {
                        items: 2
                    }
                }
            });
        });

        $('.carousel_slide3').each(function() {
            var $carousel = $(this);
            $carousel.owlCarousel({
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                dots: $carousel.data("dots"),
                autoHeight: false,
                lazyLoad: true,
                rewind: $carousel.data("rewind"),
                autoplay: $carousel.data("autoplay"),
                nav: $carousel.data("nav"),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                responsive: {
                    0: {
                        items: 1,
                    },
                    380: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    },
                    1199: {
                        items: 3
                    }
                }
            });
        });

        $('.carousel_slide4').each(function() {
            var $carousel = $(this);
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                autoHeight: true,
                rewind: $carousel.data("rewind"),
                autoplay: $carousel.data("autoplay"),
                nav: $carousel.data("nav"),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                responsive: {
                    0: {
                        items: 1,
                    },
                    380: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    },
                    1199: {
                        items: 4
                    }
                }
            });
        });

        $('.carousel_slide5').each(function() {
            var $carousel = $(this);
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                autoHeight: true,
                rewind: $carousel.data("rewind"),
                autoplay: $carousel.data("autoplay"),
                nav: $carousel.data("nav"),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                responsive: {
                    0: {
                        items: 1,
                    },
                    380: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1199: {
                        items: 5
                    }
                }
            });
        });

        $('.carousel_slide6').each(function() {
            var $carousel = $(this);
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                autoHeight: true,
                rewind: $carousel.data("rewind"),
                autoplay: $carousel.data("autoplay"),
                nav: $carousel.data("nav"),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                responsive: {
                    0: {
                        items: 2,
                    },
                    380: {
                        items: 2,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1199: {
                        items: 6
                    }
                }
            });
        });

        $('.carousel_slide7').each(function() {
            var $carousel = $(this);
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                autoHeight: true,
                rewind: $carousel.data("rewind"),
                autoplay: $carousel.data("autoplay"),
                nav: $carousel.data("nav"),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                responsive: {
                    0: {
                        items: 1,
                    },
                    380: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1199: {
                        items: 7
                    }
                }
            });
        });

    });

    /*===================================*
    09. QUICKVIEW POPUP + ZOOM IMAGE + PRODUCT SLIDER JS
    *===================================*/

    $(window).on('load', function() {

        /*IMAGE GALLERY POPUP*/
        $('.image_popup').on('click', function() {
            $(this).find('.link_container').magnificPopup('open');
        });
        $('.link_container').each(function() {
            $(this).magnificPopup({
                delegate: '.image_popup',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });


        /*PRODUCT THUMB GALLERY*/
        var owl = $('.product_gallery_item');
        owl.owlCarousel({
            loop: false,
            items: 4,
            dots: false,
            margin: 10,
            nav: true,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        });


        /*IMAGE ZOOM*/
        var image = $('.product_img');
        var zoomActive = false;

        zoomActive = !zoomActive;
        if (zoomActive) {
            if ($(window).width() >= 768) {
                var firstImgHeight = $(".product_img").height();
                var divWidth = $(".quickview-product-detail").width();
                $(".product_img").elevateZoom({
                    cursor: "crosshair",
                    easing: true,
                    scrollZoom: true,
                    gallery: 'pr_item_gallery',
                    zoomWindowOffetx: 30,
                    zoomWindowWidth: divWidth,
                    zoomWindowHeight: firstImgHeight,
                    borderSize: 0,
                    galleryActiveClass: "active"
                });
            } else {
                $(".product_img").elevateZoom({
                    cursor: "crosshair",
                    easing: true,
                    gallery: 'pr_item_gallery',
                    zoomType: "inner",
                    galleryActiveClass: "active"
                });
            }
        } else {
            $.removeData(image, 'elevateZoom'); //remove zoom instance from image
            $('.zoomContainer:last-child').remove(); // remove zoom container from DOM
        }


        /*QUICKVIEW POPUP JS*/
        $('.quickview-popup-link').magnificPopup({
            type: 'inline',
            alignTop: false,
            overflowY: 'scroll',
            midClick: true,
            callbacks: {
                open: function() {
                    $('body').addClass('zoom_image');
                    // Will fire when this exact popup is opened
                    if ($(window).width() >= 768) {
                        var firstImgHeight = $(".quickview-popup .product_img").height();
                        var divWidth = $(".quickview-product-detail").width();
                        $(".quickview-popup .product_img").elevateZoom({
                            cursor: "crosshair",
                            easing: true,
                            scrollZoom: true,
                            gallery: 'product_gallery',
                            zoomWindowOffetx: 30,
                            zoomWindowWidth: divWidth,
                            zoomWindowHeight: firstImgHeight,
                            borderSize: 0,
                            galleryActiveClass: "active"
                        });
                    } else {
                        $(".quickview-popup .product_img").elevateZoom({
                            cursor: "crosshair",
                            zoomType: "inner",
                            gallery: 'product_gallery',
                            galleryActiveClass: "active"
                        });
                    }
                },
                close: function() {
                    // Wait until overflow:hidden has been removed from the html tag
                    setTimeout(function() {
                        $('body').removeClass('zoom_image');
                        $('.zoomContainer:nth-child(2)').remove();
                    }, 100)
                }
            }
        });
    });
    /*===================================*
    10. PRICE FILTER JS
    *===================================*/

    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [10, 500],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    /*===================================*
    11. SELECT2 JS
    *===================================*/
    $(".js-example-placeholder-single").select2({
        allowClear: true
    });

    /*===================================*
    12. COUNTER JS
    *===================================*/
    $('.counter').countUp();

    /*===================================*
    13. ANIMATION JS
    *===================================*/
    $(function() {

        function ckScrollInit(items, trigger) {
            items.each(function() {
                var ckElement = $(this),
                    AnimationClass = ckElement.attr('data-animation'),
                    AnimationDelay = ckElement.attr('data-animation-delay');

                ckElement.css({
                    '-webkit-animation-delay': AnimationDelay,
                    '-moz-animation-delay': AnimationDelay,
                    'animation-delay': AnimationDelay
                });

                var ckTrigger = (trigger) ? trigger : ckElement;

                ckTrigger.waypoint(function() {
                    ckElement.addClass("animated").css("visibility", "visible");
                    ckElement.addClass('animated').addClass(AnimationClass);
                }, {
                    triggerOnce: true,
                    offset: '90%'
                });
            });
        }

        ckScrollInit($('.animation'));
        ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));

    });

    /*===================================*
    14. SCROLLUP JS
    *===================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 160) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $(".scrollup").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*===================================*
    15. QUNTITY JS
    *===================================*/
    $('.plus').on("click", function(e) {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.minus').on("click", function(e) {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    /*Cart Page Payment option*/
    $('[name="payment_option"]').on('click', function() {

        var $value = $(this).attr('value');

        $('.payment-text').slideUp();
        $('[data-method="' + $value + '"]').slideDown();

    })

    /*===================================*
    16. CONTACT FORM JS
    *===================================*/
    $("#submitButton").on("click", function(event) {
        event.preventDefault();
        var mydata = $("form").serialize();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "contact.php",
            data: mydata,
            success: function(data) {
                if (data.type === "error") {
                    $("#alert-msg").removeClass("alert-msg-success");
                    $("#alert-msg").addClass("alert-msg-failure");
                } else {
                    $("#alert-msg").addClass("alert-msg-success");
                    $("#alert-msg").removeClass("alert-msg-failure");
                    $("#first-name").val("Enter Name");
                    $("#email").val("Enter Email");
                    $("#subject").val("Enter Subject");
                    $("#description").val("Enter Message");

                }
                $("#alert-msg").html(data.msg);
                $("#alert-msg").show();
            },
            error: function(xhr, textStatus) {
                alert(textStatus);
            }
        });
    });

    /*===================================*
    17. GOOGLE MAP JS
    *===================================*/
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 12,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(51.4969759, -0.1210274), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": "2.00"
                }]
            }, {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#9c9c9c"
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#7b7b7b"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#46bcec"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c8d7d4"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#070707"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(51.4969759, -0.1210274),
            map: map,
            icon: "image/map-location.png",
            title: 'Snazzy!'
        });
    }

    /*===================================*
    18. LIST GRID JS
    *===================================*/
    var listButton = $('.list-view');
    var gridButton = $('.grid-view');
    var wrapper = $('.list_grid_container');

    listButton.on('click', function() {

        gridButton.removeClass('on');
        listButton.addClass('on');
        wrapper.removeClass('grid').addClass('list');

    });

    gridButton.on('click', function() {

        listButton.removeClass('on');
        gridButton.addClass('on');
        wrapper.removeClass('list').addClass('grid');

    });

    /*===================================*
    19. SIDE MENU JS
    *===================================*/

    $(document).ready(function() {
        if ($('#sidebar, #mega-dropdown-menu').length > 0) {
            $("#sidebar, #mega-dropdown-menu").mCustomScrollbar({
                theme: "minimal"
            });
        };

        $('#dismiss, .header-overlay').on('click', function() {

            $('#sidebar').removeClass('active');

            $('.header-overlay,body').removeClass('active');

        });

        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').addClass('active');
            $('.header-overlay,body').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });


    /*===================================*
    20. TOOLTIP JS
    *===================================*/
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    /*===================================*
    21. IMAGE POPUP JS
    *===================================*/

    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            }
        });
    });

    /*===================================*
    22. INSTAGRAM SLIDER JS
    *===================================*/
    $(document).ready(function() {
        $('.insta-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            smartSpeed: 3000,
            animateIn: 'linear',
            animateOut: 'linear',
            thumbs: false,
            responsiveClass: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {

                    items: 2,

                },
                380: {
                    items: 3,
                },
                576: {
                    items: 4,
                },
                991: {

                    items: 5,

                },
                1200: {

                    items: 6,

                },
                1300: {

                    items: 9,

                },
            }
        })
    });

    $(document).ready(function() {
        $('.insta-slider-2').owlCarousel({
            loop: true,
            rtl: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            smartSpeed: 3000,
            animateIn: 'linear',
            animateOut: 'linear',
            thumbs: false,
            responsiveClass: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {

                    items: 2,

                },
                380: {
                    items: 3,
                },
                576: {
                    items: 4,
                },
                991: {

                    items: 5,

                },
                1200: {

                    items: 6,

                },
                1300: {

                    items: 9,

                },
            }
        })
    });

    /*===================================*
    23. SLIDER WIDTH JS
    *===================================*/

    $(document).ready(function() {
        $(".categories-btn").click(function() {
            $("#mega-dropdown-menu").toggleClass("down");
        });
        if ($(window).width() >= 768) {
            $(".categories-btn").click(function() {
                $(".slider-width").toggleClass("width-half");
            });
        }
    });

})(jQuery);

/*===================================*
24. SCROLLDOWN JS
*===================================*/
$(document).ready(function() {
    $(".mouse-down").click(function() {
        $('html, body').animate({
            scrollTop: $(".categories-section").offset().top
        }, 600);
    });
});

/*===================================*
25.COUNTDOWN JS
*===================================*/
$('.countdown-time').each(function() {
    var endTime = $(this).data('time');
    $(this).countdown(endTime, function(tm) {
        $(this).html(tm.strftime('<span class="countdown-box"><span class="countdown days">%D </span><span class="cd-text">Days</span></span><span class="countdown-box"><span class="countdown hours">%H</span><span class="cd-text">Hours</span></span><span class="countdown-box"><span class="countdown minutes">%M</span><span class="cd-text">Minutes</span></span><span class="countdown-box"><span class="countdown seconds">%S</span><span class="cd-text">Seconds</span></span>'));
    });
});
/*===================================*
26.SEARCH OPEN JS
*===================================*/

$(document).ready(function() {
    $(".search-toggle").click(function() {
        $(".search-section").toggleClass("open");
    });
    $(".closs-toggle").click(function() {
        $(".search-section").removeClass("open");
    });
});
$(document).on('keyup', function(evt) {
    if (evt.keyCode == 27 && $('.search-section').hasClass('open')) {
        console.log(evt.keyCode);
        $('.search-section').removeClass("open");
    }
});

/*===================================*
27.ACCORDION JS
*===================================*/

function getAccordion(element_id, screen) {
    $(window).resize();

    if ($(window).width() < screen) {
        var concat = '';
        obj_tabs = $(element_id + " li").toArray();
        obj_cont = $(".tab_con .tab-pane").toArray();
        jQuery.each(obj_tabs, function(n, val) {
            concat += '<div class="card">';
            concat += '<div class="card-header" id="heading' + n + '">';
            concat += '<h4 class="panel-title"><a id="predict' + n + '" role="button" data-toggle="collapse" data-parent="#tab-accordion" href="#collapse' + n + '" aria-expanded="false" aria-controls="collapse' + n + '">' + val.innerText + '</a></h4>';
            concat += '</div>';
            concat += '<div id="collapse' + n + '" class="collapse" role="tabpanel" aria-labelledby="heading' + n + '" data-parent="#tab-accordion">';
            concat += '<div class="panel-body">' + obj_cont[n].innerHTML + '</div>';
            concat += '</div>';
            concat += '</div>';
        });
        $("#tab-accordion").html(concat);
        $("#tab-accordion").find('.collapse:first').addClass("show");
        $("#tab-accordion").find('.panel-title a:first').attr("aria-expanded", "true");
        $(element_id).remove();
        $(".tab_con").remove();

        $('#tab-accordion').on('shown.bs.collapse', function(e) {
            var id = $(e.target).prev().find("[id]")[0].id;
            navigateToElement(id);
        })

        function navigateToElement(id) {
            $('html, body').animate({
                scrollTop: $("#" + id).offset().top
            }, 700);
        }
    }
}

$(document).ready(function() {
    getAccordion("#tab-list", 767);
});

/*===================================*
 28.COUNTDOWN JS
*===================================*/
$('.countdown_time').each(function() {
    var endTime = $(this).data('time');
    $(this).countdown(endTime, function(tm) {
        $(this).html(tm.strftime('<div class="countdown_box"><div class="countdown_content"><span class="countdown days">%D </span><span class="cd_text">Days</span></div></div><div class="countdown_box"><div class="countdown_content"><span class="countdown hours">%H</span><span class="cd_text">Hrs</span></div></div><div class="countdown_box"><div class="countdown_content"><span class="countdown minutes">%M</span><span class="cd_text">Min</span></div></div><div class="countdown_box"><div class="countdown_content"><span class="countdown seconds">%S</span><span class="cd_text">Sec</span></div></div>'));
    });
});

/*==============================================================
29. FIT VIDEO JS
==============================================================*/
if ($(".fit-videos").length > 0) {
    $(".fit-videos").fitVids({
        customSelector: "iframe[src^='https://w.soundcloud.com']"
    });
}

/*===================================*
30. MASONRY JS
*===================================*/
$(window).on("load", function() {
    var $grid_selectors = $(".grid_container");
    var filter_selectors = ".grid_filter > li > a";
    if ($grid_selectors.length > 0) {
        $grid_selectors.imagesLoaded(function() {
            if ($grid_selectors.hasClass("masonry")) {
                $grid_selectors.isotope({
                    itemSelector: '.grid_item',
                    percentPosition: true,
                    layoutMode: "masonry",
                    masonry: {
                        columnWidth: '.grid-sizer'
                    },
                });
            } else {
                $grid_selectors.isotope({
                    itemSelector: '.grid_item',
                    percentPosition: true,
                    layoutMode: "fitRows",
                });
            }
        });
    }

    //isotope filter
    $(document).on("click", filter_selectors, function() {
        $(filter_selectors).removeClass("current");
        $(this).addClass("current");
        var dfselector = $(this).data('filter');
        if ($grid_selectors.hasClass("masonry")) {
            $grid_selectors.isotope({
                itemSelector: '.grid_item',
                layoutMode: "masonry",
                masonry: {
                    columnWidth: '.grid_item'
                },
                filter: dfselector
            });
        } else {
            $grid_selectors.isotope({
                itemSelector: '.grid_item',
                layoutMode: "fitRows",
                filter: dfselector
            });
        }
        return false;
    });

    $(window).on("resize", function() {
        setTimeout(function() {
            $grid_selectors.find('.grid_item').removeClass('animation').removeClass('animated'); // avoid problem to filter after window resize
            $grid_selectors.isotope('layout');
        }, 300);
    });
});

$('.grid_item .image_popup').on('click', function() {
    $(this).find('.link_container').magnificPopup('open');
});
$('.link_container').each(function() {
    $(this).magnificPopup({
        delegate: '.image_popup',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/*Demo js*/
$(window).on("load", function() {
    document.onkeydown = function(e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }

        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
    }

    $("html").on("contextmenu", function() {
        return false;
    });
});
/*===================================*
DEMO SWITCHER JS
*===================================*/

$(document).ready(function() {
    $(window).on("load", function() {
        $('body').prepend('<div id="demo_content" class="demo_switcher"></div>');
        $("#demo_content").load("http://bestwebcreator.com/ATZShop/demo/demo.html");
    });
});