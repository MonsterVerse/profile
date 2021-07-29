$(document).ready(function () {
    $('.hero-slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            },
        ]
        
    });
    $('.teamSlide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  centerPadding: '10px',
                }
              }
        ]
        
    });
    
    $('.list-clients').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });
    $('.hmListNews').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    // Timelinee

    // Tabsssssss
    $('#tabs li:first').addClass('tab--selected');
    $('.tab-panel').hide();
    $('.tab-panel:first').show();
    $('#tabs li a').click(function(){
        var t = $(this).attr('href');
        $('#tabs li').removeClass('tab--selected');
        $(this).parent().addClass('tab--selected');        
        $('.tab-panel').hide();
        $(t).fadeIn('slow');
        return false;
    })

    //Header fix
    $(window).scroll(function () {
        if ($("body").hasClass("subPage")) {
            $(".DH-Header").addClass("fixed");
        } else if ($(window).scrollTop() >= 200) {
            $(".DH-Header").addClass("fixed");
        } else {
            $(".DH-Header").removeClass("fixed");
        }
    });


    /* OPNING */
    $(function() {
        var loadCount = 0,
            imgLength = $("img").size();
        $("img").each(function() {
            var src = $(this).attr("src");
            $("<img>").attr("src", src)
                .load(function() {
                    loadCount++;
                });
        });
        var webStorage = function(){
            var $loading = $('.loader');

            window.onpageshow = function(event) {
                if (event.persisted) {
                    window.location.reload();
                    sessionStorage.setItem('access', 0);
                } /*else {
				if (window.performance.navigation.type === 1) {
					sessionStorage.removeItem('access')
				}
			}*/
            };
            if(sessionStorage.getItem('access')){
                var timer = setInterval(function() {
                    $(".loader__bar").css('width', (loadCount / imgLength) * 100 + "%");
                    if((loadCount / imgLength) * 100 == 100){
                        clearInterval(timer);
                        $(".loader__bar").animate({"opacity": 0}, 100);
                        $("body").addClass('motion');
                        if ($('#wrap').hasClass('subPage')) {
                            $('#headWrap').addClass('fixed');
                        }
                        setTimeout(function(){$(".loader").fadeOut();},750);
                    }
                }, 5);
            } else {
                $(".loader__bar").delay(200).animate({"opacity": 0}, 200);
                $("body").addClass('motion');
                setTimeout(function(){$(".loader").fadeOut();},750);
                var timer = setInterval(function() {
                    $(".loader__bar").css('width', (loadCount / imgLength) * 100 + "%");
                    if((loadCount / imgLength) * 100 == 100){
                        clearInterval(timer);
                    }
                }, 5);
                sessionStorage.setItem('access', 0);
            }
        }
        webStorage();

        $('nav a, .link').click(function(){
            var url = $(this).attr("href");
            $('.loader').show();
            $("body").addClass('off');
            setTimeout(function(){
                location.href = url;
            },750);
            return false;
        });
    });

    //motion
    $(function(){
        $(window).on('load scroll', function() {
            var scrolled = $(window).scrollTop();
            var windowHeight = $(window).height();
            $(".mf, .mfu, .ef").each(function(){
                var imgPos = $(this).offset().top;
                if (scrolled > imgPos - windowHeight + windowHeight/8){
                    $(this).addClass("on");
                }
            });
            $(".mmr, .mmrl, .mfd, .mfl, .mfr, .mful").each(function(){
                var imgPos = $(this).offset().top;
                if (scrolled > imgPos - windowHeight + windowHeight/4){
                    $(this).addClass("on");
                }
            });
            $(".msk, .mskl").each(function(){
                var imgPos = $(this).offset().top;
                if (scrolled > imgPos - windowHeight + windowHeight/3){
                    $(this).addClass("on");
                }
            });
        });
    });



    /* parallax
-------------------------------------------------- */
    $(function () {
        $(".parallax").each(function(){
            var bg1_top = $(this).offset().top;
            var win_h = $(window).height();
            var start_bg1 = bg1_top - win_h;
            var windowWidth = $(window).width();
            var windowSm = 767;
            $(window).on('load scroll', function() {
                var y = $(this).scrollTop();
                if (windowWidth <= windowSm) {
                    if (y >= start_bg1 - 280) {
                        $('.parallax').css('background-position-y', (y - bg1_top) * 0.2 + 'px');
                    }
                } else {
                    if (y >= start_bg1) {
                        $('.parallax').css('background-position-y', -(y - bg1_top) * 0.2 + 'px');
                    }
                }
            });
        });
    });



    //Counter
    $('.countfect').each(function(){var $this=$(this),countTo=$this.attr('data-num');$({countNum:$this.text()}).animate({countNum:countTo},{duration:3000,easing:'linear',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});

    $('.question-content').click(function() {
        $("i", this).toggleClass("bi-caret-down-fill bi-caret-up-fill");
        $("a", this).toggleClass("question-clicked");
    });
});

