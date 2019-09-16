var $ = jQuery.noConflict();

$(function() {
	$(".carousel").slick({
		dots: true,
		infinite: true,
		speed: 300,
  		slidesToShow: 1,
  		arrows: false,
  		adaptiveHeight: true
	});
	$(".carousel-tours").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,

		responsive: [
		{
  			breakpoint: 1300,
  			settings: {
  				slidesToShow: 2,
  			}
  		},
  		{
  			breakpoint: 900,
  			settings: {
  				slidesToShow: 1,
  			}
  		}
		]
	});


	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('.header').addClass('fixed');
		}
		else {
			$('.header').removeClass('fixed');
		}
	});

	$('.mob-nav-button').on('click', function() {
		if($('.menu').hasClass('active') && $('.mob-nav-button').hasClass('active')) {
			$('.menu').removeClass('active');
			$('.mob-nav-button').removeClass('active');
		}
		else {
			$('.menu').addClass('active');
			$('.mob-nav-button').addClass('active');
		}
	});


		$('input[name=tel]').inputmask("+38(999) 999-9999");
		$('select').niceSelect();
		$('.review').mCustomScrollbar();

		$(window).resize(function() {
			if($(window).width() > '899') {
				$('.submenu-overflow').mCustomScrollbar();
			}
		});


		$('.form-tour').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: {
                    required: true,
                    minlength: 14
                    
                },
                email: {
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите имя!",
                    minlength: "В имени должно быть не менее 2 символов!"
                },
                tel: {
                    required: "Введите телефон!",
                    minlength: "Введите телефон!"
                },
                email: {
                    required: "Введите e-mail!",
                    email: "Адрес должен быть вида name@domain.com"
                }
            }
        });


        $('.section-tours .nav-links .links li').click(function(){
			var tab_id = $(this).attr('tabid');

			$('.section-tours .nav-links .links li').removeClass('active');
			$('.carousel-tours').removeClass('active');

			$(this).addClass('active');
			$("#tabcontent"+tab_id).addClass('active');

		});


});