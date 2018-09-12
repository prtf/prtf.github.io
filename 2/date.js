/*
(function() {
    $('.wrapper-slider__button').on('click', function() {
        $(this).animate({left: '+=50'});
        $('.wrapper').css("background-color" , "black");
        $(this).addClass('wrapper-slider__button_off'); }); 
});






$(function() {
    $('.wrapper-slider__button').on('click', function() {
        if($('#valid').hasClass('.wrapper-slider__button_on')) {
            $('.wrapper-slider__button').animate({left: '+=50'});
            $('#valid').removeClass('.wrapper-slider__button_on').addClass('.wrapper-slider__button_off');
            $('.wrapper').css("background-color" , "black").css("color", "#fff");
        }
        else {
            $('.wrapper-slider__button').animate({right: '+=50'});
           $('#valid').removeClass('.wrapper-slider__button_off').addClass('.wrapper-slider__button_on'); 
            $('.wrapper').css("background-color" , "white").css("color", "black"); }
    }); 
});
*/

$(function() {
	var $bgcOriginal = $('.wrapper').css('background-color');
	var $colorOriginal = $('.wrapper').css('color'); 
    $('.wrapper-slider__button').on('click', function() {
        if ($(this).hasClass('wrapper-slider__button_day') ) {
            $(this).removeClass('wrapper-slider__button_day').addClass('wrapper-slider__button_night'); 
        	$('.wrapper').css({'background-color': 'black', 'color': 'white'}); }
        else {
            $(this).removeClass('wrapper-slider__button_night').addClass('wrapper-slider__button_day');
        	$('.wrapper').css({'background-color': $bgcOriginal, 'color': $colorOriginal});
        }
    }); 
});