 $(document).ready(function(){
 $('.map__wrapper').click(function(){
  $(this).parent().children('.location').slideToggle();
  return false;
 });
}); 

$(function(){
  $(".link-1").click(function(){ // отлавливаем нажатие на ссылку
      $(".proj").css('display', 'block');
      $(".phot").css('display' , 'none');
      $(".wdesign").css('display' , 'none');
      $(".brand").css('display' , 'none');
      $(".mobapp").css('display' , 'none');
       // задаем стили
    });
  $(".link-2").click(function() {
  	  $(".proj").css('display', 'none');
      $(".phot").css('display' , 'block');
      $(".wdesign").css('display' , 'none');
      $(".brand").css('display' , 'none');
      $(".mobapp").css('display' , 'none');
    });
  $(".link-3").click(function() {
  	  $(".proj").css('display', 'none');
      $(".phot").css('display' , 'none');
      $(".wdesign").css('display' , 'block');
      $(".brand").css('display' , 'none');
      $(".mobapp").css('display' , 'none');
    });
  $(".link-4").click(function() {
  	  $(".proj").css('display', 'none');
      $(".phot").css('display' , 'none');
      $(".wdesign").css('display' , 'none');
      $(".brand").css('display' , 'block');
      $(".mobapp").css('display' , 'none');
    });
  $(".link-5").click(function() {
  	  $(".proj").css('display', 'none');
      $(".phot").css('display' , 'none');
      $(".wdesign").css('display' , 'none');
      $(".brand").css('display' , 'none');
      $(".mobapp").css('display' , 'block');
    });
  });

