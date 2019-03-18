$(function(){
  $('.questions').click(
    function(){
      var $answer=$(this).find('.answer');
      if($answer.hasClass('open')){
        $answer.removeClass('open');
        $(this).find('span').text('+');
        $answer.slideUp();
      }else{
        $answer.addClass('open');
        $(this).find('span').text('-');
        $answer.slideDown();
      }
    });

    var  $topWrapper=$('.top-wrapper'),
       $win=$(window);

    $win.on('load scroll', function(){
      var $value=$(this).scrollTop();
      if($value>200){
        $('.fa-angle-double-up').fadeIn();
      }else{
        $('.fa-angle-double-up').fadeOut();
      }
    });
    $('.fa-angle-double-up').click(function(){
    $('html').animate({scrollTop: 0});
  });
});
