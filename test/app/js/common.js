$(function() {

    window.onload = function() {
        // popupHeaderSearch();
        showSearch();
        mobileMenu();
        addBackground();
        homeSliderOne();
        homeSliderTwo();
        homeSliderThree();
        focusForm();
        initRemoveError();
        accordeon();
        accordeon_terms();
        animate();
        // mix();

        initPriceSlider();
        customScrollbar();
        viewMoreSubMenu();
        customSelect();
        // anim_404();
        tabs();

        openMenuSidebar();
        cloceMenuSidebar();

    };
    //begin openMenuSidebar, cloceMenuSidebar
    function openMenuSidebar() {
        $( '.open_menu_sidebar' ).on('click', function () {

            $('.open_menu_sidebar').toggleClass('icon_close');
            $('.sidebar').toggleClass('sidebar_open');
            $('.my_account').toggleClass('wrap_sidebar_open');
        });
    }

    function cloceMenuSidebar() {
        $(document).click( function(event){
            if( $(event.target).closest(".sidebar_wr").length ) {             
            $( ".open_menu_sidebar" ).removeClass('icon_close');
            $( ".sidebar" ).removeClass('sidebar_open');
            $( ".my_account" ).removeClass('wrap_sidebar_open');
            }
        });
    }
    //end openMenuSidebar, cloceMenuSidebar

    //begin tabs
    function tabs() {
        var bl = $('.tabs'),
            tabs = bl.find('.tab_list'),
            content = bl.find('.tab_content');

        tabs.first().addClass('active');
        content.first().addClass('active');

        tabs.on('click', function(e) {
            e.preventDefault();

            tabs.removeClass('active');
            $(this).addClass('active');
            content.removeClass('active');
            $($(this).attr('href')).addClass('active');
        })

    }
    //end tabs

    //begin customSelect
    function customSelect() {
        $(".sort_by select").selectBoxIt({});
        $(".country").selectBoxIt({});
        $(".state").selectBoxIt({});
    }
    //end customSelect


    //begin customScrollbar
    function customScrollbar() {
        $(".scrollbar").mCustomScrollbar({});
    }
    //end customScrollbar

    //begin viewMoreSubMenu
    function viewMoreSubMenu() {
        $('.view_more').click(function(event) {
            var current = $(event.currentTarget);
            current.parent().find('.hidden_sub_menu_plus').slideToggle();
        });
    }
    //end viewMoreSubMenu

    //begin mobileMenu
    function mobileMenu() {

        $('.menu_button').click(function() {
            $('.header').toggleClass('main_menu_open').children('.main_menu').stop().slideToggle();
        });
    }
    //end mobileMenu

    //begin showSearch
    function showSearch() {
        var search = document.querySelector('.search'),
            bttnSeacrh = document.querySelector('.header_search');

        bttnSeacrh.addEventListener('click', function(event) {
            // if($('.search').hasClass('search_open')) {
            if (search.classList.contains('search_open')) {
                if (!$('.search__input_group input').val()) {
                    search.classList.remove('search_open');
                } else {
                    //action search
                }

            } else {
                search.classList.add('search_open');
                removeInput();
            }

        });

        document.addEventListener('click', function(e) {
            if (!e.target.matches('.search, .search *')) {
                search.classList.remove('search_open');
            }

        })

        function removeInput() {
            var setInput = setTimeout(function() {
                if (!$('.search__input_group input').val()) {
                    search.classList.remove('search_open');
                }

            }, 8000);

        }

    }
    //end showSearch


    //begin slider
    function homeSliderOne() {
        $('.slider_first').slick({
            dots: true,
            arrow: true,
            autoplay: true,
            autoplaySpeed: 6000
        });
    }

    function homeSliderTwo() {
        $('.slider_two').slick({
            // dots: false,
            arrow: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    }
                }
            ]

        });
    }


    function homeSliderThree() {
        $('.slider_three').slick({
            // dots: false,
            arrow: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrow: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrow: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000
                    }
                }
            ]

        });
    }
    //end slider

    //begin price slider
    function initPriceSlider() {
        var handle1 = $("#custom-handle1 span");
        var handle2 = $("#custom-handle2 span");
        $("#slider_renge").slider({
            min: 0,
            max: 10000,
            values: [2800, 7500],
            range: true,
            stop: function(event, ui) {
                $("input#minCost").val($("#slider_renge").slider("values", 0));
                $("input#maxCost").val($("#slider_renge").slider("values", 1));
            },
            create: function() {
                handle1.text($(this).slider("values", 0));
                handle2.text($(this).slider("values", 1));
            },
            slide: function(event, ui) {
                $("input#minCost").val($("#slider_renge").slider("values", 0));
                $("input#maxCost").val($("#slider_renge").slider("values", 1));
                handle1.text(ui.values[0]);
                handle2.text(ui.values[1]);
            }
        });

        $("input#minCost").change(function() {
            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (parseInt(value1) > parseInt(value2)) {
                value1 = value2;
                $("input#minCost").val(value1);
            }
            $("#slider_renge").slider("values", 0, value1);

            handle1.text(value1);

            if (value1 < 600) {
                $('.from_price').css('display', 'none');
            } else if (value1 > 600) {
                $('.from_price').css('display', 'block');
            }
        });


        $("input#maxCost").change(function() {
            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (value2 > 10000) {
                value2 = 10000;
                $("input#maxCost").val(10000)
            }

            if (parseInt(value1) > parseInt(value2)) {
                value2 = value1;
                $("input#maxCost").val(value2);
            }
            $("#slider_renge").slider("values", 1, value2);
            handle2.text(value2);


            if (value2 > 8300) {
                $('.to_price').css('display', 'none');
            } else if (value2 < 8300) {
                $('.to_price').css('display', 'block');
            }
        });



        // $('input').keypress(function (event) {
        //     var key, keyChar;
        //     if (!event) var event = window.event;

        //     if (event.keyCode) key = event.keyCode;
        //     else if (event.which) key = event.which;

        //     if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        //     keyChar = String.fromCharCode(key);

        //     if (!/\d/.test(keyChar)) return false;

        // });
    }
    //end price slider

    //begin animation
    function animate() {
        $(".animated_up, .animated_up2, .animated_up3").animated("fadeInUp", "fadeOut");

        $(".animated_in").animated("fadeIn", "fadeOut");

        $(".animated_left").animated("fadeInLeft", "fadeOut");
        $(".animated_right").animated("fadeInRight", "fadeOut");
    }
    //end animation

    //begin anim_404
    function anim_404() {
        setTimeout(function() {
            $('.animChair').addClass('anim_img');
        }, 2500);
    }
    //end anim_404



    //begin focus_form
    function focusForm() {
        $("input, textarea").focus(function() {
            $(this).parent().next().next().addClass('active');
            $(this).parent().next().addClass('active');
            $(this).parent().parent().addClass('active');

        });
        $("input, textarea").focusout(function() {
            if ($(this).val().trim() == '') {
                $(this).parent().next().next().removeClass('active');
                $(this).parent().parent().removeClass('active');
            }
        });   

    }
    //end focus_form


    //begin 
    function initRemoveError() {
        $('.error_text').click(function() {
            $(this).parent().find('input').focus();
            $(this).css("visibility", "hidden");
        });
    }
    //end

    function addBackground() {
        $('div, section').each(function() {
            var url = $(this).attr('data-background');
            if (url) {
                $(this).css({
                    'background-image': 'url(' + url + ')',
                    'background-repeat': 'no-repeat',
                });
            }
        });
    }

    //begin mixItUp
    // function mix() {
    //     var $filterSelect = $('#FilterSelect'),
    //         $grid = $('#product_grid_mix');

    //     $grid.mixItUp({
    //         animation: {
    //             duration: 1000,
    //             effects: 'translateZ(-360px) stagger(110ms) fade',
    //             easing: 'ease'
    //         }
    //     });

    //     $filterSelect.on('change', function() {
    //         $grid.mixItUp('filter', this.value);
    //     });

    // }
    //begin mixItUp



    //begin accordeon_terms
    function accordeon_terms() {
        $("#accord_term .hidden_content").hide().prev().click(function() {
            $(this).parents("#accord_term").find(".hidden_content").not(this).slideUp().parent().removeClass("show_content");
            $(this).next().not(":visible").slideDown().parent().addClass("show_content");
        });
    }
    //begin accordeon_terms



    //begin accordeon
    function accordeon() {
        $("#accord h5").click(function() {
            $(this).next().slideToggle().parent().toggleClass("show_content");
        });
    }
    //end accordeon



    //begin magnific
    // function popupHeaderSearch() {
    //     $('.popup').magnificPopup({
    //         type: 'inline',
    //         focus: '#text'
    //     });
    // }
    //end magnific

});



//begin deferred image upload
var deferredDownload = (function() {
    'use strict';

    function init() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
            }
        }
    }
    window.onload = init;
})();
//end deferred image upload


//begin capcha
var CaptchaCallback = function() {
    jQuery('.g-recaptcha').each(function(index, el) {
        grecaptcha.render(el, {
            'sitekey': '6LetKUwUAAAAAMUSsaohjzyWkBX0pZbJqcv6SVt9'
        });
    });
};
//end capcha